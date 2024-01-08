import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { Container, Image, Box, Text } from "@chakra-ui/react";
import AvailableTickets from "./components/availableTickets";
import Checkout from "./components/checkout";

const EventDetails = () => {
  const [ticket, setTicket] = useState({});
  const [total, setTotal] = useState(0);

  const handleSelect = (doc) => {
    setTicket(doc);
    setTotal(doc.price);
  };

  const handleQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    if (!isNaN(newQuantity)) {
      const subTotal = ticket.price;
      const result = subTotal * newQuantity;
      if (!newQuantity) {
        setTotal(ticket.price);
      } else {
        setTotal(result);
        console.log(result);
      }
      // setTotal((prevTotal) => prevTotal * newQuantity);
    }
  };
  return (
    <Layout>
      <Image
        src={
          "https://img.freepik.com/premium-psd/night-club-party-event-flyer-social-media-post-template_272871-267.jpg?w=2000"
        }
        h="70vh"
        w="full"
        objectFit={"cover"}
      />
      <Container maxW="container.xl" py="40px">
        <Text fontSize={40} fontWeight={700}>
          Spotlight Concert
        </Text>
        <Text fontSize={14} fontWeight={500}>
          Aug 21, 2025 1:00 PM
        </Text>

        <Box mt="24px">
          <Text fontSize={20} fontWeight={600}>
            Description
          </Text>
          <Text fontSize={14} fontWeight={500}>
            Description
          </Text>
        </Box>

        <Box mt="24px">
          <Text fontSize={20} fontWeight={600}>
            Venue
          </Text>
          <Text fontSize={14} fontWeight={500}>
            Description
          </Text>
        </Box>

        <AvailableTickets handleSelect={handleSelect} />

        {Object.keys(ticket).length >= 1 && (
          <Checkout
            ticket={ticket}
            handleQuantity={handleQuantity}
            total={total}
          />
        )}
      </Container>
    </Layout>
  );
};

export default EventDetails;
