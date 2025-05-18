export function storeTokenLS(token) {
    localStorage.setItem("token", token);
}

//return null if token not presence
export function getTokenFromLS() {
    const token = localStorage.getItem("token");
    if (token)
        return token;
    return null;
}

export function removeTokenFromLS() {
    localStorage.removeItem("token");
}