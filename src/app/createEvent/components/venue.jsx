import React, { useEffect, useState } from "react";
import { CreateEventCard } from "../../../components/card";
import {
  Box,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
  Select,
  Input,
} from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import { Country, State } from "country-state-city";

const Venue = ({ handleChange, setFieldValue, setCountry }) => {
  const countries = Country.getAllCountries();
  const [stateCode, setStateCode] = useState("");
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (stateCode !== "") {
      const states = State.getStatesOfCountry(stateCode);
      setStates(states);
    }
  }, [stateCode]);

  const handleCountry = (e) => {
    let data = JSON.parse(e.target.value);
    setCountry(data.name);
    setStateCode(data.isoCode);
  };
  return (
    <CreateEventCard title={"event venue"}>
      <Box display={"flex"} flexDir="column" gap="16px">
        <Grid
          templateColumns={{ base: "auto", md: "repeat(2, 1fr)" }}
          gap="16px"
        >
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize={12}>Country</FormLabel>
              <Select
                focusBorderColor={COLORS.primary}
                onChange={handleCountry}
              >
                <option>Select Country</option>
                {countries.map((data) => (
                  <option key={data.isoCode} value={JSON.stringify(data)}>
                    {data.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize={12}>State</FormLabel>
              <Select
                focusBorderColor={COLORS.primary}
                onChange={handleChange}
                name="state"
              >
                <option>Select State</option>
                {states.map((data) => (
                  <option key={data.isoCode} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
        </Grid>

        <FormControl isRequired>
          <FormLabel fontSize={12}>Street Address</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Street Address"
            focusBorderColor={COLORS.primary}
            onChange={handleChange}
          />
        </FormControl>

        <Grid
          templateColumns={{ base: "auto", md: "repeat(2, 1fr)" }}
          gap="16px"
        >
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize={12}>Event Start Date</FormLabel>
              <Input
                type="datetime-local"
                name="startDate"
                focusBorderColor={COLORS.primary}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel fontSize={12}>Event End Date</FormLabel>
              <Input
                type="datetime-local"
                name="endDate"
                focusBorderColor={COLORS.primary}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
        </Grid>
      </Box>
    </CreateEventCard>
  );
};

export default Venue;
