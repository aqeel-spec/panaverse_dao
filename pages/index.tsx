import Head from "next/head";
import { Inter } from "@next/font/google";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/components/theme";
import NavBar from "@/components/NavBar";
import HomePage from "@/components/home";

export default function Home() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <NavBar />
      <HomePage />
    </>
  );
}
