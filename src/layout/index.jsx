import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Mobile from "../components/sidebar/mobile";

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

export const AdminLayout = ({ children }) => {
  return (
    <Box
      display={"flex"}
      overflowY={"hidden"}
      flexDir={{ base: "column", md: "row" }}
    >
      <Mobile />
      <Sidebar />
      <Box
        h="100vh"
        overflowY={"scroll"}
        px={{ base: "auto", md: "50px" }}
        w="full"
        maxW={"100%"}
      >
        {children}
      </Box>
    </Box>
  );
};
