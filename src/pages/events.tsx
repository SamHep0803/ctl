import { useQuery } from "@apollo/client";
import { Container, Heading, Spinner } from "@chakra-ui/react";
import { NextPage } from "next";
import { EventCard } from "../components/EventCard";
import { EventsDocument, EventsQuery } from "../generated/graphql";

const Events: NextPage = () => {
  const { data, loading } = useQuery<EventsQuery>(EventsDocument);

  let body;

  if (loading) {
    body = <Spinner />;
  } else if (data) {
    body = data.events.map((event) => {
      return <EventCard key={event.id} event={event} />;
    });
  }

  return (
    <>
      <Container maxW={"2xl"}>
        <Heading fontSize={"4xl"} mb={4}>
          Events
        </Heading>
        {body}
      </Container>
    </>
  );
};

export default Events;
