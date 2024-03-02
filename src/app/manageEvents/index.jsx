import React, { useEffect, useState } from "react";
import { Box, Container, Spinner } from "@chakra-ui/react";
import { AdminLayout } from "../../layout";
import Header from "../../components/header";
import EventTables from "./components/table";
import api from "../../services/dataService";
import toast from "react-hot-toast";
import { COLORS } from "../../utils/colors";
import Pagination from "../../components/pagination";
import EmptyPage from "../../components/emptyPage";
import { MdOutlineEventBusy } from "react-icons/md";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [pageCount, setPageCount] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        let searchfilter = `name=${search}`;
        const request = await api.get(
          `/api/auth/event?page=${page}&limit=${limit}&${searchfilter}`
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
  }, [search, limit, page]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (data) => {
    setPage(data.selected + 1);
    setSelected(data.selected);
  };

  return (
    <AdminLayout>
      <Box py="50px">
        <Container maxW="container.xl">
          <Header
            handleSearch={handleSearch}
            title={"Events"}
            placeholder="Search by event name..."
            show={true}
            btnTitle={"create event"}
          />
          <Box>
            {loading ? (
              <Box h="50vh" display={"grid"} placeItems={"center"}>
                <Spinner size={"xl"} color={COLORS.primary} />
              </Box>
            ) : (
              <Box>
                {events.length <= 0 ? (
                  <EmptyPage
                    title={"no events"}
                    sub={
                      "You don’t have events added at the moment. You can add events."
                    }
                    icon={<MdOutlineEventBusy color={"#BFBEC2"} size={100} />}
                    btnText={"add event"}
                    btnLink={"/manage/events/create"}
                    showBtn={true}
                  />
                ) : (
                  <Box>
                    <EventTables events={events} />
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
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </AdminLayout>
  );
};

export default ManageEvents;
