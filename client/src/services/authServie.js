import { baseURL } from "../config/common";

export async function login(credentials) {
    try {
        const response = await fetch(`${baseURL}auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok)
            throw new Error(await response.text());
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}