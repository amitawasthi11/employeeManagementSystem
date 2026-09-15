import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/taskListNumber'
import TaskList from '../taskList/taskList'
import login from '../auth/login'
const employeeDashboard = (props) => {
  // console.log(props);
  
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
       
        <Header changeUser = {props.changeUser} data = {props.data}/>
        <TaskListNumber data = {props.data}/>
        <TaskList data = {props.data}  />

    </div>
  )
}

export default employeeDashboard