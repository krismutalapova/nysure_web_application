package se.kth.sda6.nysure.auth;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.kth.sda6.nysure.user.User;
import se.kth.sda6.nysure.user.UserRepository;
import se.kth.sda6.nysure.user.UserService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AuthenticationAPITest {

    @Autowired
    AuthController authController;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

        private String emailOK = "myemail@is.ok";

    @BeforeEach
    void setUp() {
        String personnummerOK = "19901024-1111";
        String passwordOK = "mypasswordisok007";
        String nameOK = null;
        String addressOK = null;
        String phoneNumberOK = null;

        User u = new User();
        u.setId(personnummerOK);
        u.setEmail(emailOK);
        u.setPassword(passwordOK);
        u.setName(nameOK);
        u.setAddress(addressOK);
        u.setPhone(phoneNumberOK);

        authController.register(u);

    }

    @AfterEach
    void tearDown() {
        User foundUser = userService.findUserByEmail(emailOK);
        userRepository.delete(foundUser);
    }

    @Test
    void authenticate() {
    }
}