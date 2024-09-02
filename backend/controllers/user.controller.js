import { User } from "../models/ user.model"
import bcrypt from 'bcryptjs'
import  jwt from "jsonwebtoken"

export const register = async(req, res) => {
    try {
        
        const {fullName, email, phoneNo, password, role} = req.body

        if(!fullName || !email || !phoneNo || !password || !role){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({
                message: "User already exist with this email",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            fullName,
            email,
            phoneNo,
            password : hashedPassword,
            role,
        })

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}
export const login = async(req, res) => {

    try {

        const {email, password, roll} = req.body;
        if( !email ||  !password || !role){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }

        const idPasswordMatch = await bcrypt.compare(password, user.password)

        if(!idPasswordMatch){
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }

        if(role !== user.role){
            return res.status(400).json({
                message: "Account does not exist with current role",
                success: false
            })
        }

        const tokenData = {
            userId : user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: '1d'})

        return res.status(200).cookie("token", token, {maxAge : 1 + 24 + 60 + 60 + 1000, httpOnly : true, sameSite: 'strict'}).json({
            message: `Welcome back ${user.fullName}`
        })

    } catch (error) {
        console.log(error)
    }

}

export const logout = async(req, res) => {
    try {
        return res.status(200).cookie("token", {maxAge: 0}).json({
            message: "Logout successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, bio, skills} = req.body;
        const file = req.file;
        //cloudinary fucntion

        const userId = req.id; // middleware authentication

        let user = await User.findById(userId)

        if(!user){
            return res.status(400).json({
                message: "User not found",
                success: false
            })
        }

        if(fullName)  user.fullName = fullName
        if(email) user.email = email
        if(phoneNumber) user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) {    
            let skillsArray = skills.split(',')
            user.profile.skills = skillsArray   
        }

        //have to add for resume update

        await user.save();

        user = {
            _id : user._id,
            fullName : user.fullName,
            email : user.email,
            phoneNumber : user.phoneNumber,
            role : user.role,
            profile : user.profile
        }

        return res.status(200).json({
            message: "Profile created successfully",
            user,
            success: true
        })

    } catch (error) {
        console.log(erroe);
    }
}