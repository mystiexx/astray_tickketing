import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { COLORS } from "../../../utils/colors";
import { Link } from "react-router-dom";

const Hero = ({ handleChange, handleSearch, results, loading, search }) => {
  return (
    <Box h="90vh" display="grid" placeItems={"center"}>
      <Container maxW={"container.xl"}>
        <Text
          textAlign="center"
          fontSize={{ base: "30px", md: "90px" }}
          fontWeight={700}
        >
          Welcome to Astray
        </Text>
        <Text
          textAlign="center"
          color="#b4b4b4"
          fontSize={{ base: 12, md: 18 }}
        >
          Get event tickets more easily with astray
        </Text>

        <Center>
          <Box display={"inline-block"} position={"relative"}>
            <Box
              display="flex"
              alignItems={"center"}
              mt="24px"
              p="10px"
              gap="10px"
              width={{ base: "100%", md: "100%", lg: "500px" }}
              borderRadius={"6px"}
              bg={COLORS.bg_light}
            >
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Search"
                  border="none"
                  focusBorderColor="transparent"
                  onChange={handleChange}
                />
                <InputRightElement>
                  {loading && <Spinner color={COLORS.primary} />}
                </InputRightElement>
              </InputGroup>

              <Button
                leftIcon={<CiSearch size={16} />}
                onClick={handleSearch}
                _hover={{
                  bg: "#781DBC",
                }}
              >
                Search
              </Button>
            </Box>

            {/* seach result */}
            {results.length >= 1 && search !== "" && (
              <Box
                position={"absolute"}
                top="100%"
                left={0}
                bg={COLORS.bg_light}
                border={`1px solid ${COLORS.grey}`}
                borderRadius={"6px"}
                w="full"
                mt="10px"
              >
                <Box display={"flex"} flexDir={"column"} gap="10px" p="16px">
                  {results.map((result) => (
                    <Link key={result.id} to={`/events/${result.id}`}>
                      <Text textTransform={"capitalize"}>{result.name}</Text>
                    </Link>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default Hero;
