import React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import logo from "../../assets/footer.png";
import { footerRoutes } from "../../utils/enums";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <Box mt="50px" position={"relative"} bottom={0} bg={COLORS.black} p="16px">
      <Container maxW="container.xl">
        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row", lg: "row" }}
          gap={10}
          justifyContent={"space-between"}
          alignItems={{ base: "none", md: "center", lg: "center" }}
        >
          <Image
            src={logo}
            h={{ base: "30px", md: "30px" }}
            objectFit={"contain"}
          />

          <Box display={"flex"} flexDir={{ base: "column", md: "row" }} gap={5}>
            {footerRoutes.map((route, idx) => (
              <NavLink
                key={idx}
                to={route.path}
                className={({ isActive }) =>
                  isActive ? styles.nav_active : styles.nav
                }
              >
                <Text>{route.name}</Text>
              </NavLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
