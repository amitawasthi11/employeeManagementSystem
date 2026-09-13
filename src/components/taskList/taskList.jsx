import React from 'react'

const taskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full flex-nowrap  mt-10'>
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='px-3 py-1 rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>make a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, temporibus! Inventore totam quod, voluptas laborum minima aliquid eius officiis tenetur cum sed, corporis aperiam consequatur aspernatur modi. Nobis, cum facilis. </p>
      </div>
        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='px-3 py-1 rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>make a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, temporibus! Inventore totam quod, voluptas laborum minima aliquid eius officiis tenetur cum sed, corporis aperiam consequatur aspernatur modi. Nobis, cum facilis. </p>
      </div>
        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='px-3 py-1 rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>make a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, temporibus! Inventore totam quod, voluptas laborum minima aliquid eius officiis tenetur cum sed, corporis aperiam consequatur aspernatur modi. Nobis, cum facilis. </p>
      </div>
        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='px-3 py-1 rounded bg-red-600'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>make a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, temporibus! Inventore totam quod, voluptas laborum minima aliquid eius officiis tenetur cum sed, corporis aperiam consequatur aspernatur modi. Nobis, cum facilis. </p>
      </div>
    </div>
  )
}

export default taskList