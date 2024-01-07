import React from "react";
import { CreateEventCard } from "../../../components/card";
import { FormLabel, FormControl, Select } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import { categories } from "../../../utils/enums";

const Category = ({ handleChange }) => {
  return (
    <CreateEventCard title={"event category"}>
      <FormControl isRequired>
        <FormLabel fontSize={12}>Event Category</FormLabel>
        <Select
          focusBorderColor={COLORS.primary}
          onChange={handleChange}
          name="category"
          textTransform={"capitalize"}
        >
          <option>Select Category</option>
          {categories.map((data, idx) => (
            <option key={idx} value={data.value}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </CreateEventCard>
  );
};

export default Category;
