import { Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

const Me: NextPage = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    window.location.href = "/login";
  }
  return (
    <Container lineHeight={10}>
      <Heading fontSize={"4xl"}>Your Profile:</Heading>
      <Heading fontSize={"2xl"}>Name: {session?.user?.full_name}</Heading>
      <Heading fontSize={"2xl"}>Email: {session?.user?.email}</Heading>
      <Heading fontSize={"2xl"}>Rating: {session?.user?.rating}</Heading>
    </Container>
  );
};

export default Me;
