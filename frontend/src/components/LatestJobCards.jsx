import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-200 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div> 
            <h1 className='font-bold text-lg my-2'>Job Title: </h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, impedit.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge variant="ghost" className="text-blue-700 font-bold">12 Positions</Badge>
            <Badge variant="ghost" className="text-[#F83082] font-bold">Part Time</Badge>
            <Badge variant="ghost" className="text-[#7209B7] font-bold">20 LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards