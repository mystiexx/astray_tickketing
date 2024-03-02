import React, { useState } from "react";
import { Box, Button, Container, IconButton, Image } from "@chakra-ui/react";
import logo from "../../assets/footer.png";
import { FiMenu } from "react-icons/fi";
import { COLORS } from "../../utils/colors";
import { navRoutes } from "../../utils/enums";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import SideModal from "../sideModal";
import { getWithExpiry } from "../../utils/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getWithExpiry("astray-access-token");
  return (
    <Box
      p="16px"
      position={"fixed"}
      top={0}
      w="100%"
      zIndex={5}
      background={COLORS.bg}
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
          {auth ? (
            <Link to="/manage/events/create">
              <Button w="full" _hover={{ bg: COLORS.dark }}>
                Create Event
              </Button>
            </Link>
          ) : (
            <Box display={"flex"} flexDir={"column"} gap="24px">
              <Link to="/login">
                <Button _hover={{ bg: "#781DBC" }} w="full">
                  Sign In
                </Button>
              </Link>

              <Link to="/register">
                <Button
                  border="none"
                  color={COLORS.white}
                  bg="none"
                  _hover={{ bg: COLORS.primary, color: "white" }}
                  w="full"
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </SideModal>
      <Container
        display="flex"
        justifyContent={"space-between"}
        alignItems={{ base: "center", md: "center" }}
        maxW="container.xl"
      >
        <Box
          onClick={() => setIsOpen(!isOpen)}
          display={{ base: "block", md: "none" }}
        >
          <FiMenu color={COLORS.white} size={25} />
        </Box>

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
