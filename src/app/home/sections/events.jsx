import React from "react";
import { EventCard } from "../../../components/card";
import { Container, Grid, GridItem, Text, Box, Button } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";

const Events = () => {
  return (
    <Container maxW="container.xl">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="24px"
      >
        <Text fontSize={30} color={COLORS.main} fontWeight={700}>
          Events
        </Text>
        <Button
          variant={"unstyled"}
          _hover={{ bg: "transparent", cursor: "pointer" }}
          alignItems="center"
          fontSize={16}
        >
          More
        </Button>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr",
        }}
        gap="24px"
      >
        {[...new Array(8)].map((_, idx) => (
          <GridItem key={idx + 1}>
            <EventCard />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Events;
