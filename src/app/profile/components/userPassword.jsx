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
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { COLORS } from "../../../utils/colors";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const UserPassword = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    confirm_password: "",
  });

  const validateForm = (doc) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (doc.password.trim() === "") {
      newErrors.password = "Password is Required!!";
      isValid = false;
    } else if (doc.password.length < 8) {
      newErrors.password =
        "Password is too short - should be 8 characters minimum";
      isValid = false;
    } else if (!/(?=.*[0-9])(?=.*[a-zA-Z])/.test(doc.password)) {
      newErrors.password =
        "Password must contain at least one letter and one number";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (doc.confirm_password.trim() === "") {
      newErrors.confirm_password = "Confirm Password is required";
      isValid = false;
    } else if (doc.password !== doc.confirm_password) {
      newErrors.confirm_password = "Passwords must match";
      isValid = false;
    } else {
      newErrors.confirm_password = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (doc) => {
    const response = await validateForm(doc);

    if (response) {
      console.log(doc);
    }
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
      >
        {({ values, handleChange, dirty }) => (
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
                {errors.password && (
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
                {errors.confirm_password && (
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
