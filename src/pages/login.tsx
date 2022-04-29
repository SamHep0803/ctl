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

const Login: NextPage = () => {
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
          Login
        </Heading>
        <Flex>
          <Button
            colorScheme={"green"}
            bg={"primary.400"}
            rounded={"2xl"}
            px={6}
            _hover={{ bg: "primary.500" }}
          >
            Login with
            <Img src="/images/vatsim.png" alt="Vatsim" h="25px" ml={2} />
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Login;
