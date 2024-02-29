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

const TableCard = () => {
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
            {[...new Array(3)].map((_, idx) => (
              <Tr key={idx} borderBottom={`1px solid ${COLORS.bg}`}>
                <Td fontSize="14px" textTransform={"capitalize"} border="none">
                  regular
                </Td>
                <Td fontSize="14px" textTransform={"capitalize"} border="none">
                  500
                </Td>
                <Td fontSize="14px" textTransform={"capitalize"} border="none">
                  200
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
