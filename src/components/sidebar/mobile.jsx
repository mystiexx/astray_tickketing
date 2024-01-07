import React, { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png";
import SideModal from "../sideModal";
import { SideBarRoutes } from "../../utils/enums";
import { NavLink, Link } from "react-router-dom";
import styles from "./styles.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      display={{ base: "block", md: "none" }}
      p="16px"
      borderBottom={`1px solid ${COLORS.gray}`}
    >
      <SideModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <Box py="50px" display={"flex"} flexDir={"column"} gap="16px" px="16px">
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
        <Box position={"fixed"} bottom={2} px="16px">
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
      </SideModal>
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
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
      </Container>
    </Box>
  );
};

export default Mobile;
