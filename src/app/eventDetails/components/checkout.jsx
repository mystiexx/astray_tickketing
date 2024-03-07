import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import { Formik, Form } from "formik";
import commaNumber from "comma-number";

const Checkout = ({ ticket, handleQuantity, total, isOpen, onClose }) => {
  const [errors, setErrors] = useState("");

  let initialValues = {
    name: "",
    email: "",
    phone: "",
    quantity: "",
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={COLORS.bg}>
        <ModalHeader textTransform={"capitalize"}>{ticket.name}</ModalHeader>
        <ModalBody pb="50px">
          <Formik initialValues={initialValues}>
            {({ handleChange, setFieldValue, dirty }) => (
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
                      border="none"
                      bg={COLORS.bg_light}
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
                      border="none"
                      bg={COLORS.bg_light}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize={12}>Quantity</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter Quantity"
                      min={1}
                      max={10}
                      name="quantity"
                      focusBorderColor={COLORS.primary}
                      border="none"
                      bg={COLORS.bg_light}
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
                            "Invalid input. Please enter a number between 1 and 10."
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
                      border="none"
                      bg={COLORS.bg_light}
                    />
                  </FormControl>

                  <Button _hover={{ bg: COLORS.dark }} isDisabled={!dirty}>
                    {total === 0 ? "Buy" : `  Pay ${commaNumber(total)}`}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Checkout;
