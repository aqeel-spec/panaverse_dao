"use client";

import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { commonCourses } from "@/types/type";
import {
  FaChevronCircleRight,
  FaCircle,
  FaCloud,
  FaHandPointLeft,
  FaHandPointRight,
} from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import Link from "next/link";
import { Data } from "@/types/type";
import { paraVariant, container, item, navVariants } from "../../utils/motion";
import QFooter from "../../components/qfooter";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function Courses() {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 200], [1, 0]);

  const [data, setData] = useState<commonCourses>([]);
  const [sp, setSp] = useState<Data>([]);
  //     drawer imported here
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/ds/common");
      const res = await result.json();
      setData(res);
    };
    const specializedData = async () => {
      const result2 = await fetch("/api/hello");
      const res2 = await result2.json();
      setSp(res2);
    };
    fetchData();
    specializedData();
  }, []);
  console.log(data);

  return (
    <>
      <NavBar />
      <div className="group relative text-2xl px-4 py-2">
        {" "}
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          className="shadow-xl  text-gray-700 py-4 px-6 rounded inline-flex items-center group"
        >
          {" "}
          <span className="mr-1">Select quarter</span>{" "}
          <span>
            {" "}
            <FaHandPointLeft />{" "}
          </span>
        </Button>{" "}
        {/* menu list */}{" "}
        <Drawer
          size={"md"}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Detail syllabus here</DrawerHeader>

            <DrawerBody>
              <h1 className="font-bold">Common in all programs</h1>
              <motion.ul className="absolute  divide-y    text-gray-700 pt-1 group-hover:block w-auto">
                <li className="hover:rounded-l-xl drop-shadow-xl shadow-sm border-teal-400 hover:bg-red-100  border-l-2 px-4 m-2 text-center">
                  <Link
                    href={"/courses/common/quater1"}
                    className="gap-4 underline-offset-2 underline items-center decoration-blue-500 inline-flex hover:underline  hover:underline-offset-4 "
                  >
                    <span className="text-red-300">
                      <FaHandPointRight className="relative" />
                    </span>{" "}
                    Quarter 1
                  </Link>
                </li>
                <li className="hover:rounded-l-xl underline-offset-2 underline shadow-sm border-teal-400 hover:bg-red-100  border-l-2 px-4 m-2 text-center">
                  <Link
                    href={"/courses/common/quater2"}
                    className="gap-4 items-center decoration-sky-500 inline-flex hover:underline  hover:underline-offset-4 "
                  >
                    <span className="text-red-300">
                      <FaHandPointRight className="relative" />
                    </span>{" "}
                    Quarter 2
                  </Link>
                </li>
                <li className="hover:rounded-l-xl underline-offset-2 underline shadow-sm border-teal-400 hover:bg-red-100  border-l-2 px-4 m-2 text-center">
                  <Link
                    href={"/courses/common/quater3"}
                    className="gap-4 items-center decoration-sky-500 inline-flex hover:underline  hover:underline-offset-4 "
                  >
                    <span className="text-red-300">
                      <FaHandPointRight className="relative" />
                    </span>{" "}
                    Quarter 3
                  </Link>
                </li>
              </motion.ul>
              <div className="pt-[150px]">
                <h1 className=" text-xl font-extrabold">
                  <span className="text-red-500 font-logo">Specialization</span>{" "}
                  programs
                </h1>
                <ul className="  gap-2 space-y-2 rounded shadow-md hover:shadow-none absolute divide-y  text-gray-700 pt-1 group w-auto">
                  {sp.map((ele) => (
                    <li
                      key={ele.id}
                      className=" text-sm font-bold  items-center hover:bg-red-200 cursor-pointer "
                    >
                      <div className="relative peer text-center pt-2 group/edit inline-flex  space-x-6 lg:gap-6 sm:gap-0 w-full px-4 ">
                        <FaChevronCircleRight
                          className={`m-1  group-hover/edit:text-red-500 group-hover/edit:rotate-180 fill-current h-4 w-auto  transition-transform`}
                        />
                        {ele.name}
                      </div>
                      <div
                        className="hidden divide-y-2 py-2  peer-hover:flex hover:flex
                        w-[60%] px-4 z-10 ml-[-270px] mt-[-30px] 
                        flex-col bg-white drop-shadow-lg peer-hover:ease-in-out "
                      >
                        <Link
                          className="px-5 py-3 underline hover:underline-offset-4 decoration-sky-500 inkine-flex hover:bg-gray-200"
                          href="courses/specialization/quarter4"
                        >
                          Quarter : <span>{ele.q4.quater}</span>
                          <h1 className="text-end">{ele.q4.Code}</h1>
                        </Link>
                        <Link
                          className="px-5 underline hover:underline-offset-4 decoration-sky-500 inkine-flex  py-3 hover:bg-gray-200"
                          href="courses/specialization/quarter5"
                        >
                          Quarter : <span>{ele.q5.quater}</span>
                          <h1 className="text-end">{ele.q5.Code}</h1>
                        </Link>
                      </div>
                      {/* <ul className="group/item   ml-[-80px] bg-green-500">
                      <li>
                        Quarter : <span>{ele.q4.quater}</span>
                      </li>
                      <li>
                        Quarter : <span>{ele.q5.quater}</span>
                      </li>
                    </ul> */}
                    </li>
                  ))}
                </ul>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
      <motion.div
        style={{ opacity }}
        onScroll={(event) => y.set(window.pageYOffset)}
      >
        <motion.div className=" ">
          {data.map((ele) => (
            <div key={ele.id}>
              <motion.div>
                <h1 className="text-3xl font-bold text-center pt-8 pb-4 w-full">
                  {ele.title}
                </h1>
                <p className="text-sm item-center text-center">
                  {ele.subTitle}
                </p>
              </motion.div>
              <motion.div
                variants={container}
                transition={{ duration: 3 }}
                viewport={{ once: false, amount: 0.45 }}
                initial="hidden"
                whileInView="show"
                className=" py-6  grid lg:grid-cols-3 sm:grid-cols-2 md:grid-1 items-center px-2 gap-8"
              >
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", ease: "circInOut" }}
                  className="bg-[#E879798F]  rounded-[4px] shadow-xl px-8 py-10 cursor-pointer "
                >
                  <h1 className="text-white font-bold text-[20px] text-right ">
                    {ele.quater1.code}
                  </h1>
                  <h2 className="text-center text-6xl z-[-1] text-white opacity-25">
                    {ele.quater1.name}
                  </h2>
                  <motion.p
                    variants={paraVariant(1.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className=" lg:flex text-black"
                  >
                    {ele.quater1.des}{" "}
                    <span className="text-blue-600 bg-sky-200  font-extrabold text-6xl">
                      TS
                    </span>
                  </motion.p>
                </motion.div>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", ease: "circInOut" }}
                  className="bg-[#79E1E870] shadow-xl  rounded-[4px] px-4 py-8 cursor-pointer "
                >
                  <h1 className="text-white font-bold text-[20px] text-right ">
                    {ele.quater2.code}
                  </h1>
                  <h2 className="text-center text-6xl z-[-1] text-white opacity-25">
                    {ele.quater2.name}
                  </h2>
                  <motion.p
                    variants={paraVariant(1.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className=" lg:flex text-black"
                  >
                    {ele.quater2.des}{" "}
                    <span className="text-white   font-extrabold text-6xl">
                      <FaCloud />
                    </span>
                  </motion.p>
                </motion.div>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", ease: "circInOut" }}
                  className="bg-[#9C79E8] shadow-xl rounded-[4px] px-4 py-8 cursor-pointer "
                >
                  <h1 className="text-white  font-bold text-[20px] text-right ">
                    {ele.quater3.code}
                  </h1>
                  <h2 className="text-center text-6xl z-[-1] text-white opacity-25">
                    {ele.quater3.name}
                  </h2>
                  <motion.p
                    variants={paraVariant(1.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className=" lg:flex text-black"
                  >
                    {ele.quater3.des}{" "}
                    <span className="text-white   font-extrabold text-6xl">
                      <FaDollarSign />
                    </span>
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          ))}
          <motion.div className="py-6 pt-[30px] m-4 shadow-lg ">
            <motion.h1 className="lg:text-4xl sm:text-3xl md:text-xl font-extrabold text-center">
              Quarterwise full <span className="text-red-500">Syllabus</span>
            </motion.h1>
            <motion.div>
              <h1>Please select your quarter (common or Specialization)</h1>
            </motion.div>
          </motion.div>
          <motion.div className="pt-6">
            <h1 className="text-3xl font-bold text-center pt-8 pb-4 w-full">
              <span className="text-red-400 font-logo">Specialized </span>{" "}
              Tracks
            </h1>
            <p className="text-sm item-center text-center pb-4 border-b-2 border-gray-500">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each
            </p>
            <motion.div
              style={{ opacity }}
              onScroll={(event) => y.set(window.pageYOffset)}
              className="pt-8 bg-gray-100 divide-y divide-y-reverse "
            >
              {sp.map((data) => (
                <div key={data.id}>
                  <motion.h1
                    variants={paraVariant(0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="text-center lg:font-extrabold lg:text-3xl py-4 w-full md:text-xl md:text-bold"
                  >
                    {data.name}
                  </motion.h1>
                  <motion.p
                    variants={paraVariant(1.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="px-2 text-sm item-center text-center pb-4"
                  >
                    {data.para}
                  </motion.p>
                  <motion.div
                    variants={container}
                    transition={{ duration: 3 }}
                    viewport={{ once: false, amount: 0.45 }}
                    initial="hidden"
                    whileInView="show"
                    className="grid lg:grid-cols-2 md:grid-1 items-center "
                  >
                    <motion.div
                      variants={item}
                      initial={{ x: "100vw" }}
                      animate={{ x: 0 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        duration: 1,
                        type: "tween",
                        ease: "backInOut",
                      }}
                      className="m-8 px-4 shadow-lg rounded-xl bg-teal-400 py-4 cursor-pointer"
                    >
                      <h1 className="text-white font-bold text-[20px] text-right ">
                        <span className="text-red-500">Course code :</span>{" "}
                        {data.q4.Code}
                      </h1>
                      <h2 className="text-center text-6xl  text-white ">
                        Quarter {data.q4.quater}
                      </h2>
                      <p className=" text-center p-6 text-black">
                        {data.q4.name}
                      </p>
                    </motion.div>
                    <motion.div
                      variants={item}
                      style={{ opacity }}
                      onScroll={() => y.set(window.pageYOffset)}
                      initial={{ x: "100vw" }}
                      animate={{ x: 0 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        duration: 1,
                        type: "tween",
                        ease: "easeIn",
                      }}
                      className="m-8 px-4 shadow-lg rounded-xl bg-teal-200 py-4 cursor-pointer "
                    >
                      <h1 className="text-white font-bold text-[20px] text-right ">
                        <span className="text-red-500">Course code :</span>{" "}
                        {data.q5.Code}
                      </h1>
                      <h2 className="text-center text-6xl  text-white ">
                        Quarter {data.q5.quater}
                      </h2>
                      <p className=" text-center p-6 text-black">
                        {data.q5.name}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
              <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView={"show"}
                className=""
              >
                <QFooter />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
/**

 <motion.div className="px-8 ">
                  <h1 className="text-2xl  font-semibold pb-4">
                    <span className="text-red-500">Detail </span>syllabus
                  </h1>

                  <ul className="">
                    <li className="relative flex gap-6 items-baseline pb-4">
                      <div className=" text-red-400 before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                        <FaCircle />
                      </div>
                      <Link
                        href={"/all_quarters/quater1"}
                        className=" hover:underline hover:text-red-200"
                      >
                        Quarter-1
                      </Link>
                    </li>
                    <li className="relative flex gap-6 items-baseline pb-4">
                      <div className="text-red-400 before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                        <FaCircle className="" />
                      </div>
                      <Link
                        href={"#"}
                        className=" hover:underline hover:text-red-200"
                      >
                        Quarter-2
                      </Link>
                    </li>
                    <li className="relative flex gap-6 items-baseline pb-4">
                      <div className="text-red-400 before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                        <FaCircle className="" />
                      </div>
                      <Link
                        href={"#"}
                        className=" hover:underline hover:text-red-200"
                      >
                        Quarter-3
                      </Link>
                    </li>
                    <li className="relative flex gap-6 items-baseline pb-4">
                      <div className="text-red-400 ">
                        <FaCircle className="" />
                      </div>
                      <Link
                        href={"#"}
                        className=" hover:underline hover:text-red-200"
                      >
                        Quarter-4
                      </Link>
                    </li>
                  </ul>
                </motion.div>
*/
