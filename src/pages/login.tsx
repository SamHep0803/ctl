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
import { signIn, useSession } from "next-auth/react";

const Login: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
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
          <Button
            colorScheme={"green"}
            bg={"primary.400"}
            rounded={"2xl"}
            px={6}
            _hover={{ bg: "primary.500" }}
            onClick={() => signIn("vatsim")}
          >
            Login with
            <Img src="/images/vatsim_black.png" alt="VATSIM" h="25px" ml={1} />
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Login;
