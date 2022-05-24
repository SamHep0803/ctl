import { useUser } from "@/lib/user";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Stack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";

const Login: NextPage = () => {
  const user = useUser();

  if (user) {
    window.location.href = "/";
  }

  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
          lineHeight={"110%"}
        >
          CTL Login
        </Heading>
        <Flex>
          <NextLink href="/api/auth/callback">
            <Button
              colorScheme={"green"}
              bg={"primary.400"}
              rounded={"2xl"}
              px={6}
              _hover={{ bg: "primary.500" }}
            >
              Login with
              <Img
                src="/images/vatsim_black.png"
                alt="VATSIM"
                h="25px"
                ml={1}
              />
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Login;
