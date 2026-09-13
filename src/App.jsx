import React,{useContext, useState}  from 'react'
import Login from './components/auth/login'
import AdminDashboard from './components/dashboard/adminDashboard'
import EmployeeDashboard from './components/dashboard/employeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/authProvider'



setLocalStorage()
const App = () => {
    const [user, setUser] = useState(null)
    
    const authData = useContext(AuthContext)
    // console.log(authData.employees);
    

    const handleLogin = (email,password) =>{
      if (email === 'admin@gmail.com' && password === '123') {
            setUser('admin')
            return
        }
        const employee = authData?.employees?.find(
            (e) => email === e.email && e.password === password
        )

        if (employee) {
            setUser('employee')
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

            {user === 'admin' && <AdminDashboard />}

            {user === 'employee' && <EmployeeDashboard />}

    </>
  )
}

export default App