package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.model.AddChildOnWaitingListDto;
import de.neuefische.nannyway.model.ChildOnWaitingList;
import de.neuefische.nannyway.service.ChildOnWaitingListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    @PostMapping
    public ChildOnWaitingList addChildOnWaitingList(@Valid @RequestBody AddChildOnWaitingListDto data) {
        return childOnWaitingListService.addChildOnWaitingList(data.getFamilyName(), data.getFirstName(), data.getBirthDate(), data.getPhoneNumber(),
                data.getEmail(), data.getGetToKnowDate(), data.getStartDateOfCare(), data.getHoursInCarePerWeek(), data.getPrediction(),
                data.isApproval(), data.getInfoText());
    }

    @DeleteMapping("{id}")
    public void deleteWaitingKid(@PathVariable String id) {
        childOnWaitingListService.deleteWaitingKidById(id);
    }
}
