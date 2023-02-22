import type { NextApiRequest, NextApiResponse } from "next";

import { specializationCourse } from "@/components/coursesList";
import type { Sp } from "@/types/ds";
// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse<Sp>) {
  res.status(200).json(specializationCourse);
}
