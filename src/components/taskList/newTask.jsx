import React from 'react'

const newTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='px-3 py-1 rounded bg-red-600'>{data.category}</h3>
            <h4 className='text-sm'>{data.Date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription} </p>
      </div>
  )
}

export default newTask