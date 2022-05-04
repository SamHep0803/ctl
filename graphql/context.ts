import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { Session } from "next-auth";
import { prisma } from "../lib/prisma";
import { createSessionCtx } from "../lib/session";

export type Context = {
  prisma: PrismaClient;
  session: Session | null;
};

export const createContext = async (req: MicroRequest): Promise<Context> => {
  return {
    prisma,
    session: await createSessionCtx(req),
  };
};
