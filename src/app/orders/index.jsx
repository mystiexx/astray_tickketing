import React from "react";
import { AdminLayout } from "../../layout";
import Header from "../../components/header";
import { Container, Box } from "@chakra-ui/react";
import OrdersTable from "./components/table";
import { COLORS } from "../../utils/colors";

const Orders = () => {
  return (
    <AdminLayout>
      <Container maxW="container.xl" py="50px">
        <Header title={"orders"} isExport={true} />
        <Box borderRadius={"6px"}>
          <OrdersTable />
        </Box>
      </Container>
    </AdminLayout>
  );
};

export default Orders;
