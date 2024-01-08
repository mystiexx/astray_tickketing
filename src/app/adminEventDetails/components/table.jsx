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
    <Box
      border={`0.5px solid ${COLORS.gray}`}
      p="16px"
      borderRadius={"6px"}
      bg={COLORS.white}
    >
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
            {[...new Array(3)].map((_, idx) => (
              <Tr key={idx}>
                <Td fontSize="14px" textTransform={"capitalize"}>
                  regular
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
