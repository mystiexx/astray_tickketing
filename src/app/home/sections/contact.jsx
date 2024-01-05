import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { COLORS } from "../../../utils/colors";
import logo from "../../../assets/large_logo.png";

const Contact = () => {
  let initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (doc) => {
    console.log(doc);
  };
  return (
    <Box mt="200px" mb="100px">
      <Container maxW="container.xl">
        <Text color={COLORS.main} mb="24px" fontSize="30px" fontWeight={700}>
          Contact Us
        </Text>
        <Grid
          templateColumns={{
            base: "auto",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap="24px"
          alignItems={{ base: "none", md: "center" }}
        >
          <GridItem>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values, handleChange }) => (
                <Form>
                  <Box display="flex" flexDir={"column"} gap="20px">
                    <FormControl isRequired>
                      <FormLabel fontSize="12px" color={COLORS.main}>
                        Your Name
                      </FormLabel>
                      <Input
                        type="text"
                        w={{ base: "100%", md: "400px", lg: "400px" }}
                        onChange={handleChange}
                        name="name"
                        value={values.name}
                        focusBorderColor={COLORS.primary}
                        placeholder="Enter your name"
                        _placeholder={{ color: COLORS.secondary }}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize="12px" color={COLORS.main}>
                        Your Email
                      </FormLabel>
                      <Input
                        type="text"
                        name="email"
                        w={{ base: "100%", md: "400px", lg: "400px" }}
                        focusBorderColor={COLORS.primary}
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        _placeholder={{ color: COLORS.secondary }}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize="12px" color={COLORS.main}>
                        Your Message
                      </FormLabel>
                      <Textarea
                        type="text"
                        name="message"
                        w={{ base: "100%", md: "400px", lg: "400px" }}
                        focusBorderColor={COLORS.primary}
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Type your message"
                        _placeholder={{ color: COLORS.secondary }}
                      />
                    </FormControl>

                    <Button
                      w={{ base: "100%", md: "100px", lg: "100px" }}
                      _hover={{ bg: "#781DBC" }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </GridItem>
          <GridItem>
            <Image src={logo} display={{ base: "none", md: "block" }} />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
