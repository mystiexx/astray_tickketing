import React from "react";
import { Box, Button, Center, Container, Text } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";

const CreateEvent = () => {
  return (
    <Box
      bg="#f4f4f4"
      p="16px"
      mt="200px"
      h={{ base: "30vh", md: "30vh", lg: "30vh" }}
      display="grid"
      placeItems={"center"}
    >
      <Container>
        <Text
          textAlign={"center"}
          mb="24px"
          color={COLORS.main}
          fontWeight={700}
          fontSize={{ base: "20px", md: "40px", lg: "40px" }}
        >
          Organize your own Event
        </Text>
        <Center>
          <Button _hover={{ bg: "#781DBC" }}>Create Event</Button>
        </Center>
      </Container>
    </Box>
  );
};

export default CreateEvent;
