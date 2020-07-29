package de.neuefische.nannyway.utils;

import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.NannywayUser;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserUtils {
    private final UserDb userDb;

    public UserUtils(UserDb userDb) {
        this.userDb = userDb;
    }

    public HashMap<String, Object> getUserTokenData(String username) {
        Optional<NannywayUser> userOptional = userDb.findById(username);
        NannywayUser nannywayUser = userOptional.get();

        return new HashMap<>(Map.of("username", nannywayUser.getUsername(), "firstName", nannywayUser.getFirstName(), "lastName", nannywayUser.getLastName(), "email", nannywayUser.getEmail()));
    }
}
