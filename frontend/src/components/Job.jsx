import React from "react";
import { Button } from "./ui/button";
import {  Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const nevigate = useNavigate()
  const jobId = "abcd"
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-200 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button className="rounded-full" size="icon" variant="outline">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="data:image/png;base64,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" />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-bold text-lg">Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>

        <div>
            <h1 className="font-bold text-lg my-2">Title</h1>
            <p className="text-sm text-gray-600 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sit provident pariatur ut, culpa officiis suscipit. Ipsa suscipit sunt dolore!</p>
        </div>

        
        <div className='flex items-center gap-2 mt-4'>
            <Badge variant="ghost" className="text-blue-700 font-bold">12 Positions</Badge>
            <Badge variant="ghost" className="text-[#F83082] font-bold">Part Time</Badge>
            <Badge variant="ghost" className="text-[#7209B7] font-bold">20 LPA</Badge>
        </div>

        <div className="flex items-center gap-4 mt-4">
            <Button variant="ouline" onClick={() => nevigate(`/description/${jobId}`)}>Detais</Button>
            <Button className="bg-blue-400">Save for later</Button>
        </div>
    </div>
  );
};  

export default Job;
