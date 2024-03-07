import React, { useEffect } from "react";
import Layout from "../../layout";
import { Box, Center, Container, Text } from "@chakra-ui/react";
import { ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";
import { COLORS } from "../../utils/colors";

const Terms = () => {
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
      <Box py="100px">
        <Container maxW="container.xl">
          <Text
            textAlign="center"
            fontSize={{ base: 30, md: 40 }}
            color={COLORS.white}
            fontWeight={900}
            mb="16px"
          >
            Terms & Conditions
          </Text>
          <Text textAlign="center" fontSize={{ base: 12, md: 18 }} mb="16px">
            Welcome to Astray These Terms and Conditions ("Terms") govern your
            use of our website and services. Please read them carefully before
            accessing or using any of our features. By accessing or using our
            website, you agree to be bound by these Terms.
          </Text>

          <Center>
            <OrderedList spacing={5}>
              <ListItem fontWeight={700}>Using our Services:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  You must be at least 18 years old to use our services.
                </ListItem>
                <ListItem>
                  {" "}
                  You are responsible for ensuring the accuracy and completeness
                  of the information you provide to us.
                </ListItem>
                <ListItem>
                  {" "}
                  You are responsible for all activity that occurs on your
                  account.
                </ListItem>
                <ListItem>
                  {" "}
                  You agree not to use our services for any unlawful purpose or
                  in violation of these Terms.
                </ListItem>
                <ListItem>
                  {" "}
                  You agree to comply with all applicable laws and regulations.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700">Ticket Purchases:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  All ticket purchases are final and non-refundable unless
                  otherwise stated in the event's ticketing policy.
                </ListItem>
                <ListItem>
                  {" "}
                  We are not responsible for any lost, stolen, or damaged
                  tickets.
                </ListItem>
                <ListItem>
                  {" "}
                  Ticket prices are subject to change without notice.
                </ListItem>
                <ListItem>
                  {" "}
                  We reserve the right to cancel or modify any event at any
                  time, with or without notice.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700">User Content:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  You are responsible for any content you submit to our website.
                </ListItem>
                <ListItem>
                  {" "}
                  You warrant that you own or have the necessary rights to the
                  content you submit.
                </ListItem>
                <ListItem>
                  {" "}
                  You agree not to submit any content that is unlawful, harmful,
                  or offensive.
                </ListItem>
                <ListItem>
                  {" "}
                  We reserve the right to remove any content that violates these
                  Terms.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700">Disclaimer:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  We provide our services "as is" and without any warranty of
                  any kind.
                </ListItem>
                <ListItem>
                  {" "}
                  We are not responsible for any errors or omissions on our
                  website or services.
                </ListItem>
                <ListItem>
                  {" "}
                  We are not responsible for any damage you may suffer because
                  of the use of our website or services.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700">Limitation of Liability:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  To the fullest extent permitted by law, our liability for any
                  damage you may suffer shall be limited to the amount you paid
                  for your tickets.
                </ListItem>
                <ListItem>
                  {" "}
                  We will not be liable for any indirect, incidental,
                  consequential, or punitive damages.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700">Indemnification:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  You agree to indemnify and hold us harmless from and against
                  any claims, losses, damages, liabilities, and expenses
                  (including attorneys' fees) arising out of your use of our
                  website or services.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700">Governing Law:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  These Terms shall be governed by and construed in accordance
                  with the laws of Nigeria.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700"> Modifications:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  We reserve the right to modify these Terms at any time. You
                  will be notified of any changes by posting the new Terms on
                  our website. Your continued use of our website after the
                  posting of any changes constitutes your acceptance of the new
                  Terms.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700"> Entire Agreement:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  These Terms constitute the entire agreement between you and us
                  regarding your use of our website and services.
                </ListItem>
              </UnorderedList>
              <ListItem fontWeight="700"> Contact Us:</ListItem>
              <UnorderedList spacing={3}>
                <ListItem>
                  {" "}
                  If you have any questions about these Terms, please contact us
                  at [Email AddresS].
                </ListItem>
              </UnorderedList>
            </OrderedList>
          </Center>
        </Container>
      </Box>
    </Layout>
  );
};

export default Terms;
