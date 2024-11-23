import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      profilePic?: string;
      email: string;
      address?: string;
      lga?: string;
      state?: string;
      phone?: string;
      role: string;
      emailVerified: boolean;
      accessToken: string;
      accountNo?: string;
      accountName?: string;
      bankName?: string;
    };
  }
}
