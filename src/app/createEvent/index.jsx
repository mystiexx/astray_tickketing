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
import { FileUpload } from "../../services/fileUpload";
import api from "../../services/dataService";

const CreateEvent = () => {
  const [country, setCountry] = useState("");
  const [tickets, setTickets] = useState([]);
  const [image, setImage] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const request = await api.get(`/api/event/category`);
        const res = request.data;
        const response = res.data;
        setCategories(response);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  let initialValues = {
    name: "",
    description: "",
    address: "",
    state: "",
    startDate: "",
    endDate: "",
  };

  const handleSubmit = async (doc) => {
    try {
      setLoading(true);
      if (!image.name) {
        return toast.error("Please Choose an Image!!!!");
      }
      if (tickets.length <= 0) {
        return toast.error("Please add a ticket!!");
      }
      const imageResponse = await FileUpload(image);
      let data = {
        ...doc,
        country: country,
        tickets,
        image: imageResponse,
      };
      const request = await api.post(`/api/auth/event`, data);
      const res = request.data;
      toast.success(`${res.message}: Event Added`);
      setTimeout(() => {
        window.location.href = '/manage/events'
      }, 1000)
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message)
      setLoading(false);
    }
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

  const handleImage = (e) => {
    setImage(e.target.files[0]);
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
                      <Images handleImage={handleImage} image={image} />
                      <Tickets
                        tickets={tickets}
                        handleTickets={handleTickets}
                        handleDelete={handleDelete}
                      />
                    </Box>
                  </Box>
                  <Box w={{ base: "auto", md: "368px" }}>
                    <Box display={"flex"} flexDir={"column"} gap="24px">
                      <Category
                        categories={categories}
                        handleChange={handleChange}
                      />

                      <Box p="16px" bg={COLORS.bg_light} borderRadius={"10px"}>
                        <Button
                          type="submit"
                          _hover={{ bg: COLORS.dark }}
                          w="full"
                          isLoading={loading}
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
