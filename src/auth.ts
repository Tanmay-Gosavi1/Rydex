import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import User from "./models/user.model"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"
import connectDB from "./libs/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    // Configure one or more authentication providers...
    providers: [
        Credentials({
            credentials: {
                email: {
                    type: "email",
                    label: "Email",
                    placeholder: "johndoe@gmail.com",
                },
                password: {
                    type: "password",
                    label: "Password",
                    placeholder: "*****",
                },
            },
            async authorize(credentials) {
                await connectDB(); 
                const email = credentials?.email
                const password = credentials?.password as string

                if(!email || !password) {
                    return null;
                }
                
                const user = await User.findOne({ email })
                if (!user) {
                    return null;
                }

                const isMatch = await bcrypt.compare(password ,  user.password)
                if (!isMatch) {
                    return null;
                }

                return {
                    id: user._id ,
                    name: user.username,
                    email: user.email,
                    role : user.role
                };
            }
        }),
        Google({
            clientId:process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET
        })
    ],
    // callbacks: after or before sign in, sign out, etc.
    callbacks: {
        // This callback is called whenever a user tries to sign in, regardless of the provider used.
        async signIn({ user, account }) {
            try {
                if (account?.provider === "google") {
                    await connectDB();

                    if (!user.email) return false;

                    let dbUser = await User.findOne({ email: user.email });

                    if (!dbUser) {
                        dbUser = await User.create({
                            username: user.name,
                            email: user.email,
                            role: "user",
                            provider: "google"
                        });
                    }

                    user.id = dbUser._id.toString();
                    user.role = dbUser.role;
                }

                return true;

            } catch (error) {
                console.error("SIGNIN ERROR:", error);
                return false; // 🔥 causes access denied
            }
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.role = token.role as string;
            }
            return session;
        },

    },
    pages : {
        signIn : "/signin",
        error : "/signin"
    },
    session : {
        strategy : "jwt",
        maxAge : 10*24*60*60
    },
    secret : process.env.AUTH_SECRET,
})