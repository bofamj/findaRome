import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
//const Client-ID="12037179051-856tb6rn0umc3o2quq5bgp193l6pbcg3.apps.googleusercontent.com"
//const Client-secret='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'
