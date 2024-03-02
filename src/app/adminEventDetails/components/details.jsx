import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import Badge from "../../../components/badge";
import moment from "moment";

const Details = ({ event }) => {
  return (
    <Box bg={COLORS.bg_light} p="16px" borderRadius={"6px"}>
      <Box mb="24px">
        <Badge status={event?.status} />
      </Box>
      <Flex flexDir={{ base: "column", md: "row" }} gap="20px">
        <Box>
          <Image
            src={event?.image}
            objectFit={"cover"}
            borderRadius={"6px"}
            h="400px"
          />
        </Box>

        <Box>
          <Box>
            <Text fontWeight={600} mb="2px" textTransform={"capitalize"}>
              Event Name
            </Text>
            <Text textTransform={"capitalize"}>{event?.name}</Text>
            <Text fontWeight={600} mb="2px" mt="24px">
              Event Description
            </Text>
            <Text>{event?.description}</Text>
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
              <Text textTransform={"capitalize"}>{event?.country}</Text>
            </Box>
            <Box>
              <Text fontWeight={600} mb="2px">
                State
              </Text>
              <Text textTransform={"capitalize"}>{event?.state}</Text>
            </Box>
          </Box>
          <Box mt="24px">
            <Text fontWeight={600} mb="2px">
              Address
            </Text>
            <Text textTransform={"capitalize"}>{event?.address}</Text>
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
              <Text textTransform={"capitalize"}>{moment(event?.startDate).format('LL, h:mm')}</Text>
            </Box>
            <Box>
              <Text fontWeight={600} mb="2px">
                Event End Date
              </Text>
              <Text textTransform={"capitalize"}>{moment(event?.endDate).format('LL, h:mm')}</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Details;
