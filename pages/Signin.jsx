import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/UserActions";
import Router from "next/router";
import Navbar from "../Components/Navbar";
function Signin() {
  const toast = useToast();
  const dispatch = useDispatch();
 

  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const postUser = async () => {
    const { email: emu, username: huru, password: pasu } = formData;
    if (!emu || !huru || !pasu) {
      toast({
        title: "All fields are required",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
    const { username, email, password } = formData;
    try {
      let resp = await axios.get("http://localhost:3000/api/signup");
      const { data } = resp;

      let huru = data.find(
        (el) =>
          el.username === username &&
          el.password === password &&
          el.email === email
      );
      if (huru) {
        toast({
          title: "Signin successfull",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        dispatch(userLogin(huru));
        Router.push("/UserProfile");
      } else {
        alert("Login failure");
      }
    } catch (e) {
      alert("Login failure");
    }
  };
  const handleSubmit = () => {
    postUser();
  };
  return (
    <div>
      {" "}
      <Navbar/>
      <Center p={"10"}>
        <Box
          w={["300", "420px", "490px", "520px"]}
          bg={useColorModeValue("white", "white")}
          color={useColorModeValue("black", "black")}
          borderRadius={"2xl"}
          boxShadow={"2xl"}
        >
          <Flex
            direction={"column"}
            align="start"
            p={["4", "5", "6", "8"]}
            gap={"3"}
          >
            <Heading>Sign In</Heading>
            <Text fontSize={"sm"} align={"start"}>
              User Name{" "}
            </Text>
            <Input
              // color={"black"}
              borderColor={"black"}
              type={"text"}
              name={"username"}
              onChange={handleChange}
              placeholder="Enter your User Name"
            ></Input>

            <Text fontSize={"sm"} align={"start"}>
              EMAIL ID{" "}
            </Text>
            <Input
              // color={"black"}
              borderColor={"black"}
              type={"text"}
              name={"email"}
              onChange={handleChange}
              placeholder="Enter your Email Id"
            ></Input>
            <Text fontSize={"sm"}>Password</Text>
            <Input
              // color={"black"}
              borderColor={"black"}
              type={"text"}
              name={"password"}
              onChange={handleChange}
              placeholder="Enter Your Password"
            ></Input>

            <Button
              onClick={handleSubmit}
              _hover={{ bg: "#24AEB1" }}
              color={"white"}
              size={"lg"}
              width={"100%"}
              bg={"#24AEB1"}
            >
              Sign In
            </Button>
          </Flex>
        </Box>
      </Center>
    </div>
  );
}

export default Signin;
