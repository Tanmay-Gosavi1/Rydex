import { auth } from "@/auth";
import connectDB from "@/libs/db";
import User from "@/models/user.model";
import { NextRequest , NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    try {
        await connectDB();
        const session = await auth();

        if (!session) {
            return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
        }

        const user = await User.findOne({ email: session?.user?.email });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user , message: "User fetched successfully"}, { status: 200 });
    
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error while fetching user" + error }, { status: 500 });
    }
}