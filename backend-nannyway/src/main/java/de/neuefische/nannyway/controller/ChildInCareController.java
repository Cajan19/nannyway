package de.neuefische.nannyway.controller;

import de.neuefische.nannyway.model.AddChildInCareDto;
import de.neuefische.nannyway.model.ChildInCare;
import de.neuefische.nannyway.service.ChildInCareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/kids")
public class ChildInCareController {

    private final ChildInCareService childInCareService;

    @Autowired
    public ChildInCareController(ChildInCareService childInCareService) {
        this.childInCareService = childInCareService;
    }

    @GetMapping
    public Iterable<ChildInCare> getChildrenInCare() {
        return childInCareService.getAllKids();
    }

    @PutMapping
    public ChildInCare addChildInCare(@Valid @RequestBody AddChildInCareDto data){
        return childInCareService.addChildInCare(data.getFirstName(), data.getLastName(), data.getBirthDate());
    }
}
