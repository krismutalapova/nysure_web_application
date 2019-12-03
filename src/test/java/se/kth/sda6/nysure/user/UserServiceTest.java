package se.kth.sda6.nysure.user;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserServiceTest {
    @Autowired
    UserService userService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private static String personnummerOK ="19901024-1111";
    private static String emailOK = "myemail@is.ok";
    private static String passwordOK = "mypasswordisok007";
    private static String nameOK = "Myname Isok";
    private static String addressOK = "Mystreetisok 87";
    private static String phoneNumberOK = "1234567890";

    User testUserOk = new User(personnummerOK, emailOK, passwordOK, nameOK, addressOK, phoneNumberOK);

    @Test
    void register() {
        //assertEquals(passwordOK, testUserOk.getPassword());
        userService.register(testUserOk);
        User foundUser = userService.findUserByEmail(emailOK);
        assertEquals(testUserOk.getId(), foundUser.getId());
        assertEquals(personnummerOK, foundUser.getId());
        assertEquals(emailOK, foundUser.getEmail());
        String encryptedPass = passwordEncoder.encode(passwordOK.toString());
        String encryptedPass2 = passwordEncoder.encode(passwordOK.toString());
        assertEquals(encryptedPass, encryptedPass2);
        //assertEquals(encryptedPass, foundUser.getPassword());
        assertEquals(nameOK, foundUser.getName());
        assertEquals(addressOK, foundUser.getAddress());
        assertEquals(phoneNumberOK, foundUser.getPhone());
        // + Verify if a user will be able to login with a valid username and valid password

        // - Verify if a user cannot login with a valid username and an invalid password

        // - Verify the login page for both, when the field is blank and Submit button is clicked

        // + Verify the ‘Forgot Password’ functionality

        // + Verify the messages for invalid login

        // + Verify the ‘Remember Me’ functionality

        // + Verify if the data in password field is either visible as bullet signs

        // + Verify if a user is able to login with a new password only after he/she has changed the password

        // + Verify if the ‘Enter’ key of the keyboard is working correctly on the login page

        // - Verify the login page by pressing ‘Back button’ of the browser. It should not allow you to enter into the system once you log out
        // -> works manually
    }
}