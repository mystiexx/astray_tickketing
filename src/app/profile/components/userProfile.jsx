import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";

const UserProfile = () => {
  return (
    <Box p="16px" bg={COLORS.bg_light} borderRadius={"6px"}>
      <Center>
        <Box
          w="100px"
          h="100px"
          borderRadius={"full"}
          bg={COLORS.gray}
          color={COLORS.black}
          textTransform={"uppercase"}
          display={"grid"}
          placeItems={"center"}
          fontSize={40}
          fontWeight={900}
        >
          E
        </Box>
      </Center>
      <Text textAlign={"center"} fontWeight={700} fontSize={18} mt="16px">
        Roland Enola
      </Text>
      <Text textAlign={"center"} color={COLORS.grey} fontSize={14}>
        aloneroland@gmail.com
      </Text>
    </Box>
  );
};

export default UserProfile;
