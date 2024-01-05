import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDir={"column"}>
      <Navbar />
      <Box position={"relative"} mt="70px">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
