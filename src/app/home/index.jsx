import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import Hero from "./sections/hero";
import Events from "./sections/events";
import api from "../../services/dataService";
import toast from "react-hot-toast";
import { Box, Spinner } from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import EmptyPage from "../../components/emptyPage";
import { MdOutlineEventBusy } from "react-icons/md";

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === "") {
      setSearchResult([]);
    }
  }, [search]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        const request = await api.get(`/api/event?page=1&limit=8`);
        const res = request.data;
        const response = res.data;
        setEvents(response.events);
        setLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.message);
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setSearching(true);
      const request = await api.get(
        `/api/event?page=1&limit=1000&name=${search}`
      );
      const res = request.data;
      const response = res.data;
      setSearchResult(response.events);
      setSearching(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      {loading ? (
        <Box h="100vh" display={"grid"} placeItems={"center"}>
          <Spinner size={"xl"} color={COLORS.primary} />
        </Box>
      ) : (
        <Layout>
          <Hero
            handleChange={handleChange}
            results={searchResult}
            handleSearch={handleSearch}
            loading={searching}
            search={search}
          />
          {events.length <= 0 ? (
            <EmptyPage
              title={"No Event"}
              icon={<MdOutlineEventBusy color={"#BFBEC2"} size={100} />}
              sub={"No event has been added at the moment."}
            />
          ) : (
            <Events events={events} />
          )}
        </Layout>
      )}
    </div>
  );
};

export default Home;
