package de.neuefische.nannyway.database;

import de.neuefische.nannyway.model.ChildInCare;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ChildInCareMongoDb extends PagingAndSortingRepository<ChildInCare, String> {
    List<ChildInCare> findByNanny(String nanny);
}
