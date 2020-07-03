package de.neuefische.nannyway.database;

import de.neuefische.nannyway.model.NannyWayUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<NannyWayUser, String>{
}
