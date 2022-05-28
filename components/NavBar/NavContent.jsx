import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavList } from "./NavList";
import { NavListItem } from "./NavListItem";

const links = [
  {
    label: "Buy",
    href: "https://gy9yf2tl3uv.typeform.com/to/dE7gxSCM",
  },
  {
    label: "Organizations",
    href: "https://gy9yf2tl3uv.typeform.com/to/VzroWIJS",
  },
  {
    label: "Donate",
    href: "https://gy9yf2tl3uv.typeform.com/to/znxvWN8S",
  },
];

const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        onClick={onToggle}
        color="gray.700"
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        color="gray.700"
        bg="white"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack spacing="0">
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: "1",
            }}
          ></NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  return (
    <HStack spacing="6" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop
          key={index}
          href={link.href}
          fontSize="xl"
          fontWeight="bold"
          _hover={{
            color: "red.400",
          }}
        >
          {link.label}
        </NavLink.Desktop>
      ))}
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};