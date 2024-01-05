import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { COLORS } from "../../utils/colors";
import { IoLocationOutline } from "react-icons/io5";

export const EventCard = () => {
  return (
    <Box position={"relative"}>
      <Box position="relative">
        <Box position="absolute" left={2} top={2}>
          <Box border="1px solid red">help</Box>
        </Box>
        <Image
          src="https://img.freepik.com/premium-psd/night-club-party-event-flyer-social-media-post-template_272871-267.jpg?w=2000"
          objectFit={"cover"}
          borderRadius={"6px"}
        />
      </Box>

      <Text
        color={COLORS.main}
        fontSize={20}
        fontWeight={600}
        mt="5px"
        textTransform={"uppercase"}
      >
        party with the big boys
      </Text>

      <Box mt="10px" display="flex" flexDir="column" gap="5px">
        <Box display="flex" alignItems="center" gap="5px" fontSize={14}>
          <CiCalendar />
          <Text>18 Feb, 2024</Text>
          <Text>18:00</Text>
        </Box>

        <Box display="flex" alignItems="center" gap="5px" fontSize={14}>
          <IoLocationOutline size={20} />
          <Text noOfLines={1}>
            Mera Mera Lagos - Beach House, Water Corporation Drive, Lagos,
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
