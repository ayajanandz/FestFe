import React,{ useContext, useState, useEffect} from "react";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props){
    const[authUser, setAuthUser] = useState(null)
    const[admin, setAdmin] = useState(false);
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const[OTP, setOTP] = useState(null)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        admin,
        setAdmin,
        OTP,
        setOTP
    }

    return(
        <AuthContext.Provider value = {value}>{props.children}</AuthContext.Provider>
    )
}