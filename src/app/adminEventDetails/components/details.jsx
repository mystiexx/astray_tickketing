import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import Badge from "../../../components/badge";

const Details = () => {
  return (
    <Box border={`0.5px solid ${COLORS.gray}`} p="16px" borderRadius={"6px"}>
      <Box mb="24px">
        <Badge status={"draft"} />
      </Box>
      <Flex flexDir={{ base: "column", md: "row" }} gap="20px">
        <Box>
          <Image
            src="https://img.freepik.com/premium-psd/night-club-party-event-flyer-social-media-post-template_272871-267.jpg?w=2000"
            objectFit={"cover"}
            borderRadius={"6px"}
            h="400px"
          />
        </Box>

        <Box>
          <Box>
            <Text fontWeight={600} mb="2px">
              Event Name
            </Text>
            <Text textTransform={"capitalize"}>Spotlight Concert</Text>
            <Text fontWeight={600} mb="2px" mt="24px">
              Event Description
            </Text>
            <Text>awesome amapiano concert for everyone</Text>
          </Box>

          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            gap="24px"
            mt="24px"
          >
            <Box>
              <Text fontWeight={600} mb="2px">
                Country
              </Text>
              <Text textTransform={"capitalize"}>Nigeria</Text>
            </Box>
            <Box>
              <Text fontWeight={600} mb="2px">
                State
              </Text>
              <Text textTransform={"capitalize"}>Bayelsa</Text>
            </Box>
          </Box>
          <Box mt="24px">
            <Text fontWeight={600} mb="2px">
              Address
            </Text>
            <Text textTransform={"capitalize"}>Drive thru</Text>
          </Box>
          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            gap="24px"
            mt="24px"
          >
            <Box>
              <Text fontWeight={600} mb="2px">
                Event Start Date
              </Text>
              <Text textTransform={"capitalize"}>Nigeria</Text>
            </Box>
            <Box>
              <Text fontWeight={600} mb="2px">
                Event End Date
              </Text>
              <Text textTransform={"capitalize"}>Bayelsa</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Details;
