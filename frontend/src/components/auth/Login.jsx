import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  })

  const nevigate = useNavigate()

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type":"application/json"
        },
        withCredentials: true
      })
      if(res.data.success){
        toast.success(res.data.message)
        nevigate("/")
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
          <h1 className="font-bold text-xl mb-5 ">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="patel@gmail.com" value={input.email} name="email" onChange={changeEventHandler}/>
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
          </div>

          <Button type="submit" className="w-full my-4">Login</Button>
          <span>Don't have an account? <Link to="/singup" className="text-blue-500 text-lg">Sign Up</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
