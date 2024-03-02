import React from "react";
import { CreateEventCard } from "../../../components/card";
import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";

const BasicInfo = ({ handleChange }) => {
  return (
    <CreateEventCard title={"basic"}>
      <Box display={"flex"} flexDir="column" gap="16px">
        <FormControl isRequired>
          <FormLabel fontSize={12}>Event Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Event Name"
            focusBorderColor={COLORS.primary}
            onChange={handleChange}
            bg={COLORS.bg}
            border="none"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={12}>Description</FormLabel>
          <Textarea
            type="text"
            name="description"
            placeholder="Description"
            focusBorderColor={COLORS.primary}
            onChange={handleChange}
            bg={COLORS.bg}
            border="none"
          />
        </FormControl>
      </Box>
    </CreateEventCard>
  );
};

export default BasicInfo;
