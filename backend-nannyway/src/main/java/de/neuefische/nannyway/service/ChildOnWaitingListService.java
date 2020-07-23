package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.ChildOnWaitingListMongoDb;
import de.neuefische.nannyway.model.ChildOnWaitingList;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.springframework.stereotype.Service;

@Service
public class ChildOnWaitingListService {
    private final ChildOnWaitingListMongoDb waitingListDb;
    private final RandomIdUtils randomIdUtils;

    public ChildOnWaitingListService(ChildOnWaitingListMongoDb waitingListDb, RandomIdUtils randomIdUtils) {
        this.waitingListDb = waitingListDb;
        this.randomIdUtils = randomIdUtils;
    }

    public Iterable<ChildOnWaitingList> getAllOnWaitingList() {
        return waitingListDb.findAll();
    }
}
