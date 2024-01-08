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
import { Link } from "react-router-dom";
import Badge from "../../../components/badge";

const EventTables = () => {
  const head = ["event name", "tickets", "sold", "status", ""];
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
              <Td>
                <Badge status={"draft"} />
              </Td>
              <Td
                fontSize="14px"
                textTransform={"capitalize"}
                color={COLORS.primary}
              >
                <Link to="/manage/events/1">view</Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EventTables;
