import React from "react";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Feature from "../components/Feature";
import Maklumat from "../components/Maklumat";
import Quotes from "../components/Quotes";
import Articles from "../components/Articles";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Tautan from "../components/Tautan";
import LinkTautan from "../components/LinkTautan";
import Headlines from "../components/Headlines";

const Home = () => {
  return (
    <>
      <Hero />
      <Headlines />
      <Logo />
      <Feature />
      <Maklumat />
      <Quotes />
      <Articles />
      <Testimonials />
      <Faq />
      <LinkTautan />
      <Tautan />
    </>
  );
};

export default Home;
