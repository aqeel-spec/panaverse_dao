"use client";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import PIAIC from "../public/PIAIC_Logo.svg.png";
import Sylani from "../public/saylani-logo.png";
import Panaverse from "../public/logo.png";
import Image from "next/image";
import IconBullet from "@/components/icons/bullet";
import { useColorMode } from "@chakra-ui/react";

function footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div
        className={`${
          colorMode === "light"
            ? "bg-gray-50 text-gray-800"
            : "transparent text-white"
        } h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20`}
      >
        <div className="p-5 ">
          <ul>
            <p className=" font-bold text-3xl pb-6">
              <span className="text-red-500">PIAIC</span> Community
            </p>
            <div className="pb-4 flex  text-center align-middle gap-4 cursor-pointer">
              <span className="pl-2">
                <Image src={Panaverse} alt="" className="h-[50px]  w-[30px]" />
              </span>
              <Link
                href={"https://panaverse-dao-syllabus.vercel.app/"}
                className="pt-3 hover:underline  font-bold"
              >
                <span className="text-red-500 font-bold  ">Panaverse</span> dao
              </Link>
            </div>

            <div className="pb-4 flex pl-2 text-center align-middle gap-4 cursor-pointer">
              <span>
                <Image src={PIAIC} alt="" className="h-[55px] w-[40px]" />
              </span>
              <Link
                href={"https://www.piaic.org/"}
                className="pt-3 hover:underline text-green-500 font-bold"
              >
                PIAIC
              </Link>
            </div>
            <div className="pb-4 flex  text-center align-middle gap-4 cursor-pointer">
              <span className="">
                <Image src={Sylani} alt="" className="h-[55px]  w-[200px]" />
              </span>
              <Link
                href={"https://saylaniwelfare.com/"}
                className="pt-3 hover:underline  font-bold"
              >
                <span className="text-green-400 font-bold font-logo text-3xl ">
                  S<span className="text-blue-400">ylani</span>
                </span>
              </Link>
            </div>
            <div className="flex gap-6 pb-5">
              <Link href={"https://www.instagram.com/piaicofficial/"}>
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              </Link>
              <Link href={"https://twitter.com/Panaverse_edu"}>
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href={"https://www.facebook.com/groups/panaverse"}>
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href={"https://www.youtube.com/@panaverse/streams"}>
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
              <Link href={"https://github.com/panaverse"}>
                <FaGithub className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
              <Link href={"#"}>
                <FaDiscord className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul
            className={`${
              colorMode === "light" ? "text-gray-500" : "text-white"
            }`}
          >
            <div className="container  py-2 border-l-2 border-red-500 px-2 text-md  ">
              <span>
                <h1 className="font-semibold lg:text-2xl md:text-xl">
                  3.5<span className="text-red-500">K+</span>
                </h1>
                <p>Panaverse dao members</p>
              </span>
            </div>
            <div className="container py-2 mt- border-l-2 border-red-500 px-2 text-md ">
              <span>
                <h1 className="font-semibold lg:text-2xl md:text-xl">
                  7<span className="text-red-500">+</span>
                </h1>
                <p>Foculty members</p>
              </span>
            </div>
            <div className="container py-2 mt-4 border-l-2 border-red-500 px-2 text-md ">
              <span>
                <h1 className="font-semibold lg:text-2xl md:text-xl">
                  2<span className="text-red-500">000+</span>
                </h1>
                <p>Students enrolled</p>
              </span>
            </div>
            <div className="container  mt-4 py-2 border-l-2 border-red-500 px-2 text-md  ">
              <span>
                <h1 className="font-semibold lg:text-2xl md:text-xl">
                  1.5<span className="text-red-500">K+</span>
                </h1>
                <p>Followers on twitter</p>
              </span>
            </div>
          </ul>
        </div>
        <div
          className={`p-5 ${
            colorMode === "light" ? "text-gray-500" : "text-white"
          }`}
        >
          <ul>
            <p className=" font-bold text-2xl pb-4 ">
              Ultimate <span className="text-red-500 font-logo ">Goal</span>
            </p>
            <li className="flex gap-2 py-4">
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]">
                <Icon
                  as={IconBullet}
                  className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]"
                />
              </Box>{" "}
              To reshape Pakistan{" "}
            </li>
            <li className="flex gap-2">
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]">
                <Icon
                  as={IconBullet}
                  className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]"
                />
              </Box>{" "}
              Build economy{" "}
            </li>
            <li className="flex gap-2 py-4">
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]">
                <Icon
                  as={IconBullet}
                  className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]"
                />
              </Box>{" "}
              Educate Youth about current situation{" "}
            </li>
            <li className="flex gap-2 pb-4">
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]">
                <Icon
                  as={IconBullet}
                  className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]"
                />
              </Box>{" "}
              To make everyone self-employed{" "}
            </li>
            <p className=" font-bold text-2xl pb-4">Helpline</p>
            <div className="flex gap-2">
              <FaWhatsapp className="text-green-500 " />
              <span className="text-md mt-[-3px] font-semibold flex gap-2">
                +92-308-2220203 (WhatsApp as well)
              </span>
            </div>
            {"  "}
          </ul>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center text-center  p-2 ${
          colorMode === "light"
            ? "bg-gray-50 border-t-2 border-white shadow-xl text-gray-800"
            : "text-white  border-t-2 border-white shadow-xl"
        }`}
      >
        <h1 className="  font-semibold">
          © 2023 All rights reserved | Build with{" "}
          <span className="text-red-500">❤</span> by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            <span className="text-red-300">Aqeel</span> Shahzad{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default footer;
