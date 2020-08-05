package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.model.AddChildOnWaitingListDto;
import de.neuefische.nannyway.model.ChildOnWaitingList;
import de.neuefische.nannyway.model.EditChildOnWaitingListDto;
import de.neuefische.nannyway.service.ChildOnWaitingListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/waitinglist")
public class ChildOnWaitingListController {

    private final ChildOnWaitingListService childOnWaitingListService;

    @Autowired
    public ChildOnWaitingListController(ChildOnWaitingListService childOnWaitingListService) {
        this.childOnWaitingListService = childOnWaitingListService;
    }

    @PostMapping
    public ChildOnWaitingList addChildOnWaitingList(@Valid @RequestBody AddChildOnWaitingListDto data, Principal principal) {
        return childOnWaitingListService.addChildOnWaitingList(data.getFamilyName(), data.getFirstName(), data.getBirthDate(), data.getPhoneNumber(),
                data.getEmail(), data.getGetToKnowDate(), data.getStartDateOfCare(), data.getHoursInCarePerWeek(), data.getPrediction(),
                data.isApproval(), data.getInfoText(), principal.getName());
    }

    @DeleteMapping("{id}")
    public void deleteWaitingKid(@PathVariable String id) {
        childOnWaitingListService.deleteWaitingKidById(id);
    }

    @GetMapping
    public List<ChildOnWaitingList> getMyKidsOnWaitinglist(Principal principal) {
        return childOnWaitingListService.getWaitingChildByNanny(principal.getName());
    }

    @PostMapping("{id}/{key}")
    public ChildOnWaitingList editWaitingKid(@PathVariable String id, @PathVariable String key, @RequestBody EditChildOnWaitingListDto editChildOnWaitingListDto) {
        return childOnWaitingListService.updateWaitingKid(id, key, editChildOnWaitingListDto);
    }
}
