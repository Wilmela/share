import { connectDb } from "@/libs/db";
import User from "@/model/User";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        await connectDb();

        const user = await User.findOne({ email });
        if (!user) throw Error("User not found");

        const isMatch = await user.comparePassword(password);
        if (!isMatch) throw Error("Wrong credentials");

        return {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.id = params.user.id;
        params.token.role = params.user.role;
      }
      return params.token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
      }

      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
