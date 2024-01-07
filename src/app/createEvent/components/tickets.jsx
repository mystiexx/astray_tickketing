import React, { useState } from "react";
import { CreateEventCard } from "../../../components/card";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import AddTickets from "./addTickets";
import TicketTable from "./ticketTable";

const Tickets = ({ tickets, handleTickets, handleDelete }) => {
  const [open, setOpen] = useState(false);
  return (
    <CreateEventCard
      title={"event tickets"}
      show={tickets.length >= 1}
      btnTitle={"Add ticket"}
      btn={() => setOpen(true)}
    >
      <AddTickets
        isOpen={open}
        onClose={() => setOpen(!open)}
        handleTickets={handleTickets}
      />
      {tickets.length <= 0 ? (
        <Box display={"grid"} placeItems="center" h="10vh">
          <Box>
            <Text
              color={COLORS.secondary}
              fontSize={12}
              mb="16px"
              textAlign={"center"}
            >
              No Tickets Yet!!
            </Text>
            <Center>
              <Button
                variant={"outline"}
                _hover={{ bg: COLORS.primary, color: COLORS.white }}
                onClick={() => setOpen(true)}
              >
                Add Ticket
              </Button>
            </Center>
          </Box>
        </Box>
      ) : (
        <Box>
          <TicketTable tickets={tickets} handleDelete={handleDelete} />
        </Box>
      )}
    </CreateEventCard>
  );
};

export default Tickets;
