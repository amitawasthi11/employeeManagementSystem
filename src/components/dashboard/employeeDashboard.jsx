import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/taskListNumber'
import TaskList from '../taskList/taskList'
const employeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskListNumber />
        <TaskList/>

    </div>
  )
}

export default employeeDashboard