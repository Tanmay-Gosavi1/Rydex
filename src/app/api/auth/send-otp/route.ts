import connectDB from "@/libs/db";
import User from "@/models/user.model";
import OTP from "@/models/otp.model";
import { sendMail } from "@/libs/sendMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    await connectDB();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });
    if (user) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 },
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await OTP.create({ email: normalizedEmail, otp , expiresAt: new Date(Date.now() + 10 * 60 * 1000)});

    await sendMail(
      normalizedEmail,
      "OTP for Rydex Registration",
      `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Rydex OTP Verification</title>
        </head>
        <body style="margin:0; padding:0; background-color:#ffffff; font-family:Arial, sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px;">
            <tr>
                <td align="center">

                <table width="400" cellpadding="0" cellspacing="0" style="border:1px solid #000000; border-radius:8px; padding:30px;">

                    <tr>
                    <td align="center" style="padding-bottom:20px;">
                        <h1 style="color:#000000; margin:0; font-size:24px; letter-spacing:1px;">
                        RYDEX
                        </h1>
                    </td>
                    </tr>

                    <tr>
                    <td align="center" style="padding-bottom:10px;">
                        <h2 style="color:#000000; margin:0; font-size:18px;">
                        Verify Your Account
                        </h2>
                    </td>
                    </tr>

                    <tr>
                    <td align="center" style="padding:10px 0 20px 0;">
                        <p style="color:#333333; font-size:14px; margin:0;">
                        Use the OTP below to complete your registration.
                        </p>
                    </td>
                    </tr>

                    <tr>
                    <td align="center" style="padding:20px 0;">
                        <div style="display:inline-block; padding:12px 25px; border:2px solid #000000; font-size:22px; letter-spacing:4px; font-weight:bold; color:#000000;">
                        ${otp}
                        </div>
                    </td>
                    </tr>

                    <tr>
                    <td align="center" style="padding-top:10px;">
                        <p style="color:#666666; font-size:12px; margin:0;">
                        This OTP is valid for 10 minutes.
                        </p>
                    </td>
                    </tr>

                    <tr>
                    <td align="center" style="padding-top:25px;">
                        <p style="color:#999999; font-size:11px; margin:0;">
                        If you didn’t request this, you can ignore this email.
                        </p>
                    </td>
                    </tr>

                </table>

                </td>
            </tr>
            </table>

        </body>
        </html>
        `,
    );

    return NextResponse.json(
      {
        success: true,
        message: "OTP Sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to send OTP : ${error}` },
      { status: 500 },
    );
  }
}
