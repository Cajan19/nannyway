package de.neuefische.nannyway.service;

import de.neuefische.nannyway.database.ChildOnWaitingListMongoDb;
import de.neuefische.nannyway.model.ChildOnWaitingList;
import de.neuefische.nannyway.utils.RandomIdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ChildOnWaitingListService {
    private final ChildOnWaitingListMongoDb waitingListDb;
    private final RandomIdUtils randomIdUtils;

    @Autowired
    public ChildOnWaitingListService(ChildOnWaitingListMongoDb waitingListDb, RandomIdUtils randomIdUtils) {
        this.waitingListDb = waitingListDb;
        this.randomIdUtils = randomIdUtils;
    }

    public Iterable<ChildOnWaitingList> getAllOnWaitingList() {
        return waitingListDb.findAll();
    }

    public ChildOnWaitingList addChildOnWaitingList(String familyName, String firstName, LocalDate birthDate, String phoneNumber,
                                                    String email, LocalDate getToKnowDate, LocalDate startDateOfCare,
                                                    String hoursInCarePerWeek, String prediction, Boolean approval, String infoText) {
        ChildOnWaitingList waitingKid = new ChildOnWaitingList();
        waitingKid.setId(randomIdUtils.generateRandomID());
        waitingKid.setFamilyName(familyName);
        waitingKid.setFirstName(firstName);
        waitingKid.setBirthDate(birthDate);
        waitingKid.setPhoneNumber(phoneNumber);
        waitingKid.setEmail(email);
        waitingKid.setGetToKnowDate(getToKnowDate);
        waitingKid.setStartDateOfCare(startDateOfCare);
        waitingKid.setHoursInCarePerWeek(hoursInCarePerWeek);
        waitingKid.setPrediction(prediction);
        waitingKid.setApproval(approval);
        waitingKid.setInfoText(infoText);
        return waitingListDb.save(waitingKid);
    }

    public void deleteWaitingKidById(String id) {
        waitingListDb.deleteById(id);
    }
}


