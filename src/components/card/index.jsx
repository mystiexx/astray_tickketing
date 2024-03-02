import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { COLORS } from "../../utils/colors";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import moment from "moment";

export const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`}>
      <Box position={"relative"} bg={COLORS.bg_light} borderRadius={"6px"}>
        <Box position="relative">
          <Image
            src={event.image}
            objectFit={"cover"}
            borderRadius={"6px"}
            height={'300px'}
            w='full'
          />
        </Box>

        <Text
          color={COLORS.white}
          fontSize={20}
          fontWeight={600}
          mt="5px"
          textTransform={"uppercase"}
          p="16px"
        >
          {event.name}
        </Text>

        <Box display="flex" flexDir="column" gap="5px" p="16px">
          <Box display="flex" alignItems="center" gap="5px" fontSize={14}>
            <CiCalendar />
            <Text>{moment(event.startDate).format('LL')}</Text>
            <Text>{moment(event.startDate).format('hh:mm')}</Text>
          </Box>

          <Box display="flex" alignItems="center" gap="5px" fontSize={14}>
            <IoLocationOutline size={20} />
            <Text noOfLines={1}>
              {event.country} {event.state} - {event.address}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export const CreateEventCard = ({ title, children, show, btn, btnTitle }) => {
  return (
    <Box borderRadius={"10px"} bg={COLORS.bg_light}>
      <Box
        p="16px"
        borderBottom={`0.5px solid ${COLORS.bg}`}
        textTransform={"capitalize"}
        fontWeight={600}
        color={COLORS.white}
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
    <Box borderRadius={"10px"} bg={COLORS.bg_light}>
      <Box
        p="16px"
        borderBottom={`0.5px solid ${COLORS.bg}`}
        textTransform={"capitalize"}
        fontWeight={600}
        color={COLORS.white}
        fontSize={"16px"}
      >
        {title}
      </Box>
      <Box p="16px">{children}</Box>
    </Box>
  );
};
