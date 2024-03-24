import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  ModalHeader,
  Input,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { COLORS } from "../../../utils/colors";

const AddTickets = ({ isOpen, onClose, handleTickets }) => {
  const [type, setType] = useState("paid");
  const typeVariable = ["paid", "free"];

  let initialValues = {
    name: "",
    quantity: "",
    price: "",
  };

  const handleSubmit = (doc) => {
    let data = {
      ...doc,
      sold: 0,
    };
    handleTickets(data);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
      <ModalOverlay />
      <ModalContent bg={COLORS.bg}>
        <ModalHeader>Add Ticket</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="50px">
          <Box display="grid" placeItems={"center"}>
            <Box display="flex" gap="10px">
              {typeVariable.map((data, idx) => (
                <Box
                  key={idx}
                  textTransform={"capitalize"}
                  bg={type === data ? COLORS.primary : "none"}
                  p="5px"
                  color={type === data ? COLORS.white : COLORS.secondary}
                  cursor={"pointer"}
                  onClick={() => setType(data)}
                  borderRadius={"6px"}
                >
                  {" "}
                  {data}
                </Box>
              ))}
            </Box>
          </Box>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange }) => (
              <Form>
                <Box display="flex" flexDir="column" gap="16px">
                  <FormControl isRequired>
                    <FormLabel fontSize={12}>Ticket Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter Ticket Name"
                      focusBorderColor={COLORS.primary}
                      borderRadius={"10px"}
                      bg={COLORS.bg_light}
                      border={"none"}
                    />
                  </FormControl>
                  <Grid
                    templateColumns={{ base: "100%", md: "repeat(2, 1fr)" }}
                    gap={{ base: "16px", md: "24px" }}
                  >
                    <GridItem>
                      <FormControl isRequired>
                        <FormLabel fontSize={12}>Quantity</FormLabel>
                        <Input
                          type="number"
                          name="quantity"
                          onChange={handleChange}
                          placeholder="Enter Quantity Name"
                          focusBorderColor={COLORS.primary}
                          borderRadius={"10px"}
                          border={"none"}
                          bg={COLORS.bg_light}
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl isRequired={type !== "free"}>
                        <FormLabel fontSize={12}>Price</FormLabel>
                        <Input
                          type="number"
                          name="price"
                          onChange={handleChange}
                          placeholder="Enter Price per unit"
                          focusBorderColor={COLORS.primary}
                          borderRadius={"10px"}
                          isDisabled={type === "free"}
                          bg={COLORS.bg_light}
                          border={"none"}
                        />
                      </FormControl>
                    </GridItem>
                  </Grid>

                  <Button
                    w="full"
                    _hover={{ bg: COLORS.dark }}
                    mt="16px"
                    type="submit"
                  >
                    Save
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

export default AddTickets;
