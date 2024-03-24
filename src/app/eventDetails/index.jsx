import React, { useEffect, useState, useRef } from "react";
import Layout from "../../layout";
import {
  Container,
  Image,
  Box,
  Text,
  Spinner,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import AvailableTickets from "./components/availableTickets";
import Checkout from "./components/checkout";
import { Link, useParams } from "react-router-dom";
import api from "../../services/dataService";
import { COLORS } from "../../utils/colors";
import moment from "moment";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PaystackButton } from "react-paystack";

const config = {
  email: "",
  amount: 0,
  publicKey: import.meta.env.VITE_APP_PAYSTACK_TEST_KEY,
  reference: "",
};

const EventDetails = () => {
  const [ticket, setTicket] = useState({});
  const [total, setTotal] = useState(0);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const paystackRef = useRef();

  useEffect(() => {
    const getEvent = async () => {
      try {
        setLoading(true);
        const request = await api.get(`/api/event?id=${params.id}`);
        const res = request.data;
        const response = res.data;

        setDetails(response.events[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getEvent();
  }, [params]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const onRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", onRouteChange);

    return () => {
      window.removeEventListener("popstate", onRouteChange);
    };
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleQuantityValue = (doc) => {
    setQuantity(doc);
  };

  const handleSelect = (doc) => {
    setTicket(doc);
    setTotal(doc.price);
    setShow(!show);
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
      }
    }
  };

  const handleSubmit = () => {
    let data = {
      email: email,
      quantity: quantity,
      event: params.id,
      ticket: ticket,
      total: total || 0,
    };
    console.log(data);
  };

  
  const getReference = async () => {
    try {
      let doc = {
        email: email,
        amount: total,
      };
      const request = await api.post(`/api/order/reference`, doc);
      const res = request.data;
      const response = res.data;
      config.email = doc.email;
      config.reference = response.ref;
      config.amount = total * 100;
      handlePaystackRef();
    } catch (error) {
      console.log(error);
    }
  };

  const componentProps = {
    ...config,
    text: "Pay now",
    onSuccess: () => {
      handleSubmit();
    },
    onClose: () => console.log("closed"),
  };

  const handlePaystackRef = () => {
    paystackRef?.current?.click();
  };

  return (
    <Layout>
      {loading ? (
        <Box h="100vh" display={"grid"} placeItems={"center"}>
          <Spinner size={"xl"} color={COLORS.primary} />
        </Box>
      ) : (
        <>
          <Box display={"none"} ref={paystackRef}>
            <PaystackButton {...componentProps} />
          </Box>
          <Container maxW="container.xl" py="70px">
            <Box pb="24px">
              <Link to="/events">
                <Button
                  bg="none"
                  leftIcon={<FaArrowLeftLong />}
                  _hover={{
                    color: COLORS.primary,
                    bg: "none",
                  }}
                >
                  Back to events
                </Button>
              </Link>
            </Box>
            <Grid
              templateColumns={{ base: "auto", md: "repeat(2, 1fr)" }}
              gap="40px"
            >
              <GridItem>
                <Image
                  src={details?.image}
                  h="70vh"
                  w="full"
                  objectFit={"cover"}
                  borderRadius={"10px"}
                />
              </GridItem>

              <GridItem>
                <Text
                  fontSize={{ base: 30, md: 40 }}
                  fontWeight={700}
                  textTransform={"capitalize"}
                >
                  {details?.name}
                </Text>
                <Text fontSize={14} fontWeight={500}>
                  {moment(details?.startDate).format("LL, hh:mm a")}
                </Text>

                <Box mt="24px">
                  <Text fontSize={20} fontWeight={600}>
                    Location
                  </Text>
                  <Text fontSize={14} fontWeight={500}>
                    {details?.country} {details?.state} - {details?.address}
                  </Text>
                </Box>

                <Box mt="24px">
                  <Text fontSize={20} fontWeight={600}>
                    Description
                  </Text>
                  <Text fontSize={14} fontWeight={500}>
                    {details?.description}
                  </Text>
                </Box>

                <AvailableTickets
                  tickets={details?.tickets}
                  handleSelect={handleSelect}
                />
              </GridItem>
            </Grid>

            <Checkout
              ticket={ticket}
              handleQuantity={handleQuantity}
              total={total}
              isOpen={show}
              close={() => setShow(!show)}
              handleSubmit={handleSubmit}
              getReference={getReference}
              handleEmail={handleEmail}
              handleQuantityValue={handleQuantityValue}
            />
          </Container>
        </>
      )}
    </Layout>
  );
};

export default EventDetails;
