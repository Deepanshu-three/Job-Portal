import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["html", "css", "javascript", "reactjs"]

const Profile = () => {

  const isResume = true

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl bg-white border border-gray-200 rounded-2xl mx-auto p-8 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>

            <div>
              <h1>Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, in?{" "}
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-3 my-4">
            <Mail />
            <span>patel@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-4">
            <Contact />
            <span>213452367132</span>
          </div>
        </div>
        <div className="my-10">
            <h1 className="font-bold">Skills: </h1>
            <div className="flex items-center gap-1">
            {
                skills.length === 0 ? <span>NA</span> :
                skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            }
            </div>
        </div>

        <div className="grid w-full max-w-small items-center gap-1 5">
          <Label className='text-md font-bold'>Resume </Label>
          {
            isResume ? <a target="blank" href="https://www.google.com" className="text-blue-600 hover:underline">Click to see the Resume</a> : <span>NA</span>
          }
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-10">Applied Jobs</h1>
          {/* Application Table */}
          <AppliedJobTable/>

        </div>
    </div>
  );
};

export default Profile;
