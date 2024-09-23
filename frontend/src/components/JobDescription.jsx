import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  
    const isApplied = false;

    return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
        <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="ghost" className="text-blue-700 font-bold">
              12 Positions
            </Badge>
            <Badge variant="ghost" className="text-[#F83082] font-bold">
              Part Time
            </Badge>
            <Badge variant="ghost" className="text-[#7209B7] font-bold">
              20 LPA
            </Badge>
          </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-600'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4 my-4">Job Description</h1>
      <div>
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Hydrabas</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias aut voluptatum cupiditate sint hic aliquid possimus, recusandae ut adipisci maxime pariatur minus quisquam ratione vel dolorum nihil consequuntur voluptate similique iste suscipit! Saepe dolores temporibus, architecto omnis animi iusto veniam aut in voluptas nesciunt illo, maiores quidem ipsum? Ducimus.</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 years</span></h1>
        <h1 className="font-bold my-1">Total Applications: <span className="pl-4 font-normal text-gray-800">1200</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">12-12-2312</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
