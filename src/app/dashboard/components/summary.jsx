import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import commaNumber from "comma-number";

const Summary = ({ summary }) => {
  return (
    <Box
      py="28px"
      px="16px"
      border={`0.5px solid ${COLORS.gray}`}
      borderRadius={"10px"}
    >
      <Text fontSize={12}>{summary.name}</Text>
      <Text fontSize={"18px"} fontWeight={700} mt="7px">
        {commaNumber(summary.value)}
      </Text>
    </Box>
  );
};

export default Summary;
