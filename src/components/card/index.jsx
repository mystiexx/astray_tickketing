import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { COLORS } from "../../utils/colors";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const EventCard = () => {
  return (
    <Link to={`/events/${1}`}>
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
    </Link>
  );
};

export const CreateEventCard = ({ title, children, show, btn, btnTitle }) => {
  return (
    <Box borderRadius={"10px"} border={`0.5px solid ${COLORS.gray}`}>
      <Box
        p="16px"
        borderBottom={`0.5px solid ${COLORS.gray}`}
        textTransform={"capitalize"}
        fontWeight={600}
        color={COLORS.main}
        fontSize={"16px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>{title}</Box>
        {show && (
          <Button _hover={{ bg: COLORS.dark }} onClick={btn}>
            {btnTitle}
          </Button>
        )}
      </Box>
      <Box p="16px">{children}</Box>
    </Box>
  );
};

export const ProfileCard = ({ title, children }) => {
  return (
    <Box borderRadius={"10px"} border={`0.5px solid ${COLORS.gray}`}>
      <Box
        p="16px"
        borderBottom={`0.5px solid ${COLORS.gray}`}
        textTransform={"capitalize"}
        fontWeight={600}
        color={COLORS.main}
        fontSize={"16px"}
      >
        {title}
      </Box>
      <Box p="16px">{children}</Box>
    </Box>
  );
};
