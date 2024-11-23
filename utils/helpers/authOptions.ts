import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { closeDB, connectDB } from "@/utils/db";
import User from "@/utils/models/Users";
import { compare } from "bcrypt";
import { UserType } from "../types/types";
import { NextResponse } from "next/server";
import { sendMail } from "../sendMail";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
import sendEmail from "../resend";
import { activateAccnt } from "@/emails/mails";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // try {
        await connectDB().catch((err) => {
          throw new Error(err);
        });

        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid email or password");
        }
        user.password = undefined;

        console.log(user);

        if (!user.emailVerified) {
          const activationLink = generateToken(user._id);
          const baseUrl = process.env.BASE_URL;

          await sendEmail(
            user.email,
            "Activate Account",
            ActivateAccount({
              customerName: user.firstName,
              activationLink: `${baseUrl}/verifyMail/${activationLink}`,
            })
          );
          throw new Error("please check your mail for a verification link");
        }

        await closeDB();
        return user;
        // } catch (err) {
        //   // console.log(err);
        //   return NextResponse.json(err);
        // } finally {

        // }
      },
    }),
  ],
  pages: {
    signIn: "/account/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      user && (token.user = user);

      if (trigger === "update" && session) {
        session && (token.user = session.user);
      }

      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      const user: UserType = token.user as UserType;

      session.user = user;

      return session;
    },
  },
};
