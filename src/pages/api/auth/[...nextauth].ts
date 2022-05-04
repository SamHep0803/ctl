import NextAuth, { Awaitable, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { VatsimUser } from "../../../interfaces/VatsimUser";

export default NextAuth({
  providers: [
    {
      id: "vatsim",
      name: "VATSIM Connect",
      type: "oauth",
      version: "2.0",
      token: {
        url: `${process.env.VATSIM_URL}/oauth/token`,
        params: {
          grant_type: "authorization_code",
        },
      },
      authorization: {
        url: `${process.env.VATSIM_URL}/oauth/authorize?response_type=code`,
        params: {
          scope: process.env.VATSIM_SCOPES,
        },
      },
      clientId: process.env.VATSIM_CLIENT_ID,
      clientSecret: process.env.VATSIM_CLIENT_SECRET,
      userinfo: `${process.env.VATSIM_URL}/api/user`,
      profile({ data }: { data: VatsimUser }): Awaitable<User> {
        return {
          id: data.cid,
          cid: data.cid,
          full_name: data.personal.name_full,
          ratingId: data.vatsim.rating.id,
          rating: data.vatsim.rating.short,
          region: data.vatsim.region.name,
          email: data.personal.email,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, profile, account }) {
      if (user) {
        token.cid = user.cid;
        token.full_name = user.full_name;
        token.ratingId = user.ratingId;
        token.rating = user.rating;
        token.region = user.region;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.cid = token.cid;
      session.user.full_name = token.full_name;
      session.user.ratingId = token.ratingId;
      session.user.rating = token.rating;
      session.user.region = token.region;
      session.user.email = token.email;
      return session;
    },
  },
});
