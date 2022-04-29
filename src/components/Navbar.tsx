import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  Img,
  Link,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  let body;
  body = (
    <NextLink href="/login">
      <Button mr={4} color="primary" rounded={"2xl"}>
        Login
      </Button>
    </NextLink>
  );
  // body = (
  // 	<>
  // 		<Stack
  // 			direction={{ base: "column", md: "row" }}
  // 			display={{ base: "none", md: "flex" }}
  // 			ml="auto"
  // 			alignItems="center"
  // 			pr={4}
  // 		>
  // 			<Button colorScheme="twitter" mr={2} onClick={signOut}>
  // 				Sign Out
  // 			</Button>
  // 			<Box mr={4} color="white">
  // 				@{profile.username}
  // 			</Box>
  // 		</Stack>
  // 		<Box mr={2}>
  // 			<Img src={profile.avatar_url} size="sm" rounded="full" />
  // 		</Box>
  // 	</>

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
