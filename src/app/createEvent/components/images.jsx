import React, { useRef } from "react";
import { CreateEventCard } from "../../../components/card";
import { Box, Image, Input } from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { COLORS } from "../../../utils/colors";


const Images = ({ handleImage, image }) => {
  const imageRef = useRef();

  const handleOpen = () => {
    imageRef?.current?.click();
  };
  return (
    <CreateEventCard title="Event Image">
      <Input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImage}
        display={"none"}
        ref={imageRef}
      />
      {image?.name ? (
        <Image
          src={URL.createObjectURL(image)}
          h="30vh"
          objectFit={"cover"}
          w='full'
          onClick={handleOpen}
        />
      ) : (
        <Box
          onClick={handleOpen}
          display={"grid"}
          placeItems={"center"}
          h="30vh"
          cursor={'pointer'}
        >
          <BiImageAdd color={COLORS.gray} size='40' />
        </Box>
      )}
    </CreateEventCard>
  );
};

export default Images;
