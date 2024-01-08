import React, { useState } from "react";
import { ProfileCard } from "../../../components/card";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { COLORS } from "../../../utils/colors";
import * as Yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const UserPassword = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number"),
    confirm_password: Yup.string().when("password", {
      is: (val) => val && val.length > 0,
      then: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Both passwords need to be the same",
      ),
    }),
  });

  const handleSubmit = (doc) => {
    console.log(doc);
  };

  return (
    <ProfileCard title="password">
      <Formik
        initialValues={{
          current_password: "",
          password: "",
          confirm_password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={PasswordSchema}
      >
        {({ values, handleChange, errors, handleBlur, touched, dirty }) => (
          <Form>
            <Box display="flex" flexDir="column" gap="16px">
              <FormControl isRequired>
                <FormLabel fontSize={12}>Current Password</FormLabel>
                <Input
                  type="password"
                  focusBorderColor={COLORS.primary}
                  name="current_password"
                  value={values.current_password}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={12}>New Password</FormLabel>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    onChange={handleChange}
                    value={values.password}
                    // onBlur={handleBlur}
                    focusBorderColor={COLORS.primary}
                    name="password"
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
              <FormControl isRequired>
                <FormLabel fontSize={12}>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={hide ? "text" : "password"}
                    focusBorderColor={COLORS.primary}
                    name="confirm_password"
                    // onBlur={handleBlur}
                    value={values.confirm_password}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    {hide ? (
                      <IconButton
                        icon={<FaRegEyeSlash color={COLORS.secondary} />}
                        onClick={() => setHide(!hide)}
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                      />
                    ) : (
                      <IconButton
                        icon={<FaRegEye color={COLORS.secondary} />}
                        onClick={() => setHide(!hide)}
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
                {errors.confirm_password && touched.confirm_password && (
                  <Text color="red" mb="5px" fontSize="12px">
                    {errors.confirm_password}
                  </Text>
                )}
              </FormControl>

              <Button
                type={"submit"}
                _hover={{ bg: COLORS.dark }}
                isDisabled={!dirty}
              >
                Change Password
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </ProfileCard>
  );
};

export default UserPassword;
