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
import { COLORS } from "../../../utils/colors";

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
        <Thead bg={COLORS.bg_light}>
          <Tr>
            {head.map((data, idx) => (
              <Th
                key={idx}
                textTransform={"capitalize"}
                color={"#fff"}
                border={"none"}
              >
                {data}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {[...new Array(8)].map((_, idx) => (
            <Tr key={idx} borderBottom={`1px solid ${COLORS.bg_light}`}>
              <Td fontSize="14px" textTransform={"capitalize"} border={"none"}>
                020390029
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"} border={"none"}>
                regular
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"} border={"none"}>
                {commaNumber(2000)}
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"} border={"none"}>
                spotlight concert
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"} border={"none"}>
                roland enola
              </Td>
              <Td fontSize="14px" border={"none"}>
                roland@email.com
              </Td>
              <Td fontSize="14px" border={"none"}>
                070596064878
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
