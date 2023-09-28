import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
export default async function addQuestion(
  req: NextApiRequest,
  res: NextApiResponse
){
    const gmail = req.body

    res.status(200).json({
        message: "gmail submitted successfully to the APi!",
        data: req.body,
      });
}