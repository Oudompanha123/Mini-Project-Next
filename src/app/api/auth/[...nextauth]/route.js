
import { loginService } from "@/service/register,service";
import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    providers : [
        CredentialsProvider({
            async authorize(userInfo) {
                const newUserInfo = {
                    email : userInfo?.email,
                    password : userInfo?.password,
                }
                const register = await loginService(newUserInfo)
                console.log('register', register)
                return register;
            }
        }),
    ],
    callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  // tell protected to used this segment for login
  pages: {
    signIn: "/login",
  },
}
const handler = nextAuth(authOption);
export {handler as GET, handler as POST}
