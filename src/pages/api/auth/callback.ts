import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "@/lib/auth";

const authenticate = (method: any, req: NextApiRequest, res: NextApiResponse) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        console.log(token);
        resolve(token);
      }
    })(req, res);
  });

export default nextConnect().get(
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    try {
      const token = await authenticate("oauth2", req, res);
      res.writeHead(301, { Location: "/" });
      res.end();
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
);
