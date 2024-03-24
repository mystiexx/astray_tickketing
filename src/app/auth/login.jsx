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
import api from "../../services/dataService";
import { setWithExpiry } from "../../utils/store";
import toast from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  let initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (doc) => {
    try {
      setLoading(true);
      const request = await api.post(`/user/login`, doc);
      const res = request.data;
      const response = res.data;
      setWithExpiry("astray-access-token", response.token);
      setWithExpiry("astray-user", response.user);
      setLoading(false);
      window.location.href = "/dashboard";
    } catch (error) {
      setLoading(false);
      toast.error(error.message)
      console.log(error);
    }
  };

  return (
    <Layout>
      <Box
        display="grid"
        placeItems="center"
        py="100px"
        h={{ base: "auto", md: "73vh" }}
      >
        <Text fontSize={40} fontWeight={900} color={COLORS.white}>
          Sign In
        </Text>
        <Text color={COLORS.secondary}>Please fill yor information below</Text>
        <Container w={{ base: "100%", md: "400px" }} mt="24px">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, dirty }) => (
              <Form>
                <Box display="flex" flexDir="column" gap="16px">
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color={COLORS.white}>
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      focusBorderColor={COLORS.primary}
                      border={"none"}
                      bg={COLORS.bg_light}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color={COLORS.white}>
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        focusBorderColor={COLORS.primary}
                        bg={COLORS.bg_light}
                        border="none"
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
                  </FormControl>

                  <Button
                    _hover={{ bg: COLORS.dark }}
                    isDisabled={!dirty}
                    type="submit"
                    mt="24px"
                    isLoading={loading}
                  >
                    Sign In
                  </Button>

                  <Text textAlign="center">
                    Don't have an account?{" "}
                    <Link to="/register" style={{ color: COLORS.primary }}>
                      Sign up
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

export default Login;
