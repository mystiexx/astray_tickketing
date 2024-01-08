import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import { Formik, Form } from "formik";
import commaNumber from "comma-number";

const Checkout = ({ ticket, handleQuantity, total }) => {
  const [errors, setErrors] = useState("");
  let initialValues = {
    name: "",
    email: "",
    phone: "",
    quantity: "",
  };
  return (
    <Box display={"grid"} placeItems="center" mt="100px">
      <Box
        display={"flex"}
        flexDir={"column"}
        gap="24px"
        w={{ base: "100%", md: "600px" }}
      >
        <Box
          border={`0.5px solid ${COLORS.gray}`}
          borderRadius={"10px"}
          p="16px"
        >
          <Text fontWeight={600} fontSize={18} textTransform={"capitalize"}>
            {ticket.name}
          </Text>

          <Box mt="24px">
            <Formik initialValues={initialValues}>
              {({ handleChange, setFieldValue }) => (
                <Form>
                  <Box display="flex" flexDir={"column"} gap="24px">
                    <FormControl isRequired>
                      <FormLabel fontSize={12}>Full Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter Full Name"
                        name="name"
                        focusBorderColor={COLORS.primary}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize={12}>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        focusBorderColor={COLORS.primary}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize={12}>Email</FormLabel>
                      <Input
                        type="number"
                        placeholder="Enter Quantity"
                        min={1}
                        max={10}
                        name="quantity"
                        focusBorderColor={COLORS.primary}
                        onChange={(e) => {
                          const inputValue = parseInt(e.target.value, 10);

                          if (
                            !isNaN(inputValue) &&
                            inputValue >= 1 &&
                            inputValue <= 10
                          ) {
                            setFieldValue("quantity", inputValue);
                            handleQuantity(e);
                            setErrors("");
                          } else {
                            setErrors(
                              "Invalid input. Please enter a number between 1 and 10.",
                            );
                          }
                        }}
                      />
                      {errors && (
                        <Text mt="5px" color={COLORS.error} fontSize={12}>
                          {errors}
                        </Text>
                      )}
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize={12}>Phone</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter Phone"
                        name="phone"
                        focusBorderColor={COLORS.primary}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <Button _hover={{ bg: COLORS.dark }}>
                      Pay {commaNumber(total)}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
