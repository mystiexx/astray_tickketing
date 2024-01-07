import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import Hero from "./sections/hero";
import Events from "./sections/events";
import CreateEvent from "./sections/createEvent";
import Contact from "./sections/contact";
import ModalTerms from "./sections/terms";

const Home = () => {
  const isTerms = localStorage.getItem("isTerm");
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    if (isTerms) {
      setShow(!isTerms);
    } else {
      setShow(true);
    }
  }, [isTerms]);

  const handleIsTerm = () => {
    setAgree(true);
    setShow(false);
    localStorage.setItem("isTerm", true);
  };
  return (
    <Layout>
      {!agree && (
        <ModalTerms
          isOpen={show}
          onClose={() => setShow(false)}
          handleIsTerm={handleIsTerm}
        />
      )}

      <Hero />
      <Events />
      <CreateEvent />
      <Contact />
    </Layout>
  );
};

export default Home;
