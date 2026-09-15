import React from 'react'
import Header from '../other/header'
import AllTask from '../other/allTask'
import CreateTask from '../other/createTask'
const adminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser = {props.changeUser} />
        <CreateTask/>
        <AllTask/>
     
    </div>
  )
}

export default adminDashboard