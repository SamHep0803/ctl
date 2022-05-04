import { MicroRequest } from "apollo-server-micro/dist/types";
import { getSession } from "next-auth/react";

export const createSessionCtx = async (req: MicroRequest) => {
  const session = await getSession({ req });
  return session;
};
