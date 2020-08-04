package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.model.AddChildInCareDto;
import de.neuefische.nannyway.model.ChildInCare;
import de.neuefische.nannyway.model.EditChildInCareDto;
import de.neuefische.nannyway.service.ChildInCareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;


@RestController
@RequestMapping("/api/kids")
public class ChildInCareController {

    private final ChildInCareService childInCareService;

    @Autowired
    public ChildInCareController(ChildInCareService childInCareService) {
        this.childInCareService = childInCareService;
    }

    @PostMapping
    public ChildInCare addChildInCare(@Valid @RequestBody AddChildInCareDto data, Principal principal) {
        return childInCareService.addChildInCare(data.getFirstName(), data.getLastName(), data.getBirthDate(),
                data.getInfoText(), data.getPickUpPerson(), data.getHoursInCarePerWeek(), data.getContractTerm(),
                data.getPhoneNumber(), data.getNameParents(), data.getEmail(), principal.getName());
    }

    @DeleteMapping("{id}")
    public void deleteKid(@PathVariable String id) {
        childInCareService.deleteKidById(id);
    }

    @GetMapping
    public List<ChildInCare> getMyKidsInCare(Principal principal) {
        return childInCareService.getChildByNanny(principal.getName());
    }

    @PostMapping("{id}/{key}")
    public ChildInCare editKid(@PathVariable String id, @PathVariable String key, @RequestBody EditChildInCareDto editChildInCareDto) {
        return childInCareService.updateKid(id, key, editChildInCareDto);
    }
}
