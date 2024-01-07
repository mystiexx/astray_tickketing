import React from "react";
import Layout from "../../layout";
import { Box, Container, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import { EventCard } from "../../components/card";
import { COLORS } from "../../utils/colors";

const Events = () => {
  return (
    <Layout>
      <Container maxW="container.xl" py="100px">
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={{ base: "none", md: "center" }}
          mb="24px"
          flexDir={{ base: "column", md: "row" }}
        >
          <Text fontSize={24} fontWeight={700}>
            Events
          </Text>

          <Box
            display="flex"
            alignItems={{ base: "none", md: "center" }}
            flexDir={{ base: "column", md: "row" }}
          >
            <Input
              type="text"
              placeholder="Search"
              focusBorderColor={COLORS.primary}
              w={{ base: "100%", md: "400px" }}
            />
          </Box>
        </Box>

        <Grid
          templateColumns={{ base: "auto", md: "repeat(4,1fr)" }}
          gap={{ base: "24px", md: "50px" }}
        >
          {[...new Array(10)].map((_, idx) => (
            <GridItem key={idx + 1}>
              <EventCard />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Events;
