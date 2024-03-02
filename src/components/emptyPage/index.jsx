import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../utils/colors";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const EmptyPage = ({ title, sub, icon, btnText, btnLink, showBtn }) => {
  return (
    <Box h="60vh" display={"grid"} placeItems={"center"}>
      <Box>
        <Center>{icon}</Center>
        <Text
          color={COLORS.white}
          fontSize={"30px"}
          fontWeight={500}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          {title}
        </Text>
        <Center>
          <Text
            color={COLORS.grey}
            textAlign={"center"}
            fontSize={"16px"}
            fontWeight={"400"}
            w={{ base: "full", md: "264px" }}
          >
            {sub}
          </Text>
        </Center>
        {showBtn && (
          <Center>
            <Link to={btnLink}>
              <Button
                _hover={{ opacity: 0.8 }}
                textTransform={"capitalize"}
                mt="16px"
                leftIcon={<IoAdd />}
              >
                {btnText}
              </Button>
            </Link>
          </Center>
        )}

      </Box>
    </Box>
  );
};

export default EmptyPage;
