import React from 'react';

const UserContext = React.createContext({
    email: "beka@gmail.com",
    fullName:"BeKZat",
    auth: false,
    jwtToken: ""
});

export default UserContext;