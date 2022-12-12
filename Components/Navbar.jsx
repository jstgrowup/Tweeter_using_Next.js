import React from "react";
import {
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useEffect } from "react";
function Navbar() {
  //   let path = Router.pathname;
  //   console.log('path:', path)
  const { data } = useSelector((store) => store.user);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (Router.pathname === "/" && !data.username) {
      Router.push("/");
    }
    else if (!data.username) {
      Router.push("/Signin");
    }
  }, []);

  return (
    <div>
      <Flex
        bg={useColorModeValue("#166FE6", "#166FE6")}
        w={"100%"}
        h={"100px"}
        justify={"space-around"}
        align={"center"}
      >
        <Link href={"/"}>
          <Button
            bg={useColorModeValue("white", "black")}
            color={useColorModeValue("black", "white")}
          >
            Signup Page
          </Button>
        </Link>
        <Link href={"/Signin"}>
          <Button
            bg={useColorModeValue("white", "black")}
            color={useColorModeValue("black", "white")}
          >
            Sign in
          </Button>
        </Link>
        <Link href={"/UserProfile"}>
          <Button
            bg={useColorModeValue("white", "black")}
            color={useColorModeValue("black", "white")}
          >
            User Profile
          </Button>
        </Link>
        <Link href={"/TimeLine"}>
          <Button
            bg={useColorModeValue("white", "black")}
            color={useColorModeValue("black", "white")}
          >
            Timeline
          </Button>
        </Link>
        <Button
          bg={useColorModeValue("white", "black")}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          w="fit-content"
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
      </Flex>
    </div>
  );
}

export default Navbar;
