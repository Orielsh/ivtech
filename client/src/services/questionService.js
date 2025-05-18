import { baseURL } from "../config/common";

export async function getAllQuestions() {
    try {
        const response = await fetch(`${baseURL}question/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        const questionsList = data;
        return questionsList;
    } catch (error) {
        throw error;
    }
}

export async function createQuestion(question, token) {
    try {
        const response = await fetch(`${baseURL}question/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
            body: JSON.stringify(question),
        });
        const responseJSON = await response.json();
        if (!response.ok){
            throw new Error(responseJSON.message);
        }
        const data = responseJSON;
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function getQuestionById(id) {
    try {
        const response = await fetch(`${baseURL}question/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data);
        const question = data;
        return question;
    } catch (error) {
        throw error;
    }
}

export async function createAnswer(token, id, answer) {
    try {
        const response = await fetch(`${baseURL}question/${id}/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
            body: JSON.stringify(answer),
        });
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        return data
    } catch (error) {
        throw error;
    }
}