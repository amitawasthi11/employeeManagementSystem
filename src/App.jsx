import React,{useContext, useEffect, useState}  from 'react'
import Login from './components/auth/login'
import AdminDashboard from './components/dashboard/adminDashboard'
import EmployeeDashboard from './components/dashboard/employeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/authProvider'



setLocalStorage()
const App = () => {
    const [user, setUser] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    
    const authData = useContext(AuthContext)
   
    useEffect(()=>{
      if(authData){
        const loggedInUser = localStorage.getItem("loggedInUser")
        //  console.log(loggedInUser);
         if(loggedInUser){
            const userData = JSON.parse(loggedInUser);
            setUser(userData.role)
            setLoggedInUserData(userData.data)     
         }
      } 
    },[authData])
    
 
    const handleLogin = (email,password) =>{
       const admin = authData?.admin?.find(
        (a) => email === a.email && password === a.password
    )

    if (admin) {
        setUser('admin')
        setLoggedInUserData(admin)

        localStorage.setItem(
            'loggedInUser',
            JSON.stringify({
                role: 'admin',
                data: admin
            })
        )

        return
    }
    //   if (email === 'admin@gmail.com' && password === '123') {
    //         setUser('admin')
           
    //         localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    //         return
    //     } 
        const employee = authData?.employees?.find(
            (e) => email === e.email && e.password === password
        )
 

        if (employee) {
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        } else {  
            alert('invalid credentials')
        }
    }
    // handleLogin('admin@me.com',"123");
   
// const data = useContext(AuthContext)
// console.log(data);


  return (
    <>
    {/* {! user ? <Login handleLogin = {handleLogin} />:''}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>} */}
                {!user && <Login handleLogin={handleLogin} />}

          {user == 'admin'?<AdminDashboard changeUser={setUser} data = {loggedInUserData}/> : (user == 'employee'?<EmployeeDashboard  changeUser={setUser} data = {loggedInUserData}/>:null)}

    </>
  )
}

export default App