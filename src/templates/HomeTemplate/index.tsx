import { useEffect } from "react";
//Component
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default function HomeTemplate(props: MODEL.ITemplates) {
  const { Component } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}
