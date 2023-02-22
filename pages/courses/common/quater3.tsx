import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Ds } from "@/types/ds";
import { navVariants, paraVariant } from "../../../utils/motion";
import Qfooter from "../../../components/qfooter";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";

function quater3() {
  const { scrollYProgress } = useScroll();
  const [data, setData] = useState<Ds>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/ds/asd");
      const res = await result.json();
      setData(res);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="w-[100vw]">
        <motion.div
          className=" h-2 fixed top-0 left-0 right-0 bg-red-200 rounded-full dark:bg-red-300"
          initial={{ scaleX: "50%" }}
          style={{ scaleX: scrollYProgress }}
        />
        <Link
          href="/courses"
          className="inline-flex py-4 px-4 pt-6 items-center text-center no-underline text-blue-500"
        >
          <FaBackward className="relative mr-2" />
          <span>Back</span>
        </Link>
        <motion.div>
          {data.map((ele) => (
            <div key={ele.quater3.id} className="">
              <motion.h1
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className="text-center py-[40px] m-8 rounded-sm drop-shadow-lg font-extrabold lg:text-4xl sm:text-3xl md:text-2xl  text-red-500  bg-red-200"
              >
                {ele.quater3.heading}
              </motion.h1>
              <motion.div className="text-center pt-[40px]">
                <motion.text
                  variants={paraVariant(1.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  className="text-gray-400"
                >
                  {ele.quater3.name}
                </motion.text>
                <motion.h1
                  animate={{ x: 0 }}
                  initial="hidden"
                  whileInView="show"
                  transition={{ from: 100, bounce: 0.25, type: "spring" }}
                  viewport={{ once: false, amount: 0.25 }}
                  className="lg:text-3xl sm:text-2xl md:text-xl"
                >
                  Duration :{" "}
                  <span className="text-red-400 font-extrabold">
                    {ele.quater3.duration}
                  </span>
                </motion.h1>
                <motion.div
                  initial="hidden"
                  whileInView={"show"}
                  whileHover={{ scale: 0.94 }}
                  viewport={{ once: false }}
                  className="py-32 bg-gray-100"
                >
                  <motion.h1
                    animate={{ x: 0 }}
                    initial="hidden"
                    whileInView="show"
                    transition={{ from: 100, bounce: 0.25, type: "spring" }}
                    className="text-2xl font-bold "
                  >
                    {ele.quater3.a.name}
                  </motion.h1>
                  <motion.p
                    variants={paraVariant(1.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="m-4 py-4 "
                  >
                    {ele.quater3.a.des}
                  </motion.p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView={"show"}
                  whileHover={{ scale: 0.94 }}
                  viewport={{ once: false }}
                  className="py-32 border-t-4 border-red-200 bg-sky-100  hover:bg-teal-100"
                >
                  <motion.h1
                    animate={{ x: 0 }}
                    initial="hidden"
                    whileInView="show"
                    transition={{ from: 100, bounce: 0.25, type: "spring" }}
                    viewport={{ once: false }}
                    className="text-2xl font-bold "
                  >
                    {ele.quater3.b.name}
                  </motion.h1>
                  <motion.p
                    variants={paraVariant(0.9)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="m-4 py-4 "
                  >
                    {ele.quater3.b.des}
                  </motion.p>
                </motion.div>
                <Qfooter />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default quater3;
