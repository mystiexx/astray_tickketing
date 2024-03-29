import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../../utils/colors";
import { CiEdit } from "react-icons/ci";
import { TiCancel } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { BiLogoProductHunt } from "react-icons/bi";

const Header = () => {
  return (
    <Box
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      alignItems={{ base: "none", md: "center" }}
      gap={{ base: "24px", md: "none" }}
      mb="30px"
    >
      <Link to="/manage/events">
        <Box display="flex" alignItems={"center"} gap="5px">
          <FaArrowLeftLong color={COLORS.white} />
          <Text color={COLORS.white} fontSize={16} fontWeight={500}>
            Back
          </Text>
        </Box>
      </Link>

      <Box display={"flex"} alignItems={"center"} gap="20px">
        <Button
          leftIcon={<CiEdit />}
          variant={"outline"}
          _hover={{ bg: COLORS.dark, color: COLORS.white }}
        >
          Edit Event
        </Button>
        <Menu bg={COLORS.bg_light}>
          <MenuButton
            as={Button}
            _hover={{ bg: COLORS.primary }}
            _active={{ bg: COLORS.primary }}
            rightIcon={<FaAngleDown />}
          >
            Actions
          </MenuButton>
          <MenuList bg={COLORS.bg_light} border={`1px solid ${COLORS.grey}`}>
            <MenuItem
              display="flex"
              alignItems={"center"}
              gap="10px"
              bg={COLORS.bg_light}
            >
              <BiLogoProductHunt />
              Publish Event
            </MenuItem>
            <MenuItem
              display="flex"
              alignItems={"center"}
              gap="10px"
              color={COLORS.dark}
              bg={COLORS.bg_light}
            >
              <TiCancel size={18} />
              Cancel Event
            </MenuItem>
            <MenuItem
              display="flex"
              alignItems={"center"}
              gap="10px"
              bg={COLORS.bg_light}
            >
              <MdDeleteOutline color={COLORS.error} />
              <Text color={COLORS.error}> Delete Event</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
