import React from "react";
import { Box, Button, Center, Image } from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import logo from "../../assets/footer.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { SideBarRoutes } from "../../utils/enums";
import styles from "./styles.module.css";

const Sidebar = () => {
  return (
    <Box
      w={"250px"}
      bg={COLORS.bg_light}
      h="100vh"
      display={{ base: "none", md: "block" }}
      py="50px"
      px="16px"
    >
      <Center>
        <Image src={logo} h="25px" objectFit={"contain"} />
      </Center>

      <Box pt="50px">
        <Box display={"flex"} flexDir={"column"} gap="16px">
          {SideBarRoutes.map((data, idx) => (
            <NavLink
              key={idx}
              to={data.path}
              className={({ isActive }) =>
                isActive ? styles.nav_active : styles.nav
              }
            >
              {data?.icon}
              {data.name}
            </NavLink>
          ))}
        </Box>
      </Box>

      <Box position={"fixed"} bottom={2}>
        <Center>
          <Link to="/">
            <Button
              w="full"
              _hover={{ bg: "transparent" }}
              leftIcon={<IoMdArrowRoundBack size={20} />}
              alignItems={"center"}
              display={"flex"}
              variant={"unstyled"}
              fontSize={14}
            >
              Back to home
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default Sidebar;
