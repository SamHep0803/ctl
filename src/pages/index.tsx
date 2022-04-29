import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
};

export default Home;
