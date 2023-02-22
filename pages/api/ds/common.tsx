import type { NextApiRequest, NextApiResponse } from "next";
import { common } from "@/components/coursesList";
import { commonCourses } from "@/types/type";

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<commonCourses>
) {
  res.status(200).json(common);
}
