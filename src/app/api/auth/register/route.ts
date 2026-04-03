import connectDB from "@/libs/db";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    try {
        const { username, email, password } = await req.json() ;
        await connectDB() ;

        if(!username || !email || !password){
            return NextResponse.json({ error : "Username, email and password are required" }, { status : 400 }) ;
        }

        if(password.length < 6){
            return NextResponse.json({ error : "Password must be at least 6 characters long" }, { status : 400 }) ;
        }

        const normalizedEmail = email.toLowerCase();

        const user = await User.findOne({ email : normalizedEmail }) ;
        if(user){
            return NextResponse.json({ error : "User already exists with this email" }, { status : 400 }) ;
        }

        const hashedPassword = await bcrypt.hash(password, 10) ;

        const newUser = await User.create({ username, email : normalizedEmail, password: hashedPassword }) ;

        return NextResponse.json({success : true , message : "User registered successfully", user : { id : newUser._id, username : newUser.username, email : newUser.email } }, { status : 201 }) ;
    } catch (error) {
        return NextResponse.json({ error : `Failed to register user : ${error}` }, { status : 500 }) ;
    }
}