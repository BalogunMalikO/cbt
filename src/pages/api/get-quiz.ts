import { NextApiRequest, NextApiResponse } from "next";

export default async function getFormSubmissions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the form submissions from the database
  //   const submissions: FormValues[] = await getFormSubmissionsFromDatabase();
  // Respond with the form submissions
  const quiz = [
    {
      category: "History",
      type: "boolean",
      question: "The Cold War ended with Joseph Stalin&#039;s death.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Geography",
      type: "boolean",
      question: "A group of islands is called an &#039;archipelago&#039;.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      question: "Ada Lovelace is often considered the first computer programmer.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      question: "Gordon Freeman, the protagonist of &quot;Half-Life&quot;, is said to have once had a ponytail.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "boolean",
      question: "No Game No Life first aired in 2014.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    
  ];
  res.status(200).json({
    results: quiz,
  });
}
