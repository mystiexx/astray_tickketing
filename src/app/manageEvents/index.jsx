import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { AdminLayout } from "../../layout";
import Header from "../../components/header";
import EventTables from "./components/table";
import { COLORS } from "../../utils/colors";

const ManageEvents = () => {
  return (
    <AdminLayout>
      <Box py="50px">
        <Container maxW="container.xl">
          <Header title={"Events"} show={true} btnTitle={"create event"} />
          <Box>
            <EventTables />
          </Box>
        </Container>
      </Box>
    </AdminLayout>
  );
};

export default ManageEvents;
