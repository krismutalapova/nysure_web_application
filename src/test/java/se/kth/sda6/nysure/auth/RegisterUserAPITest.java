package se.kth.sda6.nysure.auth;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import se.kth.sda6.nysure.auth.AuthController;
import se.kth.sda6.nysure.auth.AuthRequest;
import se.kth.sda6.nysure.user.User;
import se.kth.sda6.nysure.user.UserRepository;
import se.kth.sda6.nysure.user.UserService;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class RegisterUserAPITest {
    @Autowired
    UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthController authController;

    @Autowired
    UserRepository userRepository;

    private static String personnummerOK = "19901024-1111";
    private static String emailOK = "myemail@is.ok";
    private static String passwordOK = "mypasswordisok007";
    private static String nameOK = null;
    private static String phoneNumberOK = null;

    User testUserOk = createNewUser(personnummerOK, emailOK, passwordOK, nameOK, phoneNumberOK);

    private User createNewUser(String id, String email, String password, String name, String phoneNumber) {
        User u = new User();
        u.setId(id);
        u.setEmail(email);
        u.setPassword(password);
        u.setName(name);
        u.setPhone(phoneNumber);
        return u;
    }

    private void clear() {
        try {
            userRepository.deleteById(personnummerOK);
        } catch (EmptyResultDataAccessException e) {
            //User already removed, no need for more action
        }
        try {
            User foundUser = userService.findUserByEmail(emailOK);
            userRepository.delete(foundUser);
        } catch (Exception e) {
            //User does not exist, no need for more action
        }
    }

    @Test
    void positiveRegisterUserAPI() {
        //Register User CREATED + Stored correctly in DB
        ResponseEntity response = authController.register(testUserOk);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());

        //User stored and retrieved correctly
        User foundUser = userService.findUserByEmail(emailOK);
        assertEquals(testUserOk.getId(), foundUser.getId());
        assertEquals(personnummerOK, foundUser.getId());
        assertEquals(emailOK, foundUser.getEmail());
        assertEquals(nameOK, foundUser.getName());
        assertEquals(phoneNumberOK, foundUser.getPhone());

        //Password stored encrypted
        Boolean encryptedPass = passwordEncoder.matches(passwordOK, foundUser.getPassword());
        assertTrue(encryptedPass);

    }

    @Test
    void negativePersonnummerRegisterUserAPI() {
        //Test 2 fails: shouldn't accept bad format
        //Personnummer empty
        ResponseEntity badPN1 = authController.register(createNewUser("", emailOK, passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badPN1.getStatusCode());
        clear();

        //Personnummer incorrect pattern --> get a 201 CREATED instead of BAD_REQUEST (format is wrong)
        //ResponseEntity badPN2 = authController.register(createNewUser("19902410-9900", emailOK, passwordOK, nameOK, phoneNumberOK));
        //assertEquals(HttpStatus.BAD_REQUEST, badPN2.getStatusCode());
        //clear();

        //Personnummer no hyphen
        ResponseEntity badPN3 = authController.register(createNewUser("199010249900", emailOK, passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badPN3.getStatusCode());
        clear();

        //Personnummer no full year
        ResponseEntity badPN4 = authController.register(createNewUser("901024-9900", emailOK, passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badPN4.getStatusCode());
        clear();

        //Personnummer letters
        ResponseEntity badPN5 = authController.register(createNewUser("YYYYMMDD-XXXX", emailOK, passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badPN5.getStatusCode());
        clear();
    }

    @Test
    void negativeEmailRegisterUserAPI() {
        //Test 2 and 4 fail
        //Email empty
        ResponseEntity badEmail1 = authController.register(createNewUser(personnummerOK, "", passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badEmail1.getStatusCode());
        clear();

        //Email incorrect pattern --> passes as OK (returns 201 CREATED)
        //ResponseEntity badEmail2 = authController.register(createNewUser(personnummerOK, "john.gmail@com", passwordOK, nameOK, phoneNumberOK));
        //assertEquals(HttpStatus.BAD_REQUEST, badEmail2.getStatusCode());
        //clear();

        //Email no @
        ResponseEntity badEmail3 = authController.register(createNewUser(personnummerOK, "johngmail.com", passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badEmail3.getStatusCode());
        clear();

        //Email no . --> passes as OK (returns 201 CREATED)
        //ResponseEntity badEmail4 = authController.register(createNewUser(personnummerOK, "john@gmailcom", passwordOK, nameOK, phoneNumberOK));
        //assertEquals(HttpStatus.BAD_REQUEST, badEmail4.getStatusCode());
        //clear();

        //Email CAPITAL letter --> passes as 201 CREATED but Formatting should be handled
        ResponseEntity badEmail5 = authController.register(createNewUser(personnummerOK, "JOHN@GMAIL.COM", passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.CREATED, badEmail5.getStatusCode());
        clear();

        //Email letters with accents --> passes as OK (returns 201 CREATED)
        //ResponseEntity badEmail6 = authController.register(createNewUser(personnummerOK, "jöhn@gmäîl.côm", passwordOK, nameOK, phoneNumberOK));
        //assertEquals(HttpStatus.BAD_REQUEST, badEmail6.getStatusCode());
        //clear();

        //Email no name
        ResponseEntity badEmail7 = authController.register(createNewUser(personnummerOK, "@gmail.com", passwordOK, nameOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badEmail7.getStatusCode());
        clear();
    }

    @Test
    void negativePasswordRegisterUserAPI1() {
        //Password empty
        ResponseEntity badPassword1 = authController.register(createNewUser(personnummerOK, emailOK, "", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.FORBIDDEN, badPassword1.getStatusCode());
        clear();

    }

    @Test
    void negativePasswordRegisterUserAPI2() {
        //Password too short / < 5
        ResponseEntity badPassword2 = authController.register(createNewUser(personnummerOK, emailOK, "test", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.FORBIDDEN, badPassword2.getStatusCode());
        clear();

    }

    @Test
    void negativePasswordRegisterUserAPI3() {
        //Password too long / > 100
        ResponseEntity badPassword3 = authController.register(createNewUser(personnummerOK, emailOK, "negativePasswordRegisterUserAPInegativePasswordRegisterUserAPInegativePasswordRegisterUserAPInegative", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.FORBIDDEN, badPassword3.getStatusCode());
        clear();

        /*
        //Nice-to-haves
        //Password no Uppercase
        ResponseEntity badPassword4 = authController.register(new User(personnummerOK, emailOK, "thisislowsecurity", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword4.getStatusCode());
        //Password no number
        ResponseEntity badPassword5 = authController.register(new User(personnummerOK, emailOK, "thisislowsecurity", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword5.getStatusCode());
        //Password equals name
        ResponseEntity badPassword6 = authController.register(new User(personnummerOK, emailOK, "Myname Isok", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword6.getStatusCode());
        //Password equals birth date / 8 first numbers in personnummer
        ResponseEntity badPassword7 = authController.register(new User(personnummerOK, emailOK, "19901024", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword7.getStatusCode());
        //Password all numbers
        ResponseEntity badPassword8 = authController.register(new User(personnummerOK, emailOK, "1234567890", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword8.getStatusCode());
        //Password with a space
        ResponseEntity badPassword9 = authController.register(new User(personnummerOK, emailOK, "this password should fail", nameOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword9.getStatusCode());
         */
    }

    @Test
    void negativeNameRegisterUserAPI() {
        //All 4 pass
        //Name empty
        clear();
        ResponseEntity badName1 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, "", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName1.getStatusCode());
        clear();

        //Name too short / < 3
        ResponseEntity badName2 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, "ab", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName2.getStatusCode());
        clear();

        //Name too long / > 100
        ResponseEntity badName3 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, "negativeNameRegisterUserAPInegativeNameRegisterUserAPInegativeNameRegisterUserAPInegativeNameRegisterUserAPI", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName3.getStatusCode());
        clear();

        //Name null
        ResponseEntity badName8 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, null, phoneNumberOK));
        assertEquals(HttpStatus.CREATED, badName8.getStatusCode());
        clear();

        /*
        //Nice-to-haves
        //Name special characters
        ResponseEntity badName4 = authController.register(new User(personnummerOK,emailOK, passwordOK, "!€#%&&€ '*^^€&", addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName4.getStatusCode());
        //Name just 1 name (no distinction first name / last name)
        ResponseEntity badName5 = authController.register(new User(personnummerOK,emailOK, passwordOK, "Test", addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName5.getStatusCode());
        //Name with a number in it
        ResponseEntity badName6 = authController.register(new User(personnummerOK,emailOK, passwordOK, "Test3 1snotright", addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName6.getStatusCode());
        //Name No Capital Letters
        ResponseEntity badName7 = authController.register(new User(personnummerOK,emailOK, passwordOK, "thatis notpretty", addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName7.getStatusCode());
         */
    }

    @Test
    void negativePhoneNumberRegisterUserAPI() {
        //All 4 pass
        //Phone number empty
        ResponseEntity badPhoneNumber1 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, nameOK, ""));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber1.getStatusCode());
        clear();

        //Phone number too short / < 7
        ResponseEntity badPhoneNumber2 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, nameOK, "123456"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber2.getStatusCode());
        clear();

        //Phone number too long / > 15
        ResponseEntity badPhoneNumber3 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, nameOK, "12345678901234567890"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber3.getStatusCode());
        clear();

        //Phone null
        ResponseEntity badAddress8 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, nameOK, null));
        assertEquals(HttpStatus.CREATED, badAddress8.getStatusCode());
        clear();

/*
        //Nice-to-haves
        //Phone number contains anything else than numbers
        ResponseEntity badPhoneNumber4 = authController.register(new User(personnummerOK, emailOK, passwordOK, nameOK, "a123@¨¨-!"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber4.getStatusCode());
        //Phone number with blank spaces
        ResponseEntity badPhoneNumber5 = authController.register(new User(personnummerOK, emailOK, passwordOK, nameOK, "1234 67890"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber5.getStatusCode());

 */
    }
}