import React from "react";
import Layout from "../../layout";
import Hero from "./sections/hero";
import Events from "./sections/events";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Events />
    </Layout>
  );
};

export default Home;
