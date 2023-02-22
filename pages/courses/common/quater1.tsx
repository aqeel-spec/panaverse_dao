"use client";
import React, { useEffect, useState } from "react";
import { Ds } from "@/types/ds";
import { motion, useScroll } from "framer-motion";
import { Heading, Icon, List, ListIcon, ListItem } from "@chakra-ui/react";
import {
  FaBook,
  FaJs,
  FaLink,
  FaBookOpen,
  FaCheckCircle,
  FaReact,
  FaConnectdevelop,
  FaBackward,
} from "react-icons/fa";
import Qfooter from "../../../components/qfooter";

import Link from "next/link";
import Image from "next/image";
import Dev from "../../../public/dev.jpg";
import { FaYoutube, FaCircle, FaGithub } from "react-icons/fa";
import Quiz from "@/components/qfooter";
import {
  navVariants,
  paraVariant,
  slideIn,
  item,
  container,
  navVariant2,
} from "@/utils/motion";

function quater1() {
  //   scroll motion
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
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-5 bg-red-500"
        initial="hidden"
        style={{ scaleX: scrollYProgress }}
      /> */}
      {data.map((ele) => (
        <motion.div key={ele.id} className="">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView={"show"}
            className="text-center py-[40px] m-8 border-spacing-4 border-b-2 shadow-lg sm:text-4xl md:text-2xl lg:text-6xl font-extrabold text-red-500"
          >
            {ele.des}
          </motion.nav>
          <motion.div className="text-center font-bold text-4xl ">
            {ele.title}{" "}
            <span className="text-red-500 font-logo underline-offset-8 underline">
              Quater {ele.quarterI.id}
            </span>
          </motion.div>
          <motion.div className="px-6 py-8 gap-6">
            <pre>{ele.quarterI.name}</pre>
            <pre className="text-end ">
              <span className="font-bold">Course code :</span>{" "}
              {ele.quarterI.courseCode}
            </pre>
            <Heading>
              Duration :{" "}
              <span className="text-red-500">{ele.quarterI.duration}</span>
            </Heading>
            <div className="max-w-full py-10 pl-4  rounded overflow-hidden shadow-lg">
              <motion.div className="lg:flex">
                <div className="px-25 py-15">
                  <div className="font-bold sm:text-2xl md:text-xl lg:text-3xl mb-2">
                    Description
                  </div>
                  <motion.p
                    variants={paraVariant(1.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className=" px-2 w-full text-gray-400 pt-[40px] text-base"
                  >
                    {ele.quarterI.des}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 3 }}
                  viewport={{ once: false, amount: 0.25 }}
                  className="mt-[-50px] bg-red-100 "
                >
                  <Image
                    src={Dev}
                    height={900}
                    width={900}
                    alt="Developer image"
                    className=""
                  />
                </motion.div>
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

            <div className="flex mt-[-120px] pl-4">
              <div className=" bg-red-500 h-20 w-64 rounded-full flex z-[-1] opacity-10 mt-[-90px]" />
              <div className="bg-indigo-500 h-50 w-50 rounded-full flex z-[-1] opacity-10 mt-[-90px]" />
              <div className="bg-sky-500 h-50 w-50 rounded-full flex z-[-1] opacity-10 mt-[-90px]" />
            </div>
          </motion.div>
          <motion.div className="pt-[150px] ">
            <div className="lg:text-3xl sm:text2xl font-extrabold px-4 md:text-xl pb-8">
              Course <span className="text-red-400">outline</span>
            </div>

            <div
              style={{ position: "relative" }}
              className="pl-4 py-8 bg-black "
            >
              <h1 className="lg:text-3xl sm:text-2xl font-bold py-4 md:text-xl text-white text-center">
                {ele.quarterI.ptOne?.name}
              </h1>
              <div className="lg:flex sm:flex-row">
                <iframe
                  className="lg:w-[800px] sm:w-[600px] sm:h-[400px] md:w-full md:h-auto  lg:h-[450px]"
                  placeholder="blur"
                  src="https://www.youtube.com/embed/57RKSZv-KQI?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                  title="01 Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="px-4 py-4 text-xl font-bold text-white">
                  Learn html and css with Miss Hira Khan
                  <div className="text-sm flex relative  ">
                    <Link
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      }
                    >
                      {" "}
                    </Link>
                    <span className="flex gap-4 py-6 text-red-200 hover:text-green-400 hover:underline cursor-pointer">
                      <FaYoutube className="hover:text-red-500 relative" />
                      {ele.quarterI.ptOne?.by}
                    </span>
                  </div>
                  <div className="text-sm flex relative  ">
                    <Link
                      href={
                        "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                      }
                    >
                      {" "}
                    </Link>
                    <span className="flex gap-4 py-4 text-red-100 hover:text-green-400 hover:underline cursor-pointer">
                      <FaYoutube className="hover:text-red-500 relative" />
                      {ele.quarterI.ptOne?.by2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              variants={container}
              transition={{ duration: 3 }}
              viewport={{ once: false, amount: 0.45 }}
              initial="hidden"
              whileInView="show"
              className="  py-6 px-4"
            >
              <ul>
                <li className="text-center text-3xl font-extrabold">
                  {ele.quarterI.ptTwo?.title}
                </li>
                <div className="px-8 pl-8">
                  <motion.li className="relative flex gap-10 py-8 items-baseline ">
                    <div className=" text-red-400 before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaCircle />
                    </div>
                    <motion.div variants={item}>
                      <h1 className="lg:text-2xl sm:text-xl md:text-sm font-semibold ">
                        Introduction to Panaverse DAO
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={
                          "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                        }
                      >
                        {" "}
                        {ele.quarterI.ptTwo?.doc}
                      </Link>
                    </motion.div>
                  </motion.li>
                  <li className="relative flex gap-10 py-8  items-baseline ">
                    <div className=" text-red-400 before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaCircle />
                    </div>
                    <motion.div variants={item} className="">
                      <h1 className="lg:text-2xl sm:text-xl md:text-sm font-semibold ">
                        {ele.quarterI.ptTwo?.title2}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={
                          "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                        }
                      >
                        {" "}
                        {ele.quarterI.ptTwo?.doc2}
                      </Link>
                    </motion.div>
                  </li>
                  <li className="relative flex gap-10 items-baseline pb-4">
                    <div className=" text-red-400 before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-400">
                      <FaCircle />
                    </div>
                    <motion.div variants={item} className="">
                      <h1 className="lg:text-3xl sm:text-xl md:text-sm font-semibold ">
                        {ele.quarterI.ptTwo?.name3}
                      </h1>
                      <h1 className="lg:text-2xl sm:text-xl md:text-sm font-semibold ">
                        {ele.quarterI.ptTwo?.title3}
                      </h1>
                      <Link
                        className="text-base text-sky-500 hover:text-sky-300 hover:underline-offset-4 underline"
                        href={
                          "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                        }
                      >
                        {" "}
                        {ele.quarterI.ptTwo?.doc3}
                      </Link>
                    </motion.div>
                  </li>
                </div>
              </ul>
            </motion.div>
            {/* { Sir Zeeshan github } */}
            <div className="  py-6 px-4">
              <ul>
                <li className="text-center text-3xl font-extrabold">
                  {ele.quarterI.ptThree?.title}
                </li>
                <div
                  style={{ position: "relative" }}
                  className="pl-4 py-8 shadow-lg"
                >
                  <h1 className="lg:text-3xl sm:text-2xl font-bold py-4 md:text-xl lg:text-center">
                    {ele.quarterI.ptThree?.by}
                  </h1>
                  <motion.div className="lg:flex sm:flex-row  ">
                    <div className=" py-4 text-base  ">
                      <div className="relative py-6">
                        <Link
                          className="flex gap-2 hover:underline  hover:text-red-300 cursor-pointer hover:underline-offset-4 font-bold text-xl"
                          href={
                            "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                          }
                        >
                          <span>
                            <FaLink />
                          </span>
                          Go <span className="text-red-500">YouTube</span>{" "}
                          playlist
                        </Link>
                        <p className=" m-2 text-center w-full lg:text-left text-base sm:text-center">
                          {ele.quarterI.ptThree?.des}
                        </p>
                        <Link
                          className="flex gap-2 py-4 underline hover:underline  hover:text-red-300 cursor-pointer hover:underline-offset-4 font-bold text-sm"
                          href={
                            "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
                          }
                        >
                          <span className="text-black relative gap-4">
                            <FaBook />
                          </span>
                          Get <span className="text-red-500">JS</span> Book
                        </Link>
                        <Link
                          className="flex gap-2 text-sky-500  hover:underline  hover:text-red-300 cursor-pointer hover:underline-offset-4 font-semibold text-sm"
                          href={
                            "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
                          }
                        >
                          <span>
                            <FaGithub />
                          </span>
                          GitHub Book & practice exercise
                        </Link>
                        <Link
                          className="flex gap-2 text-sky-500 py-4 hover:underline  hover:text-red-300 cursor-pointer hover:underline-offset-4 font-semibold text-sm"
                          href={
                            "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                          }
                        >
                          <span className="flex gap-2">
                            <FaGithub />{" "}
                            {ele.quarterI.ptThree?.jsAndNodeExercises.name}
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="pl-4">
                      <iframe
                        className="lg:w-[780px] sm:w-[600px]  sm:h-[400px] md:w-full md:h-auto  lg:h-[390px]"
                        placeholder="blur"
                        src="https://www.youtube.com/embed/3ivvqbUpGbg?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                        title="01 Introduction"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </motion.div>
                </div>
              </ul>
            </div>
            {/* { Sir Zeeshan lectures } */}
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView={"show"}
              className="m-6 border-l-red-300 border-r-yellow-200 border-l-4 border-r-4  rounded-br-3xl rounded-tl-3xl shadow-lg py-6 px-10"
            >
              <motion.h1 className="text-center text-3xl font-extrabold">
                <h1>Fundamentals of Typescript</h1>
              </motion.h1>

              <motion.ul
                variants={container}
                transition={{ delay: 4 }}
                className="list-roman"
              >
                <motion.li variants={item}>
                  <h1 className="text-xl font-semibold  ">
                    TypeScript Presentation
                  </h1>
                  <Link
                    className="hover:underline-offset-4 underline text-sky-500"
                    href={
                      "https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing"
                    }
                  >
                    https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing
                  </Link>
                </motion.li>
                <motion.li variants={item} className="py-4">
                  <h1 className="text-xl font-semibold  ">
                    Getting Started Exercises with TypeScript and Node.js
                  </h1>
                  <Link
                    className="hover:underline-offset-4 underline text-sky-500"
                    href={
                      "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                    }
                  >
                    https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div
              variants={container}
              transition={{ delay: 4 }}
              className="py-4 m-0   border-gray-300 bg-gray-200 text-gray-600"
            >
              <div className="text-center">
                <motion.ul>
                  <li className="lg:text-2xl sm:text-xl md:text-sm font-light ">
                    {ele.quarterI.ptFour?.name}
                  </li>
                  <p className="text-base">{ele.quarterI.ptFour?.chp}</p>
                  <li className="text-center align-bottom items-center ">
                    <div className="flex gap-2 justify-center hover:text-green-500 text-sky-400 justify-items-end underline hover:underline-offset-4 cursor-pointer hover:underline-4">
                      <span className=" justify-center grid justify-items-end relative pt-[1.5px] ">
                        <FaBookOpen className="" />
                      </span>{" "}
                      <p>
                        {" "}
                        <a href={ele.quarterI.ptFour?.link}>Get Book</a>
                      </p>
                    </div>
                  </li>
                </motion.ul>
                <List spacing={3} className="text-left lg:pl-20 px-4 m-4">
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.quarterI.ptFour?.ul.name}

                    <span className="underline text-sky-500 hover:underline-offset-4">
                      {" "}
                      <a href={ele.quarterI.ptFour?.ul.link}>
                        <ListIcon as={FaGithub} color="green.500" /> Go Github
                        repo
                      </a>
                    </span>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.quarterI.ptFour?.ul.name2}

                    <span className="underline text-sky-500 hover:underline-offset-4">
                      {" "}
                      <a href={ele.quarterI.ptFour?.ul.link2}>
                        <ListIcon as={FaBook} color="green.500" /> Get Book
                      </a>
                    </span>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.quarterI.ptFour?.ul.name3}

                    <span className="underline text-sky-500 hover:underline-offset-4">
                      {" "}
                      <a href={ele.quarterI.ptFour?.ul.link3}>
                        <ListIcon as={FaGithub} color="green.500" /> Go to
                        Github Projects
                      </a>
                    </span>
                  </ListItem>
                </List>
                <motion.div className="lg:text-3xl sm:text2xl md:text-xl font-logo text-red-700 ">
                  <div>{ele.quarterI.ptFour?.ul.quiz1}</div>
                  <div>{ele.quarterI.ptFour?.ul.quiz2}</div>
                </motion.div>
              </div>
            </motion.div>
            {/* {react portion } */}
            <motion.div
              variants={navVariant2}
              initial="hidden"
              whileInView={"show"}
              className="py-20 px-4 shadow-2xl pt-15 md:text-center lg:text-left bg-teal-50  "
            >
              <List className="border-l-4 border-l-red-800">
                <ListItem className=" px-10 ">
                  <ListIcon
                    as={FaReact}
                    color="green.500"
                    h={"40px"}
                    w={"40px"}
                    position={"relative"}
                  />
                  <span className="lg:text-3xl sm:text-2xl md:text-xl text-red-400 absolute font-extrabold ">
                    {ele.quarterI.ptFive?.name}
                  </span>
                </ListItem>
              </List>

              <motion.div className="lg:test-xl  sm:text-sm md:text-base text-gray-700 px-20  ">
                {ele.quarterI.ptFive?.des}

                <span className="underline text-sky-500 hover:underline-offset-4">
                  {" "}
                  <a href={ele.quarterI.ptFive?.link} className="px-6">
                    <Icon as={FaConnectdevelop} color="green.500" /> Learn TS &
                    React
                  </a>
                </span>
              </motion.div>
            </motion.div>
            {/* {qbreak portion } */}
            <motion.div className="m-6 py-20 ">
              <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView={"show"}
                className="grid text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  lg:text-5xl lg:py-4 sm:py-2 md:py-1 drop-shadow-2xl sm:text-3xl md:text-2xl m-8 shadow-lg  font-extrabold "
              >
                <div className="">{ele.quarterI.qBreak?.name}</div>
              </motion.div>
              <motion.div
                variants={paraVariant(1.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="m-4 border-t-4"
              >
                <p className="sm:text-xl pt-6 mb:text-base ">
                  {ele.quarterI.qBreak?.des}
                </p>
              </motion.div>
              <motion.ul
                transition={{ duration: 3 }}
                viewport={{ once: false, amount: 0.45 }}
                initial="hidden"
                whileInView="show"
                variants={container}
                className="list-none p-0"
              >
                <motion.li
                  variants={item}
                  className="py-2 border-b  border-gray-300 "
                >
                  <div className="flex gap-4 hover:text-sky-500 relative space-between hover:bg-gray-100 hover:underline-offset-4 cursor-pointer text-gray-900 font-medium px-4 py-2">
                    <div>
                      <Icon
                        as={FaGithub}
                        color="green.500"
                        h={"20px"}
                        w={"20px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.link1}>
                      {ele.quarterI.qBreak?.link1}
                    </a>
                  </div>
                </motion.li>
                <motion.li
                  variants={item}
                  className="py-2 border-b  border-gray-300 "
                >
                  <div className="flex gap-4 hover:text-sky-500 relative space-between hover:bg-gray-100 hover:underline-offset-4 cursor-pointer text-gray-900 font-medium px-4 py-2">
                    <div>
                      <Icon
                        as={FaGithub}
                        color="green.500"
                        h={"20px"}
                        w={"20px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.link2}>
                      {ele.quarterI.qBreak?.link2}
                    </a>
                  </div>
                </motion.li>
                <motion.li
                  variants={item}
                  className="py-2 border-b  border-gray-300 "
                >
                  <div className="flex gap-4 hover:text-sky-500 relative space-between hover:bg-gray-100 hover:underline-offset-4 cursor-pointer text-gray-900 font-medium px-4 py-2">
                    <div>
                      <Icon
                        as={FaGithub}
                        color="green.500"
                        h={"20px"}
                        w={"20px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.link3}>
                      {ele.quarterI.qBreak?.link3}
                    </a>
                  </div>
                </motion.li>
                <motion.li variants={item} className="py-2   border-gray-300 ">
                  <div className="">
                    <h1 className="text-center lg:text-xl sm:text-sm md:text-base font-medium">
                      {ele.quarterI.qBreak?.link4.name}
                    </h1>
                    <div className="block hover:text-sky-500 gap-4 relative space-between hover:bg-gray-100 hover:underline-offset-4 cursor-pointer text-gray-900 font-medium px-4 py-2">
                      <div className="flex gap-4">
                        <div>
                          <Icon
                            as={FaGithub}
                            color="green.500"
                            h={"20px"}
                            w={"20px"}
                            position={"relative"}
                          />
                        </div>
                        <a href={ele.quarterI.qBreak?.link4.link}>
                          {ele.quarterI.qBreak?.link4.link}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={item}
                  className="py-2 border-b  border-gray-300 "
                >
                  The best-developed Website will be hosted on{" "}
                  <span className="text-sky-500 hover:underline-offset-4 underline cursor-pointer">
                    www.panaverse.co
                  </span>
                  domain.
                </motion.li>
                <motion.li variants={item} className="py-2  border-gray-300 ">
                  <div className="">
                    <h1 className="text-center lg:text-xl sm:text-sm md:text-base font-medium">
                      {ele.quarterI.qBreak?.link5.name}
                    </h1>
                    <div className="block hover:text-sky-500 gap-4 relative space-between hover:bg-gray-100 hover:underline-offset-4 cursor-pointer text-gray-900 font-medium px-4 py-2">
                      <div className="flex gap-4">
                        <div>
                          <Icon
                            as={FaGithub}
                            color="green.500"
                            h={"20px"}
                            w={"20px"}
                            position={"relative"}
                          />
                        </div>
                        <a href={"https://www.piaic.org"}>
                          {ele.quarterI.qBreak?.link4.link}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li
                  variants={item}
                  className="py-2 border-b  border-gray-300 "
                >
                  <p>
                    The best-developed Website will be hosted on{" "}
                    <a
                      href={"www.piaic.org"}
                      className="text-sky-500 hover:underline-offset-4 underline cursor-pointer"
                    >
                      www.piaic.org
                    </a>
                    domain.
                  </p>
                </motion.li>
              </motion.ul>
              <motion.div className="m-4 py-8">
                <motion.div className="py-8 px-4  border-x-2 border-r-6 hadow-cyan-500/50 shadow-lg rounded-tr-xl border-r-yellow-200 ">
                  <motion.div
                    initial="hidden"
                    variants={slideIn("right", "spring", 0.7, 0.3)}
                    whileInView={"show"}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: false }}
                    className="gap-4 flex "
                  >
                    <div>
                      <Icon as={FaGithub} h={"50px"} w={"50px"} />
                    </div>
                    <span className="lg:text-3xl sm:text-2xl md:text-xl font-semibold ">
                      {ele.quarterI.qBreak?.endOfQuater?.name}
                    </span>
                  </motion.div>
                </motion.div>
                <div className="pt-6 px-2 ">
                  <motion.div
                    variants={paraVariant(0.9)}
                    initial="hidden"
                    whileInView={"show"}
                    className=" lg:text-2xl sm:text-xl mb:text-base font-semibold"
                  >
                    {ele.quarterI.qBreak?.endOfQuater?.pro}
                  </motion.div>
                  <motion.div
                    variants={paraVariant(1.2)}
                    initial="hidden"
                    whileInView={"show"}
                    className="container pt-8 pb-2 text-base text-center text-gray-800 "
                  >
                    {ele.quarterI.qBreak?.endOfQuater?.detail}
                  </motion.div>
                  {/* {youtube motion here} */}
                  <motion.div
                    initial="hidden"
                    variants={slideIn("left", "spring", 1, 0.5)}
                    whileInView={"show"}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: false }}
                    className="  w-full h-[400px] overflow-hidden rounded-lg shadow-lg"
                  >
                    <iframe
                      // width="full"
                      // height="full"
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/MiXAma2db8Y?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
                      title="01 Git Intro"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                variants={slideIn("right", "spring", 0.3, 0.5)}
                whileInView={"show"}
                viewport={{ once: false }}
                className="m-4 py-8 divide-y-2 "
              >
                <motion.div
                  variants={paraVariant(1)}
                  className="lg:text-3xl sm:text-2xl md:text-xl"
                >
                  {ele.quarterI.qBreak?.endOfQuater?.articles.name}
                </motion.div>
                {/* {div motion here} */}
                <motion.ul
                  key={ele.id}
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  className=" divide-y-2 "
                >
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={"https://www.piaic.org"}>
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l1}
                    </a>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.endOfQuater?.articles.l2}>
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l2}
                    </a>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.endOfQuater?.articles.l3}>
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l3}
                    </a>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.endOfQuater?.articles.l4}>
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l4}
                    </a>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.endOfQuater?.articles.l5}>
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l5}
                    </a>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <a href={ele.quarterI.qBreak?.endOfQuater?.articles.l6}>
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l6}
                    </a>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <h1 className="lg:text-xl sm:text-xm md:text-base">
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l7.name}
                    </h1>
                    <a
                      href={ele.quarterI.qBreak?.endOfQuater?.articles.l7.link}
                      className="relative hover:underline-offset-4 underline hover:text-sky-500"
                    >
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l7.link}
                    </a>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex gap-4 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 "
                  >
                    <div>
                      <Icon
                        as={FaCheckCircle}
                        color="red.400"
                        h={"15px"}
                        w={"15px"}
                        position={"relative"}
                      />
                    </div>
                    <h1 className="lg:text-xl sm:text-xm md:text-base">
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l8.name}
                    </h1>
                    <a
                      href={ele.quarterI.qBreak?.endOfQuater?.articles.l8.link}
                      className="relative hover:underline-offset-4 underline hover:text-sky-500"
                    >
                      {ele.quarterI.qBreak?.endOfQuater?.articles.l8.link}
                    </a>
                  </motion.div>
                </motion.ul>
              </motion.div>
              <div className="m-4 py-8  ">
                <div className="lg:text-2xl sm:text-xl md:text-sm font-bold">
                  {ele.quarterI.qBreak?.endOfQuater?.articles.git.csheet}
                </div>
                <div className="flex gap-4 text-teal-300 py-4 hover:bg-gray-100 hover:underline-offset-4 hover:text-sky-700 ">
                  <div>
                    <Icon
                      as={FaCheckCircle}
                      color="sky.400"
                      h={"15px"}
                      w={"15px"}
                      position={"relative"}
                    />
                  </div>
                  <a
                    href={ele.quarterI.qBreak?.endOfQuater?.articles.git.link}
                    className="text-sky-700 hover:underline hover:underline-offset-4"
                  >
                    {ele.quarterI.qBreak?.endOfQuater?.articles.git.link}
                  </a>
                </div>
                <motion.div
                  variants={navVariants}
                  initial="hidden"
                  whileInView={"show"}
                  className="py-8 px-4 m-6 text-center shadow-lg"
                >
                  <motion.div className="lg:text-4xl sm:text-2xl md:text-xl text-red-500 lg:font-extrabold font-logo sm:font-bold">
                    {ele.quarterI.qBreak?.endOfQuater?.articles.git.quiz.name}
                  </motion.div>
                  <div className="text-center">
                    <div className="flex text-center m-4 items-center justify-items-center gap-10">
                      <div>
                        {ele.quarterI.qBreak?.endOfQuater?.articles.git.quiz.q}
                      </div>
                      <div>
                        {
                          ele.quarterI.qBreak?.endOfQuater?.articles.git.quiz
                            .time
                        }
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  variants={slideIn("down", "spring", 0.7, 0.3)}
                  whileInView={"show"}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: false }}
                  className="py-8 px-4 m-6 text-center shadow-lg"
                >
                  <div className="lg:text-4xl sm:text-2xl md:text-xl text-red-500 lg:font-extrabold font-logo sm:font-bold">
                    {ele.quarterI.qBreak?.endOfQuater?.articles.tsQuiz.name}
                  </div>
                  <div className="text-center">
                    <div className="flex text-center m-4 items-center justify-items-center gap-10">
                      <div>
                        {ele.quarterI.qBreak?.endOfQuater?.articles.tsQuiz.q}
                      </div>
                      <div>
                        {
                          ele.quarterI.qBreak?.endOfQuater?.articles.tsQuiz
                            .duration
                        }
                      </div>
                    </div>
                    <a
                      className="text-sky-500 hover:underline hover:underline-offset-4 hover:text-teal-500"
                      href={
                        ele.quarterI.qBreak?.endOfQuater?.articles.tsQuiz.li
                      }
                    >
                      {
                        ele.quarterI.qBreak?.endOfQuater?.articles.tsQuiz
                          .material
                      }
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}{" "}
      <Qfooter />
    </div>
  );
}

export default quater1;
