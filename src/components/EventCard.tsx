import {
  Box,
  Button,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { Event } from "../generated/graphql";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(event);
  return (
    <>
      <LinkBox
        my={8}
        p={5}
        borderWidth="1px"
        borderRadius="md"
        onClick={onOpen}
        transitionDuration="0.2s"
        _hover={{
          boxShadow: "2xl",
          transitionDuration: "0.2s",
        }}
      >
        <Box fontSize={"sm"}>{moment(parseInt(event.createdAt)).fromNow()}</Box>
        <LinkOverlay href="#">
          <Heading size={"lg"} my={2}>
            {event.name}
          </Heading>
        </LinkOverlay>
        <Text>{event.description}</Text>
      </LinkBox>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <Image src={event.large_image} />
          <ModalHeader>{event.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{event.description}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline">Book</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
