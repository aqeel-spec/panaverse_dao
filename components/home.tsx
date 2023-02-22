"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./Header";
import { Avatar, Icon, Button } from "@chakra-ui/react";
import IconBxMap from "./icons/map";
import IconTerminal from "./icons/terminal";
import IconBxsQuoteLeft from "./icons/uQout";
import IconProgrammingLanguage from "./icons/program";
import type { Data } from "../types/type";
import Feature from "./feature";
import Footer from "./footer";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  Box,
  VStack,
  SimpleGrid,
  ListItem,
  List,
  Grid,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { courses } from "./coursesList";
import { useState, useEffect } from "react";
import Link from "next/link";

function homePage() {
  const { colorMode, toggleColorMode } = useColorMode();
  //           api data
  const [data, setData] = useState<Data>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/hello");
      const res = await result.json();
      setData(res);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className=" pr-0">
      <Header />
      <div className=" pl-2  ">
        <div
          className="md:flex gap-4 
        text-center align-center
        font-font font-bold text-4xl pb-4 pt-[78px] border-b-4 border-gray-300   "
        >
          Emerging
          <div className="text-red-600">Technologies</div>
        </div>
        <motion.div
          className={`container rounded-md pl-4 m-2 py-4 ${
            colorMode === "light"
              ? "bg-blue-100"
              : "bg-gray-400 border-x-white border-x-4"
          }  border-gray-300 float-right my-2 sm:w-[auto] w-[100%]  `}
        >
          <motion.img
            src={"/1.jpg"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            alt="Panaverse dao"
            height={500}
            width={500}
            className="md:float-right m-4 rounded-md hover:animate-pulse ease-in-out "
          />
          <p className="box  py-4 border-indigo-600  ">
            The internet is without a doubt the most important technological
            development in human history. Web3, 3D Metaverse, AI, IoT, Cloud,
            and Edge technologies expand the internet as we know it by
            introducing novel features and advancements. Metaverse will make use
            of all aspects of modern technology, including 3D, VR, AR, AI,
            blockchain, cloud and edge computing, voice computing, ambient
            computing, and more.
          </p>
          <br />
          <p>
            Citi is the latest Wall Street business to give a positive prognosis
            for Web 3.0 and the Metaverse, terms used to depict a future
            internet vision centered on decentralized technologies and virtual
            worlds. Citi stated in a March 2022 research paper that the
            metaverse economy might have a total addressable market of up to $13
            trillion and five billion people by 2030.
          </p>
        </motion.div>
        <motion.div animate={{ x: 0 }} initial={{ x: -100 }}>
          <Box className="  text-center  border-t-4 border-gray-700 left-0 top-0 pt-[400px] ">
            <div className="font-bold text-4xl  text-center text-red-500   ">
              Panaverse
              <div
                className={`${
                  colorMode === "light" ? "text-black" : "text-white"
                }`}
              >
                DAO (Decentralized Autonomous Organization)
              </div>
            </div>
          </Box>
          <motion.div className="m-4 ">
            <SimpleGrid
              gap="4"
              columns={2}
              minChildWidth="220px"
              className="pt-4 pb-[90px] border-b-2  "
            >
              <Box
                as="ul"
                className="border-2 py-2 font-bold  shadow-lg shadow-cyan-500/50 rounded-lg border-black-400"
              >
                <Grid className="px-5 py-2  text-xl ">
                  <h1 className="">Members</h1>
                  <div className="my-3 md:flex flex gap-2 ">
                    3.5<h1 className="text-red-500">K+</h1>
                  </div>
                </Grid>
                <div className="text-right px-8 py-4 mt-[-95px] ">
                  <Avatar />
                </div>
              </Box>
              <Box
                as="ul"
                className="border-2 py-2 font-bold  shadow-lg shadow-cyan-500/50 rounded-lg border-black-400"
              >
                <Grid className="px-5 py-2  text-xl ">
                  <h1 className="">Programs</h1>
                  <div className="my-3 md:flex flex  ">
                    5<h1 className="text-red-500">+</h1>
                  </div>
                </Grid>
                <div className="text-right px-8 py-4 mt-[-95px] ">
                  <Icon as={IconProgrammingLanguage} h="50px" w="50px" />
                </div>
              </Box>
              <Box
                as="ul"
                className="border-2 py-2 font-bold  shadow-lg shadow-cyan-500/50 rounded-lg border-black-400"
              >
                <Grid className="px-5 py-2  text-xl ">
                  <h1 className="">Cities</h1>
                  <div className="my-3 md:flex flex  ">
                    4<h1 className="text-red-500">+</h1>
                  </div>
                </Grid>
                <div className="text-right px-8 py-4 mt-[-95px] ">
                  <Icon as={IconBxMap} h="50px" w="50px" />
                </div>
              </Box>
            </SimpleGrid>
          </motion.div>
        </motion.div>
        <motion.div className=" pt-[30px] mx-10 ">
          <motion.section className=" px-2  my-2 border-l-4 border-red-500  ">
            <motion.h1 className="font-bold text-4xl">
              The program in a Nutshell
            </motion.h1>
            <motion.p>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the programs beginning. It resembles a
              cross between a corporate venture and an educational project.
            </motion.p>
          </motion.section>

          <div className="border-b-2 pb-[40px] "></div>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -100 }}
          className="pt-[100px]  px-6"
        >
          <div className="text-red-500 flex md:flex gap-3 text-center font-extrabold text-4xl ">
            Panaverse{" "}
            <h1
              className={`${
                colorMode === "light" ? "text-black" : "text-white"
              }`}
            >
              courses
            </h1>
          </div>
        </motion.div>
        <motion.div className="pt-[30px]  ">
          <div className="text-red-500 px-8 flex md:flex gap-3  text-center font-extrabold text-2xl ">
            Program
            <h1
              className={`${
                colorMode === "light" ? "text-black" : "text-white"
              }`}
            >
              of Studies
            </h1>
          </div>
        </motion.div>
        <motion.div className="px-4 m-2 pt-8">
          <Icon
            as={FaQuoteLeft}
            // ml={"-1080px"}
            h="40px"
            w="40px"
            color="red.500"
            className="h-[40px] w-[40px]"
          />
          <div className="pl-5 px-6 pt-[30px] ">
            <p className="border-2 pl-6 mt-[-50px] border-red-300">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 100 }}
          className="py-[90px pt-[50px] "
        >
          <div className="bg-green-200  ">
            <div className="  text-4xl border-t-2 py-4  font-extrabold font-logo md:flex flex gap-4 ">
              <div className="text-red-500 px-4">Courses</div> to offer
              <Icon as={IconTerminal} />
            </div>

            <SimpleGrid
              minChildWidth="350px"
              spacing="40px"
              className="text-center p-4 m-0 left-0"
            >
              {data.map((dta) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1, ease: "easeInOut" },
                  }}
                >
                  <Box
                    key={dta.id}
                    className={`px-4 ${
                      colorMode === "light" ? " bg-sky-100" : "bg-gray-800"
                    } hover:cursor-pointer transition py-4 shadow shadow-white-500/50 rounded-md border-1 border-white drop-shadow-xl `}
                  >
                    <div className="font-bold text-xl  ">{dta.name}</div>
                    <div className="">{dta.para}</div>
                    <Button
                      className="hover:underline  cursor-pointer text-red-500 my-2 "
                      bg={"transparent"}
                    >
                      <Link href={"#"}>Read more</Link>
                    </Button>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </div>
        </motion.div>
      </div>
      <motion.div>
        <Feature />
        <Footer />
      </motion.div>
    </div>
  );
}

export default homePage;
