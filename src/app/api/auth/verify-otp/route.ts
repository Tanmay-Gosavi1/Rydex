import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/libs/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";  
import OTP from "@/models/otp.model";

export async function POST(req : NextRequest , res : NextResponse){

    try {
        const {username , email , password , otp} = await req.json() ;
        await connectDB() ;
        if(!username || !email || !password || !otp){
            return NextResponse.json({ error : "Username, email, password and OTP are required" }, { status : 400 }) ;
        }
        const normalizedEmail= email.toLowerCase() ;
        if(password.length < 6){
            return NextResponse.json({ error : "Password must be at least 6 characters long" }, { status : 400 }) ;
        }

        const storedOtp = await OTP.findOne({ email : normalizedEmail }).sort({ createdAt : -1 }) ;
        if(!storedOtp){
            return NextResponse.json({ error : "OTP not found for this email" }, { status : 400 }) ;
        }

        if(storedOtp.otp !== otp){
            return NextResponse.json({ error : "Invalid OTP" }, { status : 400 }) ;
        }

        if(storedOtp.expiresAt < new Date()){
            return NextResponse.json({ error : "OTP has expired" }, { status : 400 }) ;
        }

        await OTP.deleteOne({ email : normalizedEmail }) ;

        const hashedPassword = await bcrypt.hash(password, 10) ;
        
        const newUser = await User.create({ username, email : normalizedEmail, password: hashedPassword }) ;

        return NextResponse.json({ success: true, message: "User registered successfully", user: {id: newUser._id, name: newUser.username, email: newUser.email } }, { status: 201 }) ;

    } catch (error) {
        console.error("Error verifying OTP : ", error) ;
        return NextResponse.json({ error : `Failed to verify OTP : ${error}` }, { status : 500 }) ;
    }
}