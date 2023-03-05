import { Ds } from "@/types/ds";
import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  container,
  item,
  navVariants,
  paraVariant,
  slideIn,
} from "@/utils/motion";
import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import Line from "../../../public/line.jpg";
import Qfooter from "../../../components/qfooter";
import {
  FaCheckCircle,
  FaJs,
  FaGithub,
  FaReact,
  FaReadme,
  FaFigma,
  FaUikit,
  FaDatabase,
  FaAmazon,
  FaAws,
} from "react-icons/fa";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

function quater2() {
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
    <div className="left-0 top-0 m-0">
      <motion.div
        className=" h-2 fixed top-0 left-0 right-0 bg-red-200 rounded-full dark:bg-red-300"
        initial={{ scaleX: "50%" }}
        style={{ scaleX: scrollYProgress }}
      />
      {data.map((ele) => (
        <motion.div key={ele.quater2.id} className="w-[100vw] ">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView={"show"}
            className="text-center py-[40px] bg-red-100 m-8 border-spacing-4 border-b-2 shadow-lg sm:text-4xl md:text-2xl lg:text-6xl font-extrabold text-red-500"
          >
            {ele.des}
          </motion.nav>
          <motion.div className="text-center font-bold text-4xl ">
            {ele.title}{" "}
            <span className="text-red-500 font-logo underline-offset-8 underline">
              Quater {ele.quater2.id}
            </span>
          </motion.div>
          <motion.div className="px-6  py-8 gap-6">
            <div className="px-6 py-2 text-gray-400  text-center">
              {ele.quater2.name}
            </div>

            <Heading>
              Duration :{" "}
              <span className="text-red-500">{ele.quater2.duration}</span>
            </Heading>
          </motion.div>
          <div className="max-w-full py-10 pl-4  items-center rounded overflow-hidden shadow-lg">
            <motion.div className="lg:flex grid text-center items-center lg:grid-cols-2 md:grid-cols-1">
              <div className="m-6 ">
                <div className="font-bold sm:text-2xl md:text-xl lg:text-3xl mb-2">
                  Description
                </div>
                <motion.p
                  variants={paraVariant(1.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  className=" px-2 w-full text-gray-400 py-4 text-base"
                >
                  {ele.quater2.des}
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={container}
              transition={{ duration: 3 }}
              viewport={{ once: false, amount: 0.45 }}
              initial="hidden"
              whileInView="show"
              className="font-bold text-2xl relative flex gap-4 "
            >
              <motion.div variants={item}>
                <FaJs className="w-[50px] h-[50px] pb-2 " />
              </motion.div>
              <div className="pt-2 gap-4 flex ">
                <motion.h1
                  variants={item}
                  className="text-white  h-fit pl-2 bg-sky-400 w-fit"
                >
                  TS
                </motion.h1>
                <motion.h1 variants={item} className="text-teal-500">
                  Web 3.0
                </motion.h1>
                <motion.h1 variants={item} className="text-red-500">
                  Mataverse
                </motion.h1>
              </div>
            </motion.div>
          </div>
          <div className="relative  z-[-1]">
            <div className=" top-0 left-0 w-full h-[300px] mt-[-200px] ">
              <Image src={Line} alt="" fill />
            </div>
          </div>
          <div className="mt-[-220px] px-6">
            <div className=" bg-red-200 h-5 w-[50%] rounded-sm flex  mt-[-90px]" />
          </div>
          <motion.div className="py-6 pt-[200px] ">
            <motion.h1 className="lg:text-4xl  sm:text-2xl md:text-xl font-bold text-center">
              Course Outline
            </motion.h1>
            <div className="grid px-4 lg:grid-cols-3  sm:grid-cols-2 md:grid-cols-1 py-6 gap-4">
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-sky-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    A
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-20 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt1.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaCheckCircle className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt1.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt1.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt1.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaReact className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt1.t2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt1.l2}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt1.l2}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 pb-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaGithub className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt1.t3}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt1.l3}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt1.l3}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-teal-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    B
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-20 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt2.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaCheckCircle className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt2.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt2.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt2.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaReadme className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt2.t2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt2.l2}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt2.l2}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-red-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    C
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-32 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt3.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaFigma className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt3.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt3.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt3.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaFigma className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt3.t2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt3.l2}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt3.l2}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 pb-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaUikit className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt3.t3}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt3.l3}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt3.l3}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1  bg-gradient-to-r from-sky-400 to-teal-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    D
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-32 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt4.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaFigma className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt4.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt4.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt4.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-gradient-to-r from-teal-400 to-red-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    E
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-32 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt5.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaFigma className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt5.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt5.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt5.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaFigma className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt5.t2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt5.l2}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt5.l2}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-gradient-to-r from-red-400 to-sky-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    F
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-20 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt6.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaDatabase className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt6.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt6.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt6.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaYoutube className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt6.t2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt6.l2}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt6.l2}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 pb-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaReadme className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt6.t3}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt6.l3}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt6.l3}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-gradient-to-tr from-sky-400 to-teal-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    G
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-32 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt7.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaFigma className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt7.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt7.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt7.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg "
              >
                <div className="grid grid-col-1 bg-gradient-to-tr from-teal-400 to-red-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    H
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-20 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt8.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaAws className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt8.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt8.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt8.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaYoutube className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt8.t2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt8.l2}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt8.l2}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 pb-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaAmazon className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt8.t3}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt8.l3}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt8.l3}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-gradient-to-tr from-red-400 to-sky-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    Previous
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-32 text-center pt-6 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    ----------------
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt8.awsTitle}
                      </h1>
                      <div className="text-sm text-center m-2">
                        {ele.quater2.Course_Outline.pt8.awsDetail}
                      </div>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              variants={slideIn("down", "spring", 0.7, 0.3)}
              whileInView={"show"}
              whileHover={{ scale: 0.99 }}
              viewport={{ once: false }}
              className="grid px-10  grid-col-1   py-6 "
            >
              <div className="shadow-lg drop-shadow-xl">
                <div className="grid grid-col-1 bg-gradient-to-bl from-sky-400 to-red-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    I
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] h-20 text-center mt-[-60px] pt-4 rounded-md z-10 shadow-xl  bg-white lg:text-xl sm:text-sm md:text-base font-bold">
                    {ele.quater2.Course_Outline.pt9.name}
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaAws className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.pt9.t1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={`${ele.quater2.Course_Outline.pt9.l1}`}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.pt9.l1}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="py-4 pt-[20px] px-4 ">
            <motion.h1 className="lg:text-4xl sm:text-3xl md:text-2xl text-center font-extrabold text-red-500 ">
              {ele.quater2.Course_Outline.projects.title}
            </motion.h1>
            <motion.div>
              <motion.div
                initial="hidden"
                whileInView={"show"}
                whileHover={{ scale: 0.94 }}
                viewport={{ once: false }}
                className=" m-2  rounded-sm shadow-lg"
              >
                <div className="grid grid-col-1 bg-red-400 h-28 w-full  text-end  z-0">
                  <div className="m-6 lg:text-3xl md:text-2xl font-bold text-white">
                    C
                  </div>
                </div>
                <motion.ul
                  variants={container}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.45 }}
                  initial="hidden"
                  whileInView="show"
                  className="text-center m-4"
                >
                  <motion.h1 className="m-4 w-[90%] gap-2 h-32 text-center pt-8 mt-[-58px] rounded-md z-10 shadow-xl  bg-white lg:text-4xl sm:text-3xl md:text-2xl font-bold">
                    Final projects of{" "}
                    <span className="text-red-500">Quater 2nd</span>
                  </motion.h1>
                  <motion.li className="relative flex gap-6 pt-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaGithub className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.projects.p1}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={ele.quater2.Course_Outline.projects.pl1}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.projects.pl1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaGithub className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.projects.p2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={ele.quater2.Course_Outline.projects.pl2}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.projects.pl1}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 pb-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaGithub className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.projects.p3}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={ele.quater2.Course_Outline.projects.pl3}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.projects.pl3}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <motion.li className="relative flex gap-6 pb-8 items-baseline ">
                    <div className=" text-red-400 before:absolute z-10 before:top-[2px] before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaYoutube className="  z-0" />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="text-sm font-semibold text-left">
                        {ele.quater2.Course_Outline.projects.p4}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={ele.quater2.Course_Outline.projects.pl4}
                      >
                        {" "}
                        {ele.quater2.Course_Outline.projects.pl4}
                      </Link>
                    </motion.div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
      <Qfooter />
    </div>
  );
}

export default quater2;
