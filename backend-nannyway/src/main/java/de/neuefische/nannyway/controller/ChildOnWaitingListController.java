package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.model.ChildOnWaitingList;
import de.neuefische.nannyway.service.ChildOnWaitingListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/waitinglist")
public class ChildOnWaitingListController {

    private final ChildOnWaitingListService childOnWaitingListService;

    @Autowired
    public ChildOnWaitingListController(ChildOnWaitingListService childOnWaitingListService) {
        this.childOnWaitingListService = childOnWaitingListService;
    }

    @GetMapping
    public Iterable<ChildOnWaitingList> getKidsOnWaitingList() {
        return childOnWaitingListService.getAllOnWaitingList();
    }
}
