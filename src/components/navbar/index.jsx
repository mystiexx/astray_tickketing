import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { COLORS } from "../../utils/colors";
import { navRoutes } from "../../utils/enums";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <Box
      p="16px"
      position={"fixed"}
      top={0}
      w="100%"
      zIndex={5}
      background={"#FEFEFF"}
    >
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

        <Box
          display={{ md: "none", lg: "flex", base: "none" }}
          gap="10px"
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button _hover={{ bg: "#781DBC" }}>Sign In</Button>

          <Button variant={"outline"}>Sign Up</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
