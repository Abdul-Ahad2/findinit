// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare, hash } from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("Starting database connection...");
          await connectDB();

          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const user = await User.findOne({
            email: credentials.email.toLowerCase(),
          });
          console.log("User found:", user); // Log the entire user object
          console.log("User password field:", user?.password);

          if (!user || !user.password) {
            console.log("User not found or no password set");
            return null;
          }

          console.log("Login attempt - Plain password:", credentials.password);
          console.log("Login attempt - Stored hash:", user.password);

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          console.log("Password valid:", isPasswordValid);

          if (!isPasswordValid) {
            console.log("Invalid password");
            return null;
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    error: "/auth",
    newUser: "/dashboard",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();

        if (account?.provider === "google") {
          let dbUser = await User.findOne({ email: user.email });

          if (!dbUser) {
            dbUser = await User.create({
              email: user.email,
              name: user.name,
              password: null, // OAuth users don't have passwords
              provider: "google",
            });
          } else if (!dbUser.provider) {
            await User.updateOne({ _id: dbUser._id }, { provider: "google" });
          }

          user.id = dbUser._id.toString();
        }

        return true;
      } catch (error) {
        console.error("SignIn callback error:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;
