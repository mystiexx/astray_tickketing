import React from "react";
import { COLORS } from "../../../utils/colors";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";

const TableCard = ({ eventData }) => {
  const head = ["ticket", "quantity", "sold", ""];

  return (
    <Box borderRadius={"6px"} p="16px" bg={COLORS.bg_light}>
      <TableContainer overflowX={"auto"} maxWidth={"100%"}>
        <Table>
          <Thead>
            <Tr>
              {head.map((data, idx) => (
                <Th
                  key={idx}
                  textTransform={"capitalize"}
                  color={"#fff"}
                  border="none"
                >
                  {data}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {eventData?.tickets?.map((event, idx) => (
              <Tr key={idx} borderBottom={`1px solid ${COLORS.bg}`}>
                <Td fontSize="14px" textTransform={"capitalize"} border="none">
                 {event.name}
                </Td>
                <Td fontSize="14px" textTransform={"capitalize"} border="none">
                  {event.quantity}
                </Td>
                <Td fontSize="14px" textTransform={"capitalize"} border="none">
                  {event.sold}
                </Td>

                <Td
                  fontSize="14px"
                  textTransform={"capitalize"}
                  color={COLORS.primary}
                  border="none"
                >
                  mark as sold out
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCard;
