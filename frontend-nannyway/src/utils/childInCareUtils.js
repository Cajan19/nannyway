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

export function putKid(firstName, lastName, birthDate) {
    const token = getJWTToken();
    const ChildInCareData = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
    }
    return fetch('/api/kids', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ChildInCareData}),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }
        return response.json();
    });
}