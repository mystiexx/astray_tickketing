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
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { LuMoreVertical } from "react-icons/lu";
import { COLORS } from "../../../utils/colors";

const TicketTable = ({ tickets, handleDelete }) => {
  return (
    <TableContainer overflowX={"auto"} maxWidth={"100%"}>
      <Table>
        <Thead>
          <Tr>
            <Th textTransform={"capitalize"}>Ticket</Th>
            <Th textTransform={"capitalize"}>Quantity</Th>
            <Th textTransform={"capitalize"}>sold</Th>
            <Th textTransform={"capitalize"}>Price</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {tickets.map((ticket, idx) => (
            <Tr key={idx}>
              <Td fontSize={14} textTransform={"capitalize"}>
                {ticket.name}
              </Td>
              <Td fontSize={14} textTransform={"capitalize"}>
                {commaNumber(ticket.quantity)}
              </Td>
              <Td fontSize={14} textTransform={"capitalize"}>
                {ticket.sold}
              </Td>
              <Td fontSize={14} textTransform={"capitalize"}>
                {!ticket.price ? "Free" : commaNumber(ticket.price)}
              </Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={Button}
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                  >
                    <LuMoreVertical color={COLORS.black} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem color="red" onClick={() => handleDelete(ticket)}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TicketTable;
