import React from "react";
import { Box, Button, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import commaNumber from "comma-number";
import { COLORS } from "../../../utils/colors";

const AvailableTickets = ({ handleSelect }) => {
  const tickets = [
    {
      name: "regular",
      price: 2000,
    },
    {
      name: "vip",
      price: 35000,
    },
    {
      name: "platinum",
      price: 10000,
    },
  ];
  return (
    <Box mt="40px">
      <Text textAlign={"center"} fontSize={30} fontWeight={700}>
        Tickets
      </Text>
      <Grid
        templateColumns={{ base: "auto", md: "repeat(3,1fr)" }}
        gap="24px"
        mt="30px"
      >
        {tickets.map((data, idx) => (
          <GridItem key={idx}>
            <Box>
              <Text
                textAlign={"center"}
                fontSize={20}
                textTransform={"capitalize"}
                fontWeight={600}
                mb="7px"
              >
                {data.name}
              </Text>
              <Text textAlign={"center"} mb="16px">
                {commaNumber(data.price)}
              </Text>
              <Center>
                <Button
                  _hover={{ bg: COLORS.dark }}
                  onClick={() => handleSelect(data)}
                >
                  Get Ticket
                </Button>
              </Center>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AvailableTickets;
