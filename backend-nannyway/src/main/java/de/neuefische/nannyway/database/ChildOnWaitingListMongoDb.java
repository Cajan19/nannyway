package de.neuefische.nannyway.database;

import de.neuefische.nannyway.model.ChildOnWaitingList;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ChildOnWaitingListMongoDb extends PagingAndSortingRepository<ChildOnWaitingList, String> {
}
