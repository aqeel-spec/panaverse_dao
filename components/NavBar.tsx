"use client";
import React, { useState } from "react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { Button, MenuButton, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import IconGithub from "./icons/Gicon";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  let [open, setOpen] = useState(false); // bg-gray-500
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="shadow-md  w-ful top-0 left-0 m-2 "
    >
      <div
        className={`md:flex rounded items-center ${
          colorMode === "light" ? "bg-white" : "bg-gray-600 "
        } justify-between  py-4 md:px-10 px-7`}
      >
        <div
          onClick={handleClick}
          className="flex font-bold cursor-pointer text-2xl items-center  font-serif gap-2 "
        >
          <span className="text-3xl  mr-1 pt-2 hover:animate-bounce ">
            <Image
              src={`/logo.png`}
              alt="Panaverse Dao"
              height={30}
              width={20}
            />
          </span>
          <span className="flex gap-1 font-logo  hover:skew-y-3 md:hover:ease-in-out delay-150 ">
            Panaverse <h2 className="text-red-600">dao</h2>{" "}
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8  text-black top-5
          cursor-pointer md:hidden
        "
        >
          {open ? <SmallCloseIcon /> : <HamburgerIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 
        absolute md:static  md:z-auto z-50 ${
          colorMode === "light" ? "bg-white" : "bg-gray-500"
        } left-0 
        w-full md:w-auto md:pl-0 pl-9 translate-all duration-500 ease-in
        ${open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100"}
        `}
        >
          <li className="md:ml-8  md:my-0 my-7 hover:bg-red-500 rounded-md w-auto ">
            <Link
              href="/courses"
              className="text-red-600 md:font-semibold text-md hover:text-white duration-500 "
            >
              Courses
            </Link>
          </li>
          <li className="md:ml-8   md:my-0 my-7 hover:bg-red-500 rounded-md ">
            <Link
              href="/about"
              className="text-red-600 font-bold md:font-semibold text-md hover:text-white duration-500"
            >
              About
            </Link>
          </li>
          <div
            className=" text-white font-bold  py-2 px-6 rounded md:ml-8 
            duration-500"
          >
            <Button bg={"red.600"}>
              <Link href="https://portal.piaic.org/signup">Register</Link>
            </Button>
          </div>
          <div className="py-2 px-3 rounded md:ml-8 hover:bg-red-500 cursor-pointer ">
            <Menu>
              <MenuButton className="font-bold text-red-600 hover:text-white ">
                Links <LinkIcon />{" "}
              </MenuButton>
              <MenuList className="md:z-auto  bg-gray-500 z-[-1]  divide-y divide-slate-200 w-full gap-2">
                <MenuItem
                  as="a"
                  icon={<LinkIcon />}
                  href="https://linktr.ee/panaverse"
                  className="hover:bg-red-300"
                >
                  Important links
                </MenuItem>
                <MenuItem
                  as="a"
                  icon={<IconGithub />}
                  href="https://github.com/panaverse"
                  className="hover:bg-red-300"
                >
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </ul>
      </div>
    </motion.div>
  );
}
/**

<header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header> 
*/
