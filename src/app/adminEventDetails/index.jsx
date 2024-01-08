import React from "react";
import { AdminLayout } from "../../layout";
import { Box, Container } from "@chakra-ui/react";
import Details from "./components/details";
import Header from "./components/header";
import TableCard from "./components/table";

const AdminEventDetail = () => {
  return (
    <AdminLayout>
      <Box py="50px">
        <Container maxW="container.xl">
          <Header />
          <Box display="flex" flexDir="column" gap="24px">
            <Details />
            <TableCard />
          </Box>
        </Container>
      </Box>
    </AdminLayout>
  );
};

export default AdminEventDetail;
