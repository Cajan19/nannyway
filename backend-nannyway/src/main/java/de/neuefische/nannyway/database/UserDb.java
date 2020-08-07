package de.neuefische.nannyway.database;

import de.neuefische.nannyway.model.NannywayUser;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UserDb extends PagingAndSortingRepository<NannywayUser, String> {
    Optional<NannywayUser> findByUsername(String username);
}
