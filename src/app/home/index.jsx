import React from "react";
import Layout from "../../layout";
import Hero from "./sections/hero";
import Events from "./sections/events";
import CreateEvent from "./sections/createEvent";
import Contact from "./sections/contact";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Events />
      <CreateEvent />
      <Contact />
    </Layout>
  );
};

export default Home;
