import React from "react";
import { Box, Button, Center, Container, Input, Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { COLORS } from "../../../utils/colors";

const Hero = () => {
  return (
    <Box h="90vh" display="grid" placeItems={"center"}>
      <Container maxW={"container.xl"}>
        <Text
          textAlign="center"
          fontSize={{ base: "30px", md: "90px" }}
          fontWeight={700}
        >
          Welcome to Astray
        </Text>
        <Text
          textAlign="center"
          color="#b4b4b4"
          fontSize={{ base: 12, md: 18 }}
        >
          Get event tickets more easily with astray
        </Text>

        <Center>
          <Box
            display="flex"
            alignItems={"center"}
            mt="24px"
            p="10px"
            gap="10px"
            width={{ base: "100%", md: "100%", lg: "500px" }}
            borderRadius={"6px"}
            bg={COLORS.bg_light}
          >
            <Input
              type="text"
              placeholder="Search"
              border="none"
              focusBorderColor="transparent"
            />
            <Button
              leftIcon={<CiSearch size={16} />}
              _hover={{
                bg: "#781DBC",
              }}
            >
              Search
            </Button>
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default Hero;
