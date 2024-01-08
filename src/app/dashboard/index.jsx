import React from "react";
import { AdminLayout } from "../../layout";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Summary from "./components/summary";
import { COLORS } from "../../utils/colors";

const Dashboard = () => {
  const summary = [
    {
      name: "Total Revenue",
      value: 500000,
    },
    {
      name: "Total Events",
      value: 10,
    },
    {
      name: "Total Tickets",
      value: 300,
    },
    {
      name: "Tickets Sold",
      value: 200,
    },
  ];
  return (
    <AdminLayout>
      <Container maxW="container.xl" py="50px">
        <Box mb="40px">
          <Text fontSize={25} fontWeight={700}>
            Welcome Roland
          </Text>
          <Text fontSize={12} color={COLORS.grey}>
            Here are your summaries for you
          </Text>
        </Box>
        <Grid
          templateColumns={{ base: "auto", md: "repeat(4,1fr)" }}
          gap="24px"
        >
          {summary.map((data, idx) => (
            <GridItem key={idx}>
              <Summary summary={data} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
