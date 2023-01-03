import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function VerifyEmail() {
  const params = useRouter();
  const { token } = useSelector((store) => store.user);
  const { token: huru } = params.query;
  const [valid, setvalid] = useState(false);
  const verify = async () => {
    if (huru == token) {
      setvalid(true);
    }
  };
  useEffect(() => {
    verify();
  }, []);

  return (
    <>
      {valid ? (
        <Center>
          <Flex direction={"column"} gap={"4"} align={"center"}>
            <Image src="https://user-images.githubusercontent.com/40628582/210125289-4cb3584c-181d-48d6-abbb-f837ac0ad1a5.png" />
            <Button colorScheme={"whatsapp"} size={"lg"}>
              <Link href={"/signin"}>Proceed to Login </Link>
            </Button>
          </Flex>
        </Center>
      ) : (
        <Box>{/* <Heading>{params}</Heading> */}</Box>
      )}
    </>
  );
}

export default VerifyEmail;
