import NextAuth from "next-auth";
import { VatsimUser } from "../../../Interfaces/VatsimUser";

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
      profile({ data }: { data: VatsimUser }) {
        return {
          id: data.cid,
          name: data.personal.name_full,
          email: data.personal.email,
          rating: data.vatsim.rating.short,
        };
      },
    },
  ],
});
