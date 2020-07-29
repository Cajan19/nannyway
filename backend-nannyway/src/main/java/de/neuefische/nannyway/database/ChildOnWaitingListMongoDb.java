package de.neuefische.nannyway.database;

import de.neuefische.nannyway.model.ChildOnWaitingList;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ChildOnWaitingListMongoDb extends PagingAndSortingRepository<ChildOnWaitingList, String> {
    List<ChildOnWaitingList> findByNanny(String nanny);
}
