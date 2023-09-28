import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
export default async function submitForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Save the form data to the database or send it to an email address

  const { name, score } = req.body;

  if (!name) {
    res.status(400).json({error:"Name is required"});
    return;
 } 

 if (!score) {
    res.status(400).json({error:"Score is required"});
    return;
 } 
 


  const filePath = "../scores.json";
  const data = { name, score };
  const json = JSON.stringify(data);

  fs.writeFile(filePath, json, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("The file has been written successfully.");
  });

//   fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
  // Respond with a success message
  res.status(200).json({
    message: "Form submitted successfully to the APi!",
    data: req.body,
  });
}
