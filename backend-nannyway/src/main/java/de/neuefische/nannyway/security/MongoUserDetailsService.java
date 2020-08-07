package de.neuefische.nannyway.security;

import de.neuefische.nannyway.database.UserDb;
import de.neuefische.nannyway.model.NannywayUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class MongoUserDetailsService implements UserDetailsService {
    private final UserDb userDb;

    @Autowired
    public MongoUserDetailsService(UserDb userDb) {
        this.userDb = userDb;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<NannywayUser> optionalUser = userDb.findById(username);
        if (optionalUser.isEmpty()) {
            throw new UsernameNotFoundException("user with username: \"" + username + "\" not found");
        }

        NannywayUser nannywayUser = optionalUser.get();
        return new User(nannywayUser.getUsername(), nannywayUser.getPassword(),
                List.of(new SimpleGrantedAuthority("admin")));
    }
}
