import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {

  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })

  const nevigate = useNavigate()

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const changeFileHandler = (e) => {
    setInput({...input, file: e.target.files?.[0]})
  }

  const submitHandler = async(e) => {
    e.preventDefault();

    const formData = new formData();
    formData.append("fullName", input.fullName)
    formData.append("email", input.email)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)
    if(input.file){
      formData.append("file", input.file)
    }    

    try {
      
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type":"multipart/form-data"
        },
        withCredentials: true
      })
      if(res.data.success){
        toast.success(res.data.message)
        nevigate("/login")
      }

    } catch (error) {
      console.log(error)
      toast.error(error.res.data.message)
    }
  }

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
         onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 ">Sign up</h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="patel" value={input.fullName} name="fullName" onChange={changeEventHandler} />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="patel@gmail.com" value={input.email} name="email" onChange={changeEventHandler}/>
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="number" placeholder="9112345678" value={input.phoneNumber} name="phoneNumber" onChange={changeEventHandler} />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="patel" value={input.password} name="password" onChange={changeEventHandler}/>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="student" className="cursor-pointer" checked={input.role === 'student'} onChange={changeEventHandler}/>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="recruiter" className="cursor-pointer" checked={input.role === 'recruiter'} onChange={changeEventHandler}/>
              <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" onChange={changeFileHandler} />
            </div>
          </div>

          <Button type="submit" className="w-full my-4">SignUp</Button>
          <span>Already have an account? <Link to="/login" className="text-blue-500 text-lg">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
