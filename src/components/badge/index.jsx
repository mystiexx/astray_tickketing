import { Box } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../utils/colors";

const Badge = ({ status }) => {
  return (
    <div>
      {status === "draft" ? (
        <Box
          py="4px"
          px="7px"
          borderRadius={"5px"}
          bg={COLORS.pending}
          color={COLORS.pending_dark}
          display={"inline-block"}
          fontSize={"14px"}
          fontWeight={600}
          textTransform={"capitalize"}
        >
          {status}
        </Box>
      ) : status === "published" ? (
        <Box
          py="4px"
          px="7px"
          borderRadius={"5px"}
          bg={COLORS.success}
          color={COLORS.success_dark}
          display={"inline-block"}
          fontSize={"14px"}
          fontWeight={600}
          textTransform={"capitalize"}
        >
          {status}
        </Box>
      ) : (
        <Box
          py="4px"
          px="7px"
          borderRadius={"5px"}
          bg={COLORS.error_light}
          color={COLORS.error}
          display={"inline-block"}
          fontSize={"14px"}
          fontWeight={600}
          textTransform={"capitalize"}
        >
          {status}
        </Box>
      )}
    </div>
  );
};

export default Badge;
