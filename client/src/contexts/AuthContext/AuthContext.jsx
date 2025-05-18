import { createContext } from "react";

export const AuthContext = createContext({
    loginDetails: null,
    setLoginDetails: () => { },
    token: null,
    setToken: () => { },
});