import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import commaNumber from "comma-number";

const OrdersTable = () => {
  const head = [
    "Booking ID",
    "ticket",
    "price",
    "event",
    "customer name",
    "customer email",
    "customer phone",
  ];
  return (
    <TableContainer overflowX={"auto"} maxWidth={"100%"}>
      <Table>
        <Thead bg="#F9F9F980">
          <Tr>
            {head.map((data, idx) => (
              <Th key={idx} textTransform={"capitalize"}>
                {data}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {[...new Array(8)].map((_, idx) => (
            <Tr key={idx}>
              <Td fontSize="14px" textTransform={"capitalize"}>
                020390029
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"}>
                regular
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"}>
                {commaNumber(2000)}
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"}>
                spotlight concert
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"}>
                roland enola
              </Td>
              <Td fontSize="14px">roland@email.com</Td>
              <Td fontSize="14px">070596064878</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
