import React, {useState} from 'react';
import UserContext from "./UserContext1";

const UserProvider = ({children}) =>{

    const [user, setUser] = useState({email: "", fullName:"", auth: false});

    const login = (email, fullName) =>{
        setUser((user)=>({
            email: email,
            fullName: fullName,
            auth: true
        }));
    }

    const logout = () =>{
        setUser((user)=>({
            email: "",
            fullName: "",
            auth: false
        }));
    }

    return (
        <UserContext.Provider value = {{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );

}

export default UserProvider;