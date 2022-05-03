import NextAuth from "next-auth";
import { VatsimUser } from "../interfaces/VatsimUser";
import { DefaultJWT, JWT } from "next-auth/jwt";
import {
  VatsimUserDetails,
  VatsimUserPersonal,
} from "./src/interfaces/VatsimUser";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      cid: string;
      full_name: string;
      rating: number;
      region: string;
      email: string;
    };
  }
  export interface User {
    id: string;
    cid: string;
    full_name: string;
    rating: number;
    region: string;
    email: string;
  }
  // export interface Profile {
  //   id: string;
  //   cid: string;
  //   personal: VatsimUser["personal"];
  //   vatsim: VatsimUser["vatsim"];
  // }
  // type User = Omit<VatsimUser, User>;
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    cid: string;
    full_name: string;
    rating: number;
    region: string;
    email: string;
  }
}
