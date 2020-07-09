package de.neuefische.nannyway.database;

import de.neuefische.nannyway.model.NannywayUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<NannywayUser, String>{
}
