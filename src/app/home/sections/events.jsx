import React from "react";
import { EventCard } from "../../../components/card";
import { Container, Grid, GridItem, Text, Box, Button } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <Container maxW="container.xl">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="50px"
      >
        <Text
          fontSize={{ base: 20, md: 40 }}
          color={COLORS.white}
          fontWeight={700}
        >
          Upcoming Events
        </Text>

        <Link to="/events">
          <Button
            variant={"unstyled"}
            _hover={{ bg: "transparent", cursor: "pointer" }}
            alignItems="center"
            fontSize={16}
          >
            More
          </Button>
        </Link>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr",
        }}
        gap={{ base: "24px", md: "50px" }}
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
