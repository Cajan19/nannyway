package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.NannywayUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class NannywayUserService {

    private final UserDb userDb;
    private final PasswordEncoder encoder;

    @Autowired
    public NannywayUserService(UserDb userDb, PasswordEncoder encoder) {
        this.userDb = userDb;
        this.encoder = encoder;
    }

    public void registerNewUser(NannywayUser user) {
        Optional<NannywayUser> userCheck = userDb.findByUsername(user.getUsername());
        if (userCheck.isPresent()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Nutzername bereits vergeben");
        }
        user.setPassword(encoder.encode(user.getPassword()));
        user.setUsername(user.getUsername());
        user.setEmail(user.getEmail());
        user.setFirstName(user.getFirstName());
        user.setLastName(user.getLastName());
        userDb.save(user);
    }
}
