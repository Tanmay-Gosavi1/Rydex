import mongoose, { Document } from "mongoose";

interface IOTP extends Document {
    otp: string;
    email : string;
    createdAt: Date;    
    updatedAt: Date;
    expiresAt: Date;
}

const otpSchema = new mongoose.Schema<IOTP>({
    otp: { type: String, required: true },
    email: { type: String, required: true },
    expiresAt: { type: Date, index: { expires: 0 } ,required: true },
}, { timestamps: true });

const OTP = mongoose.models.OTP || mongoose.model<IOTP>('OTP', otpSchema);

export default OTP;