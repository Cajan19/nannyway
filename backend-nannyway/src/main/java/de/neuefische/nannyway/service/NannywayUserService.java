package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.NannywayUser;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class NannywayUserService {

    private final UserDb userDb;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public NannywayUserService(UserDb userDb, RandomIdUtils randomIdUtils) {
        this.userDb = userDb;
    }

    public void registerNewUser(NannywayUser user) {
        Optional<NannywayUser> userCheck = userDb.findByUsername(user.getUsername());
        if (userCheck.isPresent()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Nutzername bereits vergeben");
        } else {
            String secretPassword = encoder.encode(user.getPassword());
            user.setPassword(secretPassword);
            user.setUsername(user.getUsername());
            user.setEmail(user.getEmail());
            user.setFirstName(user.getFirstName());
            user.setLastName(user.getLastName());
            userDb.save(user);
        }
    }
}
