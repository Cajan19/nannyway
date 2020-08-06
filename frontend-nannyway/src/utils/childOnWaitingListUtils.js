import {getJWTToken} from "./jwt-utils";

export async function fetchAllWaitingKids() {
    const token = getJWTToken();

    const response = await fetch("api/waitinglist", {
        method: `GET`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export function postWaitingKid(familyName, firstName, birthDate, phoneNumber, email, getToKnowDate,
                               startDateOfCare, hoursInCarePerWeek, prediction, approval, infoText) {
    const token = getJWTToken();
    const childOnWaitingListData = {
        familyName: familyName,
        firstName: firstName,
        birthDate: birthDate,
        phoneNumber: phoneNumber,
        email: email,
        getToKnowDate: getToKnowDate,
        startDateOfCare: startDateOfCare,
        hoursInCarePerWeek: hoursInCarePerWeek,
        prediction: prediction,
        approval: approval,
        infoText: infoText,
    }
    return fetch("api/waitinglist", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(childOnWaitingListData),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}

export function removeWaitingKid(id) {
    const token = getJWTToken();

    return fetch(`/api/waitinglist/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function updateWaitingKid(id, key, value) {
    const token = getJWTToken();

    return fetch(`/api/waitinglist/${id}/${key}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({[key]:value}),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}

