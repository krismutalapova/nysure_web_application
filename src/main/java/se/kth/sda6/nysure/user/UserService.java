package se.kth.sda6.nysure.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service()
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void register(User user) {
        String encryptedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        userRepository.save(user);
    }

    public Optional<User> getById(String id) {
        return userRepository.findById(id);
    }

    public User update(User updatedUser) {
        User oldUser = getById ( updatedUser.getId () )
                .orElseThrow(() -> new ResponseStatusException ( HttpStatus.NOT_FOUND));
        if (! oldUser.getPassword ().equals (  updatedUser.getPassword ())) {
            String encryptedPass = passwordEncoder.encode ( updatedUser.getPassword () );
            updatedUser.setPassword ( encryptedPass );
        }
        return userRepository.save(updatedUser);
    }
}
