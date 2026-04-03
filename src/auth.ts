import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import User from "./models/userModel"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"
 
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
            async authorize(credentials , req) {
                const email = credentials?.email
                const password = credentials?.password as string

                if(!email || !password) {
                    throw new Error("Missing credentials");
                }
                
                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error("User not found");
                }

                const isMatch = await bcrypt.compare(password ,  user.password)
                if (!isMatch) {
                    throw new Error("Invalid password");
                }

                return {
                    id: user._id ,
                    name: user.name,
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