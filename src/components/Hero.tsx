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
      <Container maxW={"6xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Flex alignSelf={"center"} justifyContent="center">
              <Img src="/Land.png" alignSelf="center" />
            </Flex>
          </Heading>
          <Text
            color={"gray.500"}
            maxW="2xl"
            fontSize={{ base: "xl", xs: "sm", sm: "md", md: "lg" }}
          >
            Welcome to VATMENA and VATEUD's biggest bi-annual event of the year!
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
              bg={"primary.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "primary.500",
              }}
            >
              Login
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
