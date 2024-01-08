import React from "react";
import {
  Box,
  Input,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiExport } from "react-icons/ci";

const Header = ({ title, show, btnTitle, isExport, handleExport }) => {
  return (
    <Box
      mb="30px"
      display="flex"
      alignItems={{ base: "none", md: "center" }}
      justifyContent={"space-between"}
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: "16px", md: "none" }}
    >
      <Text
        textTransform={"capitalize"}
        fontSize={"24px"}
        fontWeight={"600"}
        color={COLORS.main}
      >
        {title}
      </Text>
      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "16px", md: "10px" }}
        alignItems={"center"}
      >
        <InputGroup>
          <Input
            type="text"
            w={{ base: "full", md: "300px" }}
            placeholder="Search"
            borderRadius={"10px"}
            focusBorderColor={COLORS.primary}
            border={`1px solid ${COLORS.gray}`}
            _placeholder={{
              color: COLORS.gray,
            }}
          />
          <InputLeftElement>
            <CiSearch color={COLORS.gray} size={20} />
          </InputLeftElement>
        </InputGroup>

        {show && (
          <Link to="/manage/events/create" style={{ width: "100%" }}>
            <Button
              _hover={{ bg: COLORS.dark }}
              textTransform={"capitalize"}
              w={{ base: "full", md: "200px" }}
              leftIcon={<IoMdAdd />}
            >
              {btnTitle}
            </Button>
          </Link>
        )}

        {isExport && (
          <Button
            _hover={{ bg: COLORS.dark, color: COLORS.white }}
            textTransform={"capitalize"}
            variant={"outline"}
            w={{ base: "full", md: "auto" }}
            leftIcon={<CiExport />}
            onClick={handleExport}
          >
            Export
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
