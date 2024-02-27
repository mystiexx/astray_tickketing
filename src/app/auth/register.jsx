import React, { useState } from "react";
import Layout from "../../layout";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { COLORS } from "../../utils/colors";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import * as Yup from "yup";
import api from "../../services/dataService";

const Register = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  let initialValues = {
    fullName: "",
    hostName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const Schema = Yup.object().shape({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(
        /(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        "Password must contain a number, an uppercase letter, and a special character"
      ),
  });

  const handleSubmit = async (doc) => {
    try {
      setLoading(true);
      const request = await api.post(`/user/register`, doc);
      const res = request.data;
      const response = res.data;
      localStorage.setItem("astray-access-token", response.token);
      setLoading(false);
      window.location.href = "/dashboard";
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <Layout>
      <Box display="grid" placeItems="center" py="100px">
        <Text fontSize={40} fontWeight={900} color={COLORS.primary}>
          Sign Up
        </Text>
        <Text color={COLORS.secondary}>Please fill yor information below</Text>
        <Container w={{ base: "100%", md: "500px" }} mt="24px">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={Schema}
          >
            {({ handleChange, errors, handleBlur, touched, dirty }) => (
              <Form>
                <Box display="flex" flexDir="column" gap="16px">
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color={COLORS.main}>
                      Full Name
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      onChange={handleChange}
                      focusBorderColor={COLORS.primary}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color={COLORS.main}>
                      Host Name
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Host Name"
                      name="hostName"
                      onChange={handleChange}
                      focusBorderColor={COLORS.primary}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color={COLORS.main}>
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      focusBorderColor={COLORS.primary}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color={COLORS.main}>
                      Phone
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Phone"
                      name="phoneNumber"
                      onChange={handleChange}
                      focusBorderColor={COLORS.primary}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color={COLORS.main}>
                      Password
                    </FormLabel>
                    <Text fontSize={12} color={COLORS.secondary} mt={-2} mb={2}>
                      Password must contain at least one uppercase and lowercase
                      letter, number and minimum of 8 characters
                    </Text>
                    <InputGroup>
                      <Input
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        focusBorderColor={COLORS.primary}
                      />
                      <InputRightElement>
                        {show ? (
                          <IconButton
                            icon={<FaRegEyeSlash color={COLORS.secondary} />}
                            onClick={() => setShow(!show)}
                            bg="transparent"
                            _hover={{ bg: "transparent" }}
                          />
                        ) : (
                          <IconButton
                            icon={<FaRegEye color={COLORS.secondary} />}
                            onClick={() => setShow(!show)}
                            bg="transparent"
                            _hover={{ bg: "transparent" }}
                          />
                        )}
                      </InputRightElement>
                    </InputGroup>
                    {errors.password && touched.password && (
                      <Text color="red" mb="5px" fontSize="12px">
                        {errors.password}
                      </Text>
                    )}
                  </FormControl>

                  <Button
                    _hover={{ bg: COLORS.dark }}
                    isDisabled={!dirty}
                    type="submit"
                    mt="24px"
                    isLoading={loading}
                  >
                    Create Account
                  </Button>

                  <Text textAlign="center">
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: COLORS.primary }}>
                      Log in
                    </Link>
                  </Text>
                </Box>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </Layout>
  );
};

export default Register;
