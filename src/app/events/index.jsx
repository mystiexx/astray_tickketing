import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Input,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { EventCard } from "../../components/card";
import { COLORS } from "../../utils/colors";
import toast from "react-hot-toast";
import api from "../../services/dataService";
import EmptyPage from "../../components/emptyPage";
import { MdOutlineEventBusy } from "react-icons/md";
import Pagination from "../../components/pagination";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const limit = 10;
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        const request = await api.get(
          `/api/event?page=${page}&limit=${limit}&name=${search}`
        );
        const res = request.data;
        const response = res.data;
        setEvents(response.events);
        const pageCount = Math.ceil(response.total / response.limit);
        setPageCount(pageCount);
        setLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.message);
        setLoading(false);
      }
    };
    getEvents();
  }, [page, limit, search]);

  const handleSearch = (e) => {
    const handler = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  };

  const handlePageChange = (data) => {
    setPage(data.selected + 1);
    setSelected(data.selected);
  };

  return (
    <Layout>
      <Container maxW="container.xl" py="100px">
        <Box>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={{ base: "none", md: "center" }}
            mb="80px"
            gap="24px"
            flexDir={{ base: "column", md: "row" }}
          >
            <Text fontSize={24} fontWeight={700}>
              Events
            </Text>

            <Box
              display="flex"
              alignItems={{ base: "none", md: "center" }}
              flexDir={{ base: "column", md: "row" }}
            >
              <Input
                type="text"
                placeholder="Search"
                focusBorderColor={COLORS.primary}
                w={{ base: "100%", md: "400px" }}
                border={"none"}
                bg={COLORS.bg_light}
                onChange={handleSearch}
              />
            </Box>
          </Box>
          {loading ? (
            <Box h="50vh" display={"grid"} placeItems={"center"}>
              <Spinner size={"xl"} color={COLORS.primary} />
            </Box>
          ) : (
            <>
              {events.length <= 0 ? (
                <EmptyPage
                  title={"No Event"}
                  icon={<MdOutlineEventBusy color={"#BFBEC2"} size={100} />}
                  sub={"No event has been added at the moment."}
                />
              ) : (
                <Box>
                  <Grid
                    templateColumns={{ base: "auto", md: "repeat(4,1fr)" }}
                    gap={{ base: "24px", md: "24px" }}
                  >
                    {events.map((event, idx) => (
                      <GridItem key={idx + 1}>
                        <EventCard event={event} />
                      </GridItem>
                    ))}
                  </Grid>

                  <Box mt="40px">
                    <Pagination
                      pageCount={pageCount}
                      handlePageChange={handlePageChange}
                      selected={selected}
                      page={page}
                    />
                  </Box>
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default Events;
