import React,{ useState } from 'react'

const login = ({handleLogin}) => {


const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const submitHandler = (e)=>{
     e.preventDefault()
     handleLogin(email,password)

     setEmail("");
     setPassword("");
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-red-600 p-20'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input value={email}
                 onChange ={(e)=>{
                  setEmail(e.target.value)  
                }}
                required 
                 className='border-2 border-emerald-600 text-xl text-white placeholder:text-grey-100 outline-none bg-transparent rounded-full px-4 py-5' type="email" placeholder='enter your email' />
                <input value={password}
                onChange ={(e)=>{
                  setPassword(e.target.value);  
                }}
                 required 
                 className='border-2 border-emerald-600 text-xl text-white placeholder:text-grey-100 outline-none bg-transparent rounded-full px-4 py-5 mt-4' type="password" placeholder='enter your password' />
                <button className='border-none mt-5 bg-emerald-600 text-xl text-white placeholder:text-white outline-none rounded-full px-4 py-5' >Log in</button>
                
            </form>
        </div>
    </div>
  )
}

export default login