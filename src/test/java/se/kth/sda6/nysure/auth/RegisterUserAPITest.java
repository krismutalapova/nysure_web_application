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

    User testUserOk = new User(personnummerOK, emailOK, passwordOK, nameOK, addressOK, phoneNumberOK);

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
        //Personnummer empty
        ResponseEntity badPN1 = authController.register(new User("", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN1.getStatusCode());
        //Personnummer incorrect pattern
        ResponseEntity badPN2 = authController.register(new User("19902410-9900", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN2.getStatusCode());
        //Personnummer no hyphen
        ResponseEntity badPN3 = authController.register(new User("199010249900", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN3.getStatusCode());
        //Personnummer no full year
        ResponseEntity badPN4 = authController.register(new User("901024-9900", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN4.getStatusCode());
        //Personnummer letters
        ResponseEntity badPN5 = authController.register(new User("YYYYMMDD-XXXX", emailOK, passwordOK, nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badPN5.getStatusCode());
    }
        @Test
        void negativeEmailRegisterUserAPI() {
            //Email empty
            ResponseEntity badEmail1 = authController.register(new User(personnummerOK,"", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail1.getStatusCode());
            //Email incorrect pattern --> passes as OK (returns 201 CREATED)
            //ResponseEntity badEmail2 = authController.register(new User(personnummerOK,"john.gmail@com", passwordOK, nameOK, addressOK, phoneNumberOK));
            //assertEquals(HttpStatus.BAD_REQUEST, badEmail2.getStatusCode());
            //Email no @
            //ResponseEntity badEmail3 = authController.register(new User(personnummerOK,"johngmail.com", passwordOK, nameOK, addressOK, phoneNumberOK));
            //assertEquals(HttpStatus.BAD_REQUEST, badEmail3.getStatusCode());
            //Email no . --> passes as OK (returns 201 CREATED)
            ResponseEntity badEmail4 = authController.register(new User(personnummerOK,"john@gmailcom", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail4.getStatusCode());
            //Email CAPITAL letter
            ResponseEntity badEmail5 = authController.register(new User(personnummerOK,"JOHN@GMAIL.COM", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail5.getStatusCode());
            //Email letters with accents
            ResponseEntity badEmail6 = authController.register(new User(personnummerOK,"jöhn@gmäîl.côm", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail6.getStatusCode());
            //Email no name
            ResponseEntity badEmail7 = authController.register(new User(personnummerOK,"@gmail.com", passwordOK, nameOK, addressOK, phoneNumberOK));
            assertEquals(HttpStatus.BAD_REQUEST, badEmail7.getStatusCode());
        }

    @Test
    void negativePasswordRegisterUserAPI() {
        //Password empty --> passes as not a BAD_REQUEST (returns 201 CREATED)
        ResponseEntity badEmail1 = authController.register(new User(personnummerOK, emailOK, "", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badEmail1.getStatusCode());
        //Password too short / < 5 --> passes as not a BAD_REQUEST (returns 201 CREATED)
        ResponseEntity badEmail2 = authController.register(new User(personnummerOK, emailOK, "test", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badEmail2.getStatusCode());
        //Password too long / > 100 --> passes as not a BAD_REQUEST (returns 201 CREATED)
        ResponseEntity badEmail3 = authController.register(new User(personnummerOK, emailOK, "negativePasswordRegisterUserAPInegativePasswordRegisterUserAPInegativePasswordRegisterUserAPInegative", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.BAD_REQUEST, badEmail3.getStatusCode());

        /*
        //Nice-to-haves
        //Password no Uppercase
        ResponseEntity badEmail4 = authController.register(new User(personnummerOK, emailOK, "thisislowsecurity", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badEmail4.getStatusCode());
        //Password no number
        ResponseEntity badEmail5 = authController.register(new User(personnummerOK, emailOK, "thisislowsecurity", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badEmail5.getStatusCode());
        //Password equals name
        ResponseEntity badEmail6 = authController.register(new User(personnummerOK, emailOK, "Myname Isok", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badEmail6.getStatusCode());
        //Password equals birth date / 8 first numbers in personnummer
        ResponseEntity badEmail7 = authController.register(new User(personnummerOK, emailOK, "19901024", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badEmail7.getStatusCode());
        //Password all numbers
        ResponseEntity badEmail8 = authController.register(new User(personnummerOK, emailOK, "1234567890", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badEmail8.getStatusCode());
        //Password with a space
        ResponseEntity badEmail9 = authController.register(new User(personnummerOK, emailOK, "this password should fail", nameOK, addressOK, phoneNumberOK));
        assertEquals(HttpStatus.OK, badEmail9.getStatusCode());
         */
    }
}