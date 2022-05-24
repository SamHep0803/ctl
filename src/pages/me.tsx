import { Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useUser } from "../../lib/user";

const Me: NextPage = () => {
  const user = useUser();
  if (!user) {
    window.location.href = "/login";
  }
  return (
    <Container lineHeight={10}>
      <Heading fontSize={"4xl"}>Your Profile:</Heading>
      <Heading fontSize={"2xl"}>Name: {user.personal?.name_full}</Heading>
      <Heading fontSize={"2xl"}>Email: {user.personal?.email}</Heading>
      <Heading fontSize={"2xl"}>Rating: {user.vatsim?.rating.short}</Heading>
    </Container>
  );
};

export default Me;
