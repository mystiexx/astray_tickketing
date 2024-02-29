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
        <Thead bg={COLORS.bg_light}>
          <Tr>
            {head.map((data, idx) => (
              <Th
                key={idx}
                textTransform={"capitalize"}
                color="#fff"
                border="none"
              >
                {data}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {[...new Array(8)].map((_, idx) => (
            <Tr key={idx} borderBottom={`1px solid ${COLORS.bg_light}`}>
              <Td fontSize="14px" textTransform={"capitalize"} border="none">
                spotlight concert
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"} border="none">
                500
              </Td>
              <Td fontSize="14px" textTransform={"capitalize"} border="none">
                200
              </Td>
              <Td border="none">
                <Badge status={"draft"} />
              </Td>
              <Td
                fontSize="14px"
                textTransform={"capitalize"}
                color={COLORS.primary}
                border="none"
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
