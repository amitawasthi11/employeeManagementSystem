import React, { useContext } from 'react'
import { AuthContext } from '../../context/authProvider'

const allTask = () => {
  const authData =  useContext(AuthContext);
console.log(authData.employees  );


  return (
   
     <div className='bg-[#1c1c1c] p-5 mt-5 rounded  '>
       <div className='mb-2  bg-red-400 py-2 px-4 flex justify-between rounded'>
        <h2 className=' w-1/5' >Employee Name</h2>
        <h3 className=' w-1/5'>New Task</h3>
        <h3 className='w-1/5'>Active Task</h3>
        <h3 className=' w-1/5'>Completed</h3>
        <h5 className=' w-1/5'>Failed</h5>
     </div>
     <div className='h-[80%] overflow-auto'>
      {authData.employees.map(function(elem,idx){
      return <div key={idx} className='mb-2  py-2 px-4 flex justify-between rounded'>
        <h2 className=' w-1/5' >{elem.firstName}</h2>
        <h3 className='text-lg font-medium text-blue-600 w-1/5'>{elem.taskCounts.newTask}</h3>
        <h5 className='text-lg font-medium text-yellow-400 w-1/5'>{elem.taskCounts.active}</h5>
        <h5 className='text-lg font-medium text-white-600 w-1/5'>{elem.taskCounts.completed}</h5>
        <h3 className='text-lg font-medium text-red-600 w-1/5'>{elem.taskCounts.failed}</h3>
     </div>
     })}
     </div>
     {/* <div className='mb-2  bg-red-400 py-2 px-4 flex justify-between rounded'>
        <h2>amit</h2>
        <h3>make a ui design</h3>
        <h5>status</h5>
     </div> */}
    </div>
  )
}

export default allTask