import {
  Box,
  Input,
  useColorModeValue,
  useToast,
  Button,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function Email() {
  const toast = useToast();
  const [uemail, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const verify = async () => {
    const payload = {
      email: uemail,
    };

    try {
      setloading(true);
      const res = await axios.post(
        `http://localhost:3000/api/token/find`,
        payload
      );
      if (res.status === 200) {
        toast({
          title: `${res.data.message}`,
          description: "Please check your email",
          position: "top-left",
          status: "loading",
          variant: "left-accent",
          isClosable: true,
          duration: 2000,
        });
      }
      setloading(false);
    } catch (error) {
      console.log("error:", error);
      setloading(true);

      toast({
        title: `${error.response.data.message}`,
        position: "top-left",
        status: "loading",
        variant: "left-accent",
        isClosable: true,
        duration: 2000,
      });
      setloading(false);
    }
  };

  const handleSubmit = () => {
    verify();
  };
  return (
    <>
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
            p={["8", "5", "6", "8"]}
            gap={"3"}
          >
            <Heading size={"md"}>Please enter your email ID</Heading>
            <Input
              borderColor={"black"}
              type={"text"}
              name={"email"}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your Email Id"
            ></Input>

            <Button
              isLoading={loading}
              loadingText={"Submitting"}
              onClick={handleSubmit}
              _hover={{ bg: "#24AEB1" }}
              color={"white"}
              size={"lg"}
              width={"100%"}
              bg={"#24AEB1"}
            >
              Log In
            </Button>
          </Flex>
        </Box>
      </Center>
      {/* {valid ? (
        <Center>
          <Flex direction={"column"} gap={"4"} align={"center"}>
            <Image src="https://user-images.githubusercontent.com/40628582/210125289-4cb3584c-181d-48d6-abbb-f837ac0ad1a5.png" />
            <Link to={"/signin"}>
              <Button colorScheme={"whatsapp"} size={"lg"}>
                Proceed to Login{" "}
              </Button>
            </Link>
          </Flex>
        </Center>
      ) : (
        <Box>
          <Heading>Invalid Link</Heading>
        </Box>
      )} */}
    </>
  );
}

export default Email;
