import React,{useState,useContext,createContext} from "react";
const UserContext=createContext();
export const UserProvider=({children})=>{
    const[user,setUser]=useState("sagar");
    const changeUser=()=>{
        setUser((prevUser)=>(prevUser==="sagar"?"shraddha":"sagar"))
    };
    return(
        <UserContext.Provider value={{user,changeUser}}>
            {children}
        </UserContext.Provider>
    )
};
export const useUser=()=> useContext(UserContext);
export default UserContext;