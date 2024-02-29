import React from "react";
import { ProfileCard } from "../../../components/card";
import { Box, Input, Button, FormLabel, FormControl } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { COLORS } from "../../../utils/colors";

const UserInfo = () => {
  let initialValues = {
    hostName: "flyguy",
    fullName: "Roland Enola",
    email: "roland@email.com",
    phone: "07059606487",
  };

  const handleSubmit = (doc) => {
    console.log(doc);
  };
  return (
    <ProfileCard title={"user information"}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, handleChange }) => (
          <Form>
            <Box display="flex" flexDir="column" gap="16px">
              <FormControl>
                <FormLabel fontSize={12}>Full Name</FormLabel>
                <Input
                  type="text"
                  value={values.fullName}
                  bg={COLORS.bg}
                  border={"none"}
                  disabled
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>Host Name</FormLabel>
                <Input
                  type="text"
                  value={values.hostName}
                  onChange={handleChange}
                  focusBorderColor={COLORS.primary}
                  bg={COLORS.bg}
                  border={"none"}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>Email</FormLabel>
                <Input
                  type="text"
                  value={values.email}
                  bg={COLORS.bg}
                  border={"none"}
                  disabled
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>Phone</FormLabel>
                <Input
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  focusBorderColor={COLORS.primary}
                  bg={COLORS.bg}
                  border={"none"}
                />
              </FormControl>

              <Button _hover={{ bg: COLORS.dark }} mt="24px">
                Update
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </ProfileCard>
  );
};

export default UserInfo;
