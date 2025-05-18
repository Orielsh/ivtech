import {  useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import decode, { isTokenExpired } from "../../utils/JWT";
import { getTokenFromLS } from "../../services/LSService";

export default function AuthProvider({ children }) {

    const [loginDetails, setLoginDetails] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(getTokenFromLS());
    }, []);

    useEffect(() => {
        if (token && !isTokenExpired(token)) 
            setLoginDetails(decode(token));
        else{
            setLoginDetails(null);
            if(token && isTokenExpired(token))
                setToken(null);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, loginDetails, setLoginDetails, }}>
            {children}
        </AuthContext.Provider>
    )
};