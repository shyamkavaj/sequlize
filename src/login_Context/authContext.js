// authContext.js
import React, { useState, createContext } from "react";
import { useContext } from 'react';

const AuthContext = createContext(null);

const initialState = {
    isLoggedIn: false,
    isLoginPending: 'shyam',
    loginError: null,

};


const ContextProvider = ({children}) => {
    const [status, setStatus] = useState(initialState);

    const setLoginPending = (isLoggedIn) => { setStatus({isLoggedIn}) };
    const setLoginSuccess = (isLoginPending) => { setStatus({isLoginPending});};
    const setLoginError = (loginErrorl) => { setStatus({loginErrorl});};

    const login = (email, password) => {
        setLoginPending(true);
        setLoginSuccess(false);
        setLoginError(null);
        
        checkLogin(email, password, (error) => {
            setLoginError(false);
            
            if (!error) {
                setLoginSuccess(true);
            } else {
                setLoginError(error);
            }
        });
        console.log("asdl;kjfdsljkf;")
    };

    const logout = () => {
        setLoginPending(false);
        setLoginSuccess(false);
        setLoginError(null);
    };


    return (

        <AuthContext.Provider value={{ status, login, logout }}>
            {children}
        </AuthContext.Provider>

    );
};

const checkLogin = (email, password, callback) =>
    setTimeout(() => {
        if (email === "admin" && password === "admin") {
            console.log("in chekcLogin")
            return callback(null);
        } else {
            return callback(new Error("Invalid email and password"));
        }
    }, 1000);

export const useAuth = () => useContext(AuthContext)

export default ContextProvider;
// export { AuthContext };
