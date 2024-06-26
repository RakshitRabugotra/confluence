import Head from "next/head";
import { Parallax } from "@react-spring/parallax";
import { useRef } from "react";

// Type definitions
import type { IParallax } from "@react-spring/parallax";

// Internal dependencies
import About from "@/components/about/About";
import Artists from "@/components/artists/Artists";
import Events from "@/components/events/Events";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/introduction/Jumbotron";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/sponsors/Sponsors";
import Theme from "@/components/theme/Theme";

const Home = () => {
  const parallax = useRef<IParallax>(null);
  return (
    <>
      <Head>
        <title>
          Confluence | The Annual Fest of Hansraj College, University of Delhi
        </title>
      </Head>
      <Navbar parallax={parallax} />
      <Parallax ref={parallax} pages={9} className="bg-primary-200">
        <Jumbotron />
        <About />
        <Theme />
        <Artists />
        <FAQ />
        <Events />
        <Sponsors />
        <Footer parallax={parallax} />
      </Parallax>
    </>
  );
};

export default Home;
