import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../layout";
import { Box, Container, Spinner } from "@chakra-ui/react";
import Details from "./components/details";
import Header from "./components/header";
import TableCard from "./components/table";
import { useParams } from "react-router-dom";
import api from "../../services/dataService";
import toast from "react-hot-toast";
import { COLORS } from "../../utils/colors";

const AdminEventDetail = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState({});

  useEffect(() => {
    const getEvent = async () => {
      try {
        setLoading(true);
        const request = await api.get(`/api/auth/event?id=${params.id}`);
        const res = request.data;
        const response = res.data;
        setEvent(response.events[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        setLoading(false);
      }
    };

    getEvent();
  }, [params]);

  return (
    <AdminLayout>
      <Box py="50px">
        <Container maxW="container.xl">
          {loading ? (
            <Box h="80vh" display={"grid"} placeItems={"center"}>
              <Spinner size={"xl"} color={COLORS.primary} />
            </Box>
          ) : (
            <>
              <Header />
              <Box display="flex" flexDir="column" gap="24px">
                <Details event={event} />
                <TableCard eventData={event} />
              </Box>
            </>
          )}
        </Container>
      </Box>
    </AdminLayout>
  );
};

export default AdminEventDetail;
