"use client";
import React from "react";
import Image from "next/link";
import { motion } from "framer-motion";

function index() {
  return (
    <div>
      <motion.div className="h-1/2 flex flex-col md:flex-row bg-red-100">
        <motion.h1></motion.h1>
        <motion.div></motion.div>
        <motion.ul></motion.ul>
      </motion.div>
    </div>
  );
}

export default index;
