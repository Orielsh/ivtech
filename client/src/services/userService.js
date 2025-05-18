import { baseURL } from "../config/common";

export async function getUserById(token, userId) {
    try {
        const response = await fetch(`${baseURL}users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data);
        const userDetails = data;
        return userDetails;
    } catch (error) {
        throw error;
    }
}