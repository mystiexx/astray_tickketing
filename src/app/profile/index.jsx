import React from "react";
import { AdminLayout } from "../../layout";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import UserProfile from "./components/userProfile";
import UserInfo from "./components/userInfo";
import UserPassword from "./components/userPassword";

const Profile = () => {
  return (
    <AdminLayout>
      <Box py="50px">
        <Container maxW="container.xl">
          <Text mb="30px" fontWeight={700} fontSize={25}>
            Profile
          </Text>
          <Flex flexDir={{ base: "column-reverse", md: "row" }} gap="24px">
            <Box w="100%" display="flex" flexDir={"column"} gap="24px">
              <UserInfo />
              <UserPassword />
            </Box>
            <Box w="100%">
              <UserProfile />
            </Box>
          </Flex>
        </Container>
      </Box>
    </AdminLayout>
  );
};

export default Profile;
