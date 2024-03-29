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
  ModalHeader,
} from "@chakra-ui/react";
import { COLORS } from "../../../utils/colors";
import commaNumber from "comma-number";

const Checkout = ({
  ticket,
  handleQuantity,
  total,
  isOpen,
  close,
  handleSubmit,
  getReference,
  handleEmail,
  handleQuantityValue,
  creating,
}) => {
  const [errors, setErrors] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={close} size={{ base: "xs", md: "md" }}>
      <ModalOverlay />
      <ModalContent bg={COLORS.bg}>
        <ModalHeader textTransform={"capitalize"}>{ticket.name}</ModalHeader>
        <ModalBody pb="50px">
          <Box display="flex" flexDir={"column"} gap="24px">
            <FormControl isRequired>
              <FormLabel fontSize={12}>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email"
                name="email"
                focusBorderColor={COLORS.primary}
                onChange={handleEmail}
                border="none"
                bg={COLORS.bg_light}
              />
            </FormControl>

            {ticket.price !== 0 && (
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
                      handleQuantityValue(inputValue);
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
            )}

            {ticket.price === 0 ? (
              <Button _hover={{ bg: COLORS.dark }} onClick={handleSubmit}>
                Buy
              </Button>
            ) : (
              <Button
                _hover={{ bg: COLORS.dark }}
                onClick={getReference}
                isLoading={creating}
              >
                Pay {commaNumber(total)}
              </Button>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Checkout;
