import React, { useState } from "react";
import { Box, Button, Container, IconButton, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { COLORS } from "../../utils/colors";
import { navRoutes } from "../../utils/enums";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import SideModal from "../sideModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = localStorage.getItem("astray-access-token")
  return (
    <Box
      p="16px"
      position={"fixed"}
      top={0}
      w="100%"
      zIndex={5}
      background={"#FEFEFF"}
    >
      <SideModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <Box py="50px" display={"flex"} flexDir={"column"} gap="16px" px="16px">
          {navRoutes.map((routes, idx) => (
            <NavLink
              key={idx}
              to={routes.path}
              className={({ isActive }) =>
                isActive ? styles.nav_active : styles.nav
              }
            >
              {routes.name}
            </NavLink>
          ))}
        </Box>

        <Box px="16px">
          <Link to="/manage/events/create">
            <Button w="full" _hover={{ bg: COLORS.dark }}>
              Create Event
            </Button>
          </Link>
        </Box>
      </SideModal>
      <Container
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW="container.xl"
      >
        <IconButton
          icon={<FiMenu color={COLORS.black} size={25} />}
          display={{ base: "grid", md: "none" }}
          placeItems="center"
          _hover={{ bg: "transparent" }}
          bg="transparent"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Image
          src={logo}
          alt="logo"
          h={{ base: "20px", md: "30px" }}
          objectFit={"contain"}
        />

        <Box display={{ md: "none", lg: "flex", base: "none" }} gap="10">
          {navRoutes.map((routes, idx) => (
            <NavLink
              key={idx}
              to={routes.path}
              className={({ isActive }) =>
                isActive ? styles.nav_active : styles.nav
              }
            >
              {routes.name}
            </NavLink>
          ))}
        </Box>

        {auth ? (
          <Box
            display={{ md: "none", lg: "flex", base: "none" }}
            gap="10px"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Link to="/manage/events/create">
              <Button _hover={{ bg: "#781DBC" }}>Create Event</Button>
            </Link>
          </Box>
        ) : (
          <Box
            display={{ md: "none", lg: "flex", base: "none" }}
            gap="10px"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Link to="/login">
              <Button _hover={{ bg: "#781DBC" }}>Sign In</Button>
            </Link>

            <Link to="/register">
              <Button
                variant={"outline"}
                _hover={{ bg: COLORS.primary, color: "white" }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
