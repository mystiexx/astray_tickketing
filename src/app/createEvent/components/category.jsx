import React from "react";
import { CreateEventCard } from "../../../components/card";
import { FormLabel, FormControl, Select } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";

const Category = ({ handleChange, categories }) => {
  return (
    <CreateEventCard title={"event category"}>
      <FormControl isRequired>
        <FormLabel fontSize={12}>Event Category</FormLabel>
        <Select
          focusBorderColor={COLORS.primary}
          onChange={handleChange}
          name="category"
          textTransform={"capitalize"}
          border={"none"}
          bg={COLORS.bg}
        >
          <option>Select Category</option>
          {categories.map((data, idx) => (
            <option key={idx} value={data.id}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </CreateEventCard>
  );
};

export default Category;
