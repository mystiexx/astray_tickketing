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
import { COLORS } from "../../../utils/colors";

const EventTables = () => {
  const head = ["event name", "tickets", "sold", ""];
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
                spotlight concert
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"}>
                500
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"}>
                200
              </Td>
              <Td
                fontSize="14px"
                textTransform={"capitalize"}
                color={COLORS.primary}
              >
                view
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EventTables;
