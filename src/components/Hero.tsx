import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <Container maxW={"9xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "9xl" }}
            lineHeight={"110%"}
          >
            <Flex alignSelf={"center"} justifyContent="center">
              <Text as="span" alignSelf="center">
                CROSS THE
              </Text>
              <Img w="20%" h="20%" src="/Land.png" alignSelf="center" pl={10} />
            </Flex>
          </Heading>
          <Text color={"gray.500"} maxW="3xl">
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
