import {getJWTToken} from "./jwt-utils";

export async function fetchAllKids() {
    const token = getJWTToken();

    const response = await fetch("api/kids", {
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

export function postKid(firstName, lastName, birthDate, infoText, pickUpPerson, hoursInCarePerWeek,
                        contractTerm, phoneNumber, nameParents, email) {
    const token = getJWTToken();
    const childInCareData = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        infoText: infoText,
        pickUpPerson: pickUpPerson,
        hoursInCarePerWeek: hoursInCarePerWeek,
        contractTerm: contractTerm,
        phoneNumber: phoneNumber,
        nameParents: nameParents,
        email: email,
    }
    return fetch("api/kids", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(childInCareData),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}

export function removeKid(id) {
    const token = getJWTToken();

    return fetch(`/api/kids/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}