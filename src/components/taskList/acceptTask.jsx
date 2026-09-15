import React from 'react'

const acceptTask = ({data}) => {
    console.log(data.taskTitle);
    
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='px-3 py-1 rounded bg-red-600'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription} </p>
       <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>mark as failed</button>
       </div>   
       <div>Accept Task</div>
      </div>
  )
}

export default acceptTask