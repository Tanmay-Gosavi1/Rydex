import mongoose , { Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password?: string;
    role : "user" | "rider" | "admin";
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["user", "rider", "admin"], default: "user" }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);//Imp in nextjs to avoid model overwrite error in development mode

export default User;