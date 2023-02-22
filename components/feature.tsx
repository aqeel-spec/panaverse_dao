"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import IconBullet from "@/components/icons/bullet";
import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import feature from "../public/feature.png";
import { useColorMode } from "@chakra-ui/react";

const BackgroundDots = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        className={`py-[100px] text-left ${
          colorMode === "light"
            ? "bg-bookmark-white   text-bookmark-grey  "
            : ""
        }  `}
      >
        <h1 className=" font-bold lg:text-3xl sm:text-xl  text-center">
          The Outcome for Participants of the Program
        </h1>

        <section></section>
        <section>
          <p className="   m-4 px-4   lg:text-left sm:text-center mt-4  ">
            The graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) that are marketed
            globally by the
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span className="relative text-white">Panaverse DAO</span>
            </span>
            and, if they like, will also be able to start off by offering
            services at a rate of $50 per hour ($96,000 per year). This would
            give
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
              <span className="relative text-white">Pakistani</span>
            </span>
            professionals and students a fantastic opportunity to better their
            financial situation while also giving the economy a much-needed
            boost by expanding software exports.
          </p>
        </section>
        <div className="container px-8 text-center flex flex-col lg:flex-row items-center justify-center gap-x-24 lg:text-2xl sm:text-xl ">
          <motion.ol
            variants={container}
            initial="hidden"
            animate="show"
            className=" py-5 lg:text-base sm:text-sm flex flex-1 flex-col items-center lg:items-start  "
          >
            <motion.li
              variants={item}
              className="flex gap-2 m-2 align-middle hover:underline hover:text-red-200"
            >
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px] ">
                <Icon as={IconBullet} className="sm:h-[4px] lg:h-[35px]" />
              </Box>
              <Link
                href={
                  "https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
                }
                className=""
              >
                Top 5 'Metaverse' jobs that will rule the future of tech
                industry
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              className="flex gap-2 m-2 align-middle hover:underline hover:text-red-200"
            >
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px] ">
                <Icon as={IconBullet} className="" />
              </Box>
              <Link
                href={"https://web3.career/web3-salaries/blockchain-developer"}
              >
                Blockchain Developer Salary - Jun 2022
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              className="flex gap-2 m-2 align-middle hover:underline hover:text-red-200"
            >
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]">
                <Icon as={IconBullet} className="" />
              </Box>
              <Link href={"https://thedefiant.io/web3-soaring-salaries/"}>
                Web3 Salaries Soar to $750,000 for Rank-and-File Devs
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              className="flex gap-2 m-2 align-middle hover:underline hover:text-red-200"
            >
              <Box className="lg:h-[30px] sm:h-[17px] lg:w-[48px] sm:w-[25px]  ">
                <Icon as={IconBullet} className="" />
              </Box>
              <Link
                href={
                  "https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
                }
                className="lg:text-left sm:text-center"
              >
                The Metaverse, Blockchain Gaming, and NFTs: Navigating the
                Internet’s Uncharted Waters
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              className="flex gap-2 m-2 align-middle hover:underline hover:text-red-200"
            >
              <Box className="lg:h-[27px] sm:h-[17px] lg:w-[35px] sm:w-[25px]">
                <Icon as={IconBullet} className="" />
              </Box>
              <Link
                href={
                  "https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
                }
              >
                How To Become Metaverse Developer: Scope, Skills, and Salary
              </Link>
            </motion.li>
          </motion.ol>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ["-100%", "2%"] }}
            transition={{ duration: 4, ease: "linear", loop: Infinity }}
            className="flex flex-1 justify-center z-10 mb-10 lg:mb-0"
          >
            <Image
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={feature}
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default BackgroundDots;
