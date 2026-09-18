import React, { createContext ,useEffect,useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const AuthContext = createContext()


const authProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    // const data = getLocalStorage();
    // console.log(data);
    
    useEffect(()=>{
      setLocalStorage()
       const data = getLocalStorage()
       setUserData(data ) 
    },[]);
    
     
  return (
    <div>
        <AuthContext.Provider value= {[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default authProvider