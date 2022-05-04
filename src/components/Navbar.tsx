import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Center,
  Flex,
  IconButton,
  Img,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import React from "react";
import { RatingBadge } from "./RatingBadge";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { data: session, status } = useSession();

  const { colorMode, toggleColorMode } = useColorMode();
  let body;
  if (!session) {
    body = (
      <NextLink href="/login">
        <Button mr={4} color="primary" rounded={"2xl"}>
          Login
        </Button>
      </NextLink>
    );
  } else if (status === "authenticated") {
    body = (
      <>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant="full"
            cursor={"pointer"}
            minW={0}
            maxW={"sm"}
            h="48px"
            p={0}
          >
            {console.log(session)}
            <Avatar size={"md"} name={session.user.full_name} />
          </MenuButton>
          <MenuList alignItems={"center"}>
            <Center py={2}>
              <Avatar size={"2xl"} name={session.user.full_name} />
            </Center>
            <Center pb={2}>
              <Text mr={2}>{session.user.full_name}</Text>
              <RatingBadge rating={session.user.ratingId} />
            </Center>
            <MenuDivider />
            <NextLink href="/me">
              <MenuItem>Your Profile</MenuItem>
            </NextLink>
            <MenuItem onClick={() => signOut({ redirect: true })}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  }

  return (
    <Flex>
      <Flex alignItems="center" py={4} maxH="100%">
        <NextLink href="/">
          <Link color="white" ml={4}>
            <Img src="/images/CTL.png" h="60px" />
          </Link>
        </NextLink>
      </Flex>

      <Flex ml="auto" p={4} alignItems="center">
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          mr={4}
          onClick={toggleColorMode}
          rounded={"2xl"}
        />
        {body}
      </Flex>
    </Flex>
  );
};
