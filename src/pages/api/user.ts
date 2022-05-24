import { NextApiRequest, NextApiResponse } from "next";
import { getUserSession } from "@/lib/session";
import { getUser } from "@/lib/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getUserSession(req);
    const user = (session && (await getUser(session.token))) ?? null;
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default handler;
