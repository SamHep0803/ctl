import Iron from "@hapi/iron";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getTokenCookie, MAX_AGE, setTokenCookie } from "./cookie";

export type UserSession = {
  token: string;
  createdAt: number;
  maxAge: number;
};

export const setUserSession = async (res: NextApiResponse, token: string) => {
  const createdAt = Date.now();
  const session: UserSession = {
    token,
    createdAt,
    maxAge: MAX_AGE,
  };
  const secureSession = await Iron.seal(
    session,
    process.env.SESSION_SECRET,
    Iron.defaults
  );
  setTokenCookie(res, secureSession);
};

export const getUserSession = async (
  req: NextApiRequest
): Promise<UserSession | null> => {
  const secureSession = getTokenCookie(req);
  if (!secureSession) {
    return null;
  }
  const session: UserSession = await Iron.unseal(
    secureSession,
    process.env.SESSION_SECRET,
    Iron.defaults
  );
  const expiresAt = session.createdAt + session.maxAge;
  if (Date.now() > expiresAt) {
    throw new Error("Session expired");
  }
  return session as UserSession;
};

export const createSessionCtx = async (req: MicroRequest) => {
  const session = await getSession({ req });
  return session;
};
