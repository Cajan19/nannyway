package de.neuefische.nannyway.database;

import de.neuefische.nannyway.model.ChildInCare;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ChildInCareMongoDb extends PagingAndSortingRepository<ChildInCare, String> {
}
