import React from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import Panaverse from "../public/logo.png";
import PIAIC from "../public/PIAIC_Logo.svg.png";
import Sylani from "../public/saylani-logo.png";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className="grid lg:grid-cols-2 place-items-center bg-red-100 md:grid-cols-1 ">
        <div className=" px-6 py-4">
          <p className=" font-bold text-3xl pb-6">
            <span className="text-red-500">PIAIC</span> Community
          </p>
          <div>
            <div className="pb-4 flex text-center align-middle gap-4 cursor-pointer">
              <span className="pl-2">
                <Image
                  src={Panaverse}
                  alt=""
                  loading="lazy"
                  className="h-[50px]  w-[30px]"
                />
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
                <Image
                  src={PIAIC}
                  alt=""
                  loading="lazy"
                  className="h-[55px] w-[40px]"
                />
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
                <Image
                  src={Sylani}
                  alt=""
                  loading="lazy"
                  className="h-[55px]  w-[200px]"
                />
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
            <div className="pb-4 flex  text-center align-middle font-semibold gap-2 cursor-pointer lg:text-3xl sm:text-2xl md:text-xl">
              Powered by :{" "}
              <span className="text-green-500 font-extrabold  font-logo">
                Pana
              </span>
              <span className="text-green-800 font-extrabold  font-logo">
                Cloud
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="px-4 py-4  justify-items-end  ">
            <h1 className="text-red-500 text-3xl sm:text-2xl md:text-xl font-bold font-logo text-center">
              Panaverse dao
            </h1>
            <motion.h1 className="text-3xl sm:text-2xl md:text-xl font-bold font-logo text-center">
              COO Zia Khan
            </motion.h1>
            <iframe
              className="rounded "
              width="320"
              height="200"
              src="https://www.youtube.com/embed/_OVnXw2ldog"
              title="Once again Admissions are Open : Web 3.0 and Metaverse Program"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="grid justify-items-end px-4 gap-4 py-4 mt-[-300px] ">
        <div>
          <Link href={"https://www.instagram.com/piaicofficial/"}>
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
          </Link>
        </div>
        <div>
          <Link href={"https://twitter.com/Panaverse_edu"}>
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>
        </div>
        <div>
          <Link href={"https://www.facebook.com/groups/panaverse"}>
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>
        </div>
        <div>
          <Link href={"https://www.youtube.com/@panaverse/streams"}>
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>
        </div>
        <div>
          <Link href={"https://github.com/panaverse"}>
            <FaGithub className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>
        </div>
        <div>
          <Link href={"#"}>
            <FaDiscord className="text-2xl cursor-pointer hover:text-red-600" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;

// const variants = {
//   visible: (custom: number) => ({
//     opacity: 1,
//     transition: { delay: custom * 0.2 },
//   }),
// };
