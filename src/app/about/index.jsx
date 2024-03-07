import React, { useEffect } from "react";
import Layout from "../../layout";
import { Box, Container, Text } from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const onRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", onRouteChange);

    return () => {
      window.removeEventListener("popstate", onRouteChange);
    };
  }, []);
  return (
    <Layout>
      <Box bg={COLORS.bg_light} h="50vh" display="grid" placeItems={"center"}>
        <Container maxW="container.xl">
          <Text color={COLORS.white} fontWeight={700} fontSize={40}>
            Who we are
          </Text>
          <Text
            color={COLORS.white}
            fontWeight={400}
            w={{ base: "auto", md: "700px" }}
            lineHeight={7}
          >
            Connecting you to experiences that ignite your soul. We're more than
            just a ticketing website. We're your gateway to unforgettable
            experiences, curated with passion and fueled by the belief that
            life's most vibrant moments happen when we connect with each other
            and the world around us.
          </Text>
        </Container>
      </Box>

      <Box mt="100px" py="50px">
        <Container maxW="container.xl">
          <Text
            color={COLORS.white}
            fontWeight={700}
            fontSize={40}
            textTransform={"uppercase"}
          >
            Mission
          </Text>
          <Text
            color={COLORS.white}
            fontWeight={400}
            w={{ base: "auto", md: "700px" }}
            lineHeight={7}
          >
            To empower everyone to explore the world's possibilities, one click
            at a time. We are on a mission to:
          </Text>

          <Box mt="24px" w={{ base: "auto", md: "700px" }}>
            <UnorderedList>
              <ListItem>
                Revolutionize the ticketing experience: Through intuitive
                design, cutting-edge technology, and exceptional customer
                service, we aim to make buying tickets as enjoyable as the
                events themselves.
              </ListItem>
              <ListItem>
                Unlock a world of hidden gems: Go beyond the mainstream with
                personalized recommendations and curated experiences that cater
                to diverse interests and passions.
              </ListItem>
              <ListItem>
                Foster a community of explorers: Connect ticket holders with
                each other, creating a space for sharing tips, stories, and the
                pure joy of discovery.
              </ListItem>
              <ListItem>
                Champion ethical and sustainable practices: We believe in
                supporting responsible businesses and events that give back to
                their communities and protect the planet.
              </ListItem>
            </UnorderedList>
          </Box>

          <Text
            color={COLORS.white}
            fontWeight={400}
            w={{ base: "auto", md: "700px" }}
            lineHeight={7}
            mt="24px"
          >
            We believe that everyone deserves the opportunity to explore the
            world's possibilities, and that starts with a simple ticket. By
            making the ticketing process seamless, personalized, and inspiring,
            we hope to ignite a passion for adventure in everyone we serve.
            <br />
            Join us on this journey. Let's explore the world together.
          </Text>
        </Container>
      </Box>

      {/* vision */}
      <Box
        mt="100px"
        bg={COLORS.bg_light}
        display="grid"
        placeItems={"center"}
        py="50px"
        h={{ base: "auto", md: "50vh" }}
      >
        <Container maxW="container.xl">
          <Text
            color={COLORS.white}
            fontWeight={700}
            fontSize={40}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            vision
          </Text>
          <Text
            color={COLORS.white}
            fontWeight={400}
            lineHeight={7}
            textAlign={"center"}
          >
            To be the world's most seamless and immersive gateway to
            unforgettable experiences, one ticket at a time. Imagine a world
            where booking tickets to events, attractions, and adventures is
            effortless and sparks anticipation. Where the website, not just a
            platform, becomes your personal concierge, recommending hidden gems
            and curated experiences tailored to your passions. A world where
            every ticket unlocks not just entry, but a vibrant community of
            like-minded explorers, sharing stories and amplifying the thrill of
            discovery. This is the vision we strive for at Astray. We believe
            that every ticket is a portal to a memory in the making, and we are
            dedicated to making that journey as smooth and exciting as the
            destination itself.
          </Text>
        </Container>
      </Box>

      {/* history */}
      <Box mt="100px" py="50px">
        <Container maxW="container.xl">
          <Text
            color={COLORS.white}
            fontWeight={700}
            fontSize={40}
            textTransform={"uppercase"}
          >
            our story
          </Text>
          <Text
            color={COLORS.white}
            fontWeight={400}
            w={{ base: "auto", md: "700px" }}
            lineHeight={7}
          >
            It all started with a shared dream: to make exploring the world
            easier, more meaningful, and accessible to everyone. We were tired
            of the generic, clunky ticket buying process that sucked the
            excitement out of the adventure. We craved a platform that felt more
            like a trusted friend, recommending hidden gems, sharing insider
            tips, and connecting us with like-minded explorers. And so, Astray
            was born.
          </Text>

          <Text fontWeight={600} mt="10px">
            What makes us different:
          </Text>

          <Box mt="24px" w={{ base: "auto", md: "700px" }}>
            <UnorderedList spacing="10px">
              <ListItem>
                <strong>Passionate curators: </strong>We hand-pick experiences
                that go beyond the mainstream, catering to diverse interests and
                igniting hidden passions. From breathtaking hikes to intimate
                music sessions, underground art shows to culinary adventures, we
                believe every ticket unlocks a portal to a memory in the making.
              </ListItem>
              <ListItem>
                <strong>Seamless technology:</strong> We've made buying tickets
                effortless and enjoyable, with a user-friendly interface and
                cutting-edge features that take the hassle out of planning your
                next adventure.
              </ListItem>
              <ListItem>
                <strong>Community of explorers:</strong> We're not just selling
                tickets, we're building a community of curious souls who share a
                love for discovery. Connect with fellow adventurers, swap
                stories, and amplify the thrill of exploration together.
              </ListItem>
              <ListItem>
                <strong>Values we stand for:</strong> We believe in supporting
                responsible businesses and events that give back to their
                communities and protect the planet. Choose to explore with a
                conscience, knowing that your ticket purchase makes a
                difference.
              </ListItem>
            </UnorderedList>
          </Box>

          <Text fontWeight={600} mt="24px">
            Join us on the journey:
          </Text>
          <Text
            color={COLORS.white}
            fontWeight={400}
            w={{ base: "auto", md: "700px" }}
            lineHeight={7}
          >
            Whether you're a seasoned adventurer or a curious newbie, we invite
            you to join us on this incredible journey. Let's explore the world,
            one unforgettable experience at a time.
          </Text>

          <Box mt="10px" w={{ base: "auto", md: "700px" }}>
            <UnorderedList spacing="10px">
              <ListItem>
                Browse our curated collections: Find experiences that speak to
                your soul, from adrenaline-pumping activities to soul-soothing
                retreats.
              </ListItem>
              <ListItem>
                Get inspired by our blog: Discover hidden gems, read expert
                tips, and get lost in the stories of fellow explorers.
              </ListItem>
              <ListItem>
                Become part of the community: Connect with other adventurers,
                share your experiences, and build lasting friendships.
              </ListItem>
            </UnorderedList>
          </Box>

          <Text
            color={COLORS.white}
            fontWeight={400}
            w={{ base: "auto", md: "700px" }}
            lineHeight={7}
            mt="24px"
          >
            Together, let's turn every ticket into a portal to a richer, more
            vibrant life.
            <br />
            <br />
            Welcome to the Astray family! We're excited to have you on board.
            <br />
            <br />
            P.S. We're always working to improve, so feel free to share your
            feedback and suggestions. We want to make your experience with
            Astray as amazing as possible.
          </Text>
        </Container>
      </Box>
    </Layout>
  );
};

export default About;
