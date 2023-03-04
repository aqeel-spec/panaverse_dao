import type { NextApiRequest, NextApiResponse } from "next";

import { specializationCourse } from "@/components/coursesList";
import type { Sp } from "@/types/ds";
// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse<Sp>) {
  {
    if (req.method === "GET") {
      const courseCode = req.query.code as string;
      // const commentId : any = req.query.id;
      // const comment = todos.find(
      //   (comment) => comment.id === parseInt(commentId)
      // )
      //const index = specializationCourse.findIndex((data) => data.quarter4 === courseCode)
      res.status(200).json(specializationCourse);
    }
    res.status(200).json(specializationCourse);
  }
}
