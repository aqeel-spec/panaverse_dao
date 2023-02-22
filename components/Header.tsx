"use client";

import React, { useState, useEffect } from "react";
import {
  MoonIcon,
  SunIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { Box, Button, Link, SimpleGrid, HStack, Grid } from "@chakra-ui/react";
import { RxDotFilled } from "react-icons/rx";
import Typewriter from "typewriter-effect";
import { useColorMode } from "@chakra-ui/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  ////////////////////////////////
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1627978341448-59b3eeebc024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    },

    {
      url: "https://plus.unsplash.com/premium_photo-1668473367234-fe8a1decd456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1538388149542-5e24932d11a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div
      className={`max-w-[1400px]  h-[400px]  ${
        colorMode === "light"
          ? "brightness-100 text-black   "
          : " brightness-50 text-white "
      } w-full m-auto py-2 px-2 relative group  hover:z-0 `} // -z-10
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url}) ` }}
        className="w-full h-full  rounded-2xl bg-center bg-cover duration-500   "
      >
        <div className="pl-30 text-center  py-20 text-semibold lg:text-5xl md:text-2xl  gap-2   ">
          <div
            className={`colorMode === "light"
              ? " text-teal-400 font-txt font-extrabold bg-current"
              : "text-white"
          } `}
          >
            Become a certified developer
          </div>
          <div className="text-[#B4162D] py-9 text-center  lg:text-4xl md:xl font-bold  ">
            <Typewriter
              options={{
                strings: [
                  "with Panaverse community",
                  "Earn while you learn",
                  "A one year program",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <SimpleGrid
        minChildWidth="120px"
        className="rounded-full w-[36%] min-w-full md:min-w-0 bg-gray-400 mt-[-100px] flex-row cursor-pointer flex gap-2 sm:text-center "
      >
        <Box className="bg-red-600 hover:underline px-2 h-auto text-center border-y-2  border-l-2 rounded-full">
          <Link href="#">All courses</Link>
        </Box>
        <Box className="pr-3 text-center hover:underline text-white opacity-2 py-1">
          <Link href="https://www.piaic.org/">Visit PIAIC </Link>
        </Box>
      </SimpleGrid>
      <Grid className="text-end pl-4 mt-[-350px] ">
        <div
          className="transition cursor-pointer hover:text-blue-600 pr-8  "
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? (
            <MoonIcon h="24px" w="24px" color="blackAlpha.600" />
          ) : (
            <SunIcon h="24px" w="24px" />
          )}
        </div>
      </Grid>
    </div>
  );
}
