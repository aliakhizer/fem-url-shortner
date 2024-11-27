import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShorterLink from "../components/ShorterLink";
import AdvanceDashboard from "../components/AdvanceDashboard";
import LinkBoost from "../components/LinkBoost ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ShorterLink />
      <AdvanceDashboard />
      <LinkBoost />
      <Footer />
    </>
  );
}
