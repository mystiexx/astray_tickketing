import React, { useEffect, useState } from "react";
import { Box, Button, Container, Flex, GridItem, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import BasicInfo from "./components/basicInfo";
import Venue from "./components/venue";
import Category from "./components/category";
import { COLORS } from "../../utils/colors";
import Tickets from "./components/tickets";
import toast from "react-hot-toast";
import Images from "./components/images";
import { AdminLayout } from "../../layout";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const CreateEvent = () => {
  const [country, setCountry] = useState("");
  const [tickets, setTickets] = useState([]);

  let initialValues = {
    eventName: "",
    description: "",
    address: "",
    state: "",
    startDate: "",
    endDate: "",
  };

  const handleSubmit = (doc) => {
    let data = {
      ...doc,
      country: country,
      tickets,
    };
    console.log(data);
  };

  const handleCountry = (doc) => {
    setCountry(doc);
  };

  const handleTickets = (doc) => {
    const isAvailable = tickets.some((data) => data.name === doc.name);

    if (isAvailable) {
      toast.error("Ticket Exist!!!!");
    } else {
      setTickets((prev) => [doc, ...prev]);
    }
  };

  const handleDelete = (doc) => {
    setTickets((prev) => prev.filter((ticket) => ticket.name !== doc.name));
  };

  return (
    <AdminLayout>
      <Container py="50px" maxW="container.xl">
        <Box display={"flex"} alignItems={"center"} mb="32px" gap="5px">
          <Link to="/manage/events">
            <Text color={COLORS.gray} fontSize={12}>
              Manage Events
            </Text>
          </Link>
          <MdKeyboardArrowLeft color={COLORS.gray} />
          <Text fontSize="24px" fontWeight={600}>
            Create Event
          </Text>
        </Box>

        <Box>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, setFieldValue }) => (
              <Form>
                <Flex flexDir={{ base: "column", md: "row" }} gap="50px">
                  <Box>
                    <Box display="flex" flexDir="column" gap="24px">
                      <BasicInfo handleChange={handleChange} />
                      <Venue
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                        setCountry={handleCountry}
                      />
                      <Images />
                      <Tickets
                        tickets={tickets}
                        handleTickets={handleTickets}
                        handleDelete={handleDelete}
                      />
                    </Box>
                  </Box>
                  <Box w={{ base: "auto", md: "368px" }}>
                    <Box display={"flex"} flexDir={"column"} gap="24px">
                      <Category handleChange={handleChange} />

                      <Box
                        p="16px"
                        border={`1px solid ${COLORS.gray}`}
                        borderRadius={"10px"}
                      >
                        <Button
                          type="submit"
                          _hover={{ bg: COLORS.dark }}
                          w="full"
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </AdminLayout>
  );
};

export default CreateEvent;
