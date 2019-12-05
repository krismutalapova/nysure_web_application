package se.kth.sda6.nysure.auth;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import se.kth.sda6.nysure.auth.AuthController;
import se.kth.sda6.nysure.auth.AuthRequest;
import se.kth.sda6.nysure.user.User;
import se.kth.sda6.nysure.user.UserService;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class RegisterUserAPITest {
    @Autowired
    UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthController authController;

    private static String personnummerOK ="19901024-1111";
    private static String emailOK = "myemail@is.ok";
    private static String passwordOK = "mypasswordisok007";
    private static String nameOK = "Myname Isok";
    private static String addressOK = "Mystreetisok 87";
    private static String phoneNumberOK = "1234567890";

    User testUserOk = createNewUser(personnummerOK, emailOK, passwordOK, nameOK, addressOK, phoneNumberOK);

    private User createNewUser(String id, String email, String password, String name, String address, String phoneNumber){
        User u = new User();
        u.setId(id);
        u.setEmail(email);
        u.setPassword(password);
        u.setName(name);
        u.setAddress(address);
        u.setPhone(phoneNumber);
        return u;
    }

    @Test
    void positiveRegisterUserAPI() {
        //Register User OK + Stored correctly in DB
        ResponseEntity response = authController.register(testUserOk);
        assertEquals(HttpStatus.OK, response.getStatusCode());

        //User stored and retrieved correctly
        User foundUser = userService.findUserByEmail(emailOK);
        assertEquals(testUserOk.getId(), foundUser.getId());
        assertEquals(personnummerOK, foundUser.getId());
        assertEquals(emailOK, foundUser.getEmail());
        assertEquals(nameOK, foundUser.getName());
        assertEquals(addressOK, foundUser.getAddress());
        assertEquals(phoneNumberOK, foundUser.getPhone());

        //Password stored encrypted
        Boolean encryptedPass = passwordEncoder.matches(passwordOK, foundUser.getPassword());
        assertTrue(encryptedPass);

    }
    @Test
        void negativePersonnummerRegisterUserAPI() {
        //Tests fail / change OK to BAD_REQUEST
        //Personnummer empty
        ResponseEntity badPN1 = authController.register(createNewUser("", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN1.getStatusCode());
        //Personnummer incorrect pattern
        ResponseEntity badPN2 = authController.register(createNewUser("19902410-9900", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN2.getStatusCode());
        //Personnummer no hyphen
        ResponseEntity badPN3 = authController.register(createNewUser("199010249900", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN3.getStatusCode());
        //Personnummer no full year
        ResponseEntity badPN4 = authController.register(createNewUser("901024-9900", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN4.getStatusCode());
        //Personnummer letters
        ResponseEntity badPN5 = authController.register(createNewUser("YYYYMMDD-XXXX", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN5.getStatusCode());
    }
        @Test
        void negativeEmailRegisterUserAPI() {
        //Test 2 and 4 fail
            //Email empty
            ResponseEntity badEmail1 = authController.register(createNewUser(personnummerOK,"", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail1.getStatusCode());
            //Email incorrect pattern --> passes as OK (returns 201 CREATED)
            ResponseEntity badEmail2 = authController.register(createNewUser(personnummerOK,"john.gmail@com", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail2.getStatusCode());
            //Email no @
            ResponseEntity badEmail3 = authController.register(createNewUser(personnummerOK,"johngmail.com", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail3.getStatusCode());
            //Email no . --> passes as OK (returns 201 CREATED)
            ResponseEntity badEmail4 = authController.register(createNewUser(personnummerOK,"john@gmailcom", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail4.getStatusCode());
            //Email CAPITAL letter
            ResponseEntity badEmail5 = authController.register(createNewUser(personnummerOK,"JOHN@GMAIL.COM", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail5.getStatusCode());
            //Email letters with accents
            ResponseEntity badEmail6 = authController.register(createNewUser(personnummerOK,"jöhn@gmäîl.côm", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail6.getStatusCode());
            //Email no name
            ResponseEntity badEmail7 = authController.register(createNewUser(personnummerOK,"@gmail.com", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail7.getStatusCode());
        }

    @Test
    void negativePasswordRegisterUserAPI() {
        //All 3 fail
        //Password empty --> passes as not a BAD_REQUEST (returns 201 CREATED)
        ResponseEntity badPassword1 = authController.register(createNewUser(personnummerOK, emailOK, "", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badPassword1.getStatusCode());
        //Password too short / < 5 --> passes as not a BAD_REQUEST (returns 201 CREATED)
        ResponseEntity badPassword2 = authController.register(createNewUser(personnummerOK, emailOK, "test", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badPassword2.getStatusCode());
        //Password too long / > 100 --> passes as not a BAD_REQUEST (returns 201 CREATED)
        ResponseEntity badPassword3 = authController.register(createNewUser(personnummerOK, emailOK, "negativePasswordRegisterUserAPInegativePasswordRegisterUserAPInegativePasswordRegisterUserAPInegative", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badPassword3.getStatusCode());

        /*
        //Nice-to-haves
        //Password no Uppercase
        ResponseEntity badPassword4 = authController.register(new User(personnummerOK, emailOK, "thisislowsecurity", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword4.getStatusCode());
        //Password no number
        ResponseEntity badPassword5 = authController.register(new User(personnummerOK, emailOK, "thisislowsecurity", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword5.getStatusCode());
        //Password equals name
        ResponseEntity badPassword6 = authController.register(new User(personnummerOK, emailOK, "Myname Isok", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword6.getStatusCode());
        //Password equals birth date / 8 first numbers in personnummer
        ResponseEntity badPassword7 = authController.register(new User(personnummerOK, emailOK, "19901024", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword7.getStatusCode());
        //Password all numbers
        ResponseEntity badPassword8 = authController.register(new User(personnummerOK, emailOK, "1234567890", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword8.getStatusCode());
        //Password with a space
        ResponseEntity badPassword9 = authController.register(new User(personnummerOK, emailOK, "this password should fail", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPassword9.getStatusCode());
         */
    }

    @Test
    void negativeNameRegisterUserAPI(){
        //All 3 pass
        //Name empty
        ResponseEntity badName1 = authController.register(createNewUser(personnummerOK,emailOK, passwordOK, "", addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName1.getStatusCode());
        //Name too short / < 3
        ResponseEntity badName2 = authController.register(createNewUser(personnummerOK,emailOK, passwordOK, "ab", addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName2.getStatusCode());
        //Name too long / > 100
        ResponseEntity badName3 = authController.register(createNewUser(personnummerOK,emailOK, passwordOK, "negativeNameRegisterUserAPInegativeNameRegisterUserAPInegativeNameRegisterUserAPInegativeNameRegisterUserAPI", addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badName3.getStatusCode());

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
    void negativeAddressRegisterUserAPI(){
        //All 3 pass
        //Name empty
        ResponseEntity badAddress1 = authController.register(createNewUser(personnummerOK,emailOK, passwordOK, nameOK, "", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badAddress1.getStatusCode());
        //Name too short / < 3
        ResponseEntity badAddress2 = authController.register(createNewUser(personnummerOK,emailOK, passwordOK, nameOK, "a1", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badAddress2.getStatusCode());
        //Name too long / > 50
        ResponseEntity badAddress3 = authController.register(createNewUser(personnummerOK,emailOK, passwordOK, nameOK, "negativeAddressRegisterUserAPInegativeAddressRegisterUserAPInegativeAddressRegisterUserAPI", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badAddress3.getStatusCode());

        /*
        //Nice-to-haves
        //Name no letters / no street name
        ResponseEntity badAddress4 = authController.register(new User(personnummerOK,emailOK, passwordOK, nameOK, "3890", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badAddress4.getStatusCode());
        //Name just 1 string of characters (no distinction street name / street number)
        ResponseEntity badAddress5 = authController.register(new User(personnummerOK,emailOK, passwordOK, nameOK, "Myaddress190", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badAddress5.getStatusCode());
        //Name no number for the street
        ResponseEntity badAddress6 = authController.register(new User(personnummerOK,emailOK, passwordOK, nameOK, "Random", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badAddress6.getStatusCode());
        //Name No Capital Letters
        ResponseEntity badAddress7 = authController.register(new User(personnummerOK,emailOK, passwordOK, nameOK, "random 39", phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badAddress7.getStatusCode());
*/
    }
    @Test
    void negativePhoneNumberRegisterUserAPI() {
        //All 3 pass
        //Phone number empty
        ResponseEntity badPhoneNumber1 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, nameOK, addressOK, ""));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber1.getStatusCode());
        //Phone number too short / < 7
        ResponseEntity badPhoneNumber2 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, nameOK, addressOK, "123456"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber2.getStatusCode());
        //Phone number too long / > 15
        ResponseEntity badPhoneNumber3 = authController.register(createNewUser(personnummerOK, emailOK, passwordOK, nameOK, addressOK, "12345678901234567890"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber3.getStatusCode());

/*
        //Nice-to-haves
        //Phone number contains anything else than numbers
        ResponseEntity badPhoneNumber4 = authController.register(new User(personnummerOK, emailOK, passwordOK, nameOK, addressOK, "a123@¨¨-!"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber4.getStatusCode());
        //Phone number with blanck spaces
        ResponseEntity badPhoneNumber5 = authController.register(new User(personnummerOK, emailOK, passwordOK, nameOK, addressOK, "1234 67890"));
        assertEquals(HttpStatus.BAD_REQUEST, badPhoneNumber5.getStatusCode());

 */
    }
}