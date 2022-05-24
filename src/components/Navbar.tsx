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
// import { signOut } from "next-auth/react";
import NextLink from "next/link";
import React from "react";
import { useUser } from "../../lib/user";
import { RatingBadge } from "./RatingBadge";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { isOpen, onToggle } = useDisclosure();
  const user = useUser();

  const { colorMode, toggleColorMode } = useColorMode();
  let body;
  if (!user) {
    body = (
      <NextLink href="/login">
        <Button mr={4} color="primary" rounded={"2xl"}>
          Login
        </Button>
      </NextLink>
    );
  } else if (user) {
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
            <Avatar size={"md"} name={user.personal?.name_full} />
          </MenuButton>
          <MenuList alignItems={"center"}>
            <Center py={2}>
              <Avatar size={"2xl"} name={user.personal?.name_full} />
            </Center>
            <Center pb={2}>
              <Text mr={2}>{user.personal?.name_full}</Text>
              <RatingBadge rating={user.vatsim?.rating.id} />
            </Center>
            <MenuDivider />
            <NextLink href="/me">
              <MenuItem>Your Profile</MenuItem>
            </NextLink>
            {/* <MenuItem onClick={() => signOut({ redirect: true })}>
              Logout
            </MenuItem> */}
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
        <NextLink href="/events">
          <Button variant={"ghost"}>Events</Button>
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
