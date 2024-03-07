import React from "react";
import { Box, Button, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import commaNumber from "comma-number";
import { COLORS } from "../../../utils/colors";

const AvailableTickets = ({ handleSelect, tickets }) => {
  return (
    <Box mt="40px">
      <Text fontSize={20} fontWeight={700}>
        Tickets
      </Text>
      <Text fontSize={12} fontWeight={500}>
        Click on the ticket you want to purchase
      </Text>
      <Grid
        templateColumns={{ base: "auto", md: "repeat(3,1fr)" }}
        gap="24px"
        mt="24px"
      >
        {tickets?.map((data, idx) => (
          <GridItem key={idx}>
            <Box
              bg={COLORS.bg_light}
              onClick={() => handleSelect(data)}
              cursor={"pointer"}
              p="4px"
              borderRadius={"6px"}
              _hover={{
                bg: COLORS.primary,
              }}
            >
              <Text
                textAlign={"center"}
                fontSize={20}
                textTransform={"capitalize"}
                fontWeight={600}
                mb="7px"
              >
                {data.name}
              </Text>
              <Text textAlign={"center"} mb="16px" textTransform={"capitalize"}>
                {data.price === 0 && "free"}
                {data.price != 0 && `N${commaNumber(data.price)}`}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AvailableTickets;
