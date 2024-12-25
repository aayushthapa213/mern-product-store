import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
// import { useColorMode } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
// import { IoMoon } from "react-icons/io5";
// import { LuSun } from "react-icons/lu";

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          bgGradient={"linear(.to-r,cyan.400,blue.500"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaPlusSquare fontSize={20} />
            </Button>
          </Link>
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={"20"} />}
          </Button> */}
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
