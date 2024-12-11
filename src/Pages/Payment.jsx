import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../img/log-banner.png";
import Foot from "../Components/Foot";

const Payment = () => {
  return (
    <div>
      {/* banner */}
      <Box p={"100px 0px"} bgImg={banner}>
        <Heading fontSize={"36px"} color={"white"} textAlign={"center"}>
          Payment
        </Heading>
        <Box pt={2} justifyContent={"center"} display={"flex"}>
          <Box
            transition={"all 0.5s"}
            _hover={{ color: "#F79837" }}
            pe={2}
            fontSize={"16px"}
            color={"white"}
          >
            <Link to="/">Home</Link>
          </Box>
          <Box pe={2} fontSize={"16px"} color={"white"}>
            /
          </Box>
          <Box fontSize={"16px"} color={"#F79837"}>
            Payment
          </Box>
        </Box>
      </Box>

      <Box
        py={"80px"}
        justifyContent={"center"}
        gap={"20px"}
        display={"grid"}
        gridTemplateColumns={{
          base: "90%",
          md: "45% 45%",
          lg: "45% 45%",
          xl: "45% 45%",
        }}
      >
        <Box>
          <Heading
            borderBottom={"2px solid #F79837"}
            py={2}
            my={5}
            ps={4}
            fontSize={"24px"}
            fontWeight={"bold"}
          >
            Billings Information
          </Heading>

          <Box
            pb={{ base: 3, md: 3, lg: 3, xl: 3 }}
            display={{ base: "block", md: "flex", lg: "flex", xl: "flex" }}
            gap={"25px"}
            justifyContent={"space-evenly"}
          >
            <Box>
              <Heading pb={2} fontSize={"16px"}>
                First name
              </Heading>
              <Input
                placeholder="First name *"
                focusBorderColor="#F79837"
                w={{ base: "280px", md: "160px", lg: "200px", xl: "300px" }}
              />
            </Box>
            <Box>
              <Heading pb={2} fontSize={"16px"}>
                Last name
              </Heading>
              <Input
                placeholder="Last name *"
                focusBorderColor="#F79837"
                w={{ base: "280px", md: "160px", lg: "200px", xl: "300px" }}
              />
            </Box>
          </Box>

          <Box pb={3} ps={{ md: 1, lg: 3, xl: 4 }}>
            <Heading pb={2} fontSize={"16px"}>
              Ph.Number
            </Heading>
            <InputGroup>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input
                w={"97%"}
                focusBorderColor="#F79837"
                type="tel"
                placeholder="phone number"
              />
            </InputGroup>
          </Box>

          <Box pb={3} ps={{ md: 1, lg: 3, xl: 4 }}>
            <Heading pb={2} fontSize={"16px"}>
              Country
            </Heading>
            <Input
              placeholder="Select an Option"
              focusBorderColor="#F79837"
              w={"97%"}
            />
          </Box>

          <Box
            pb={3}
            display={{ base: "block", md: "flex", lg: "flex", xl: "flex" }}
            gap={"25px"}
            justifyContent={"space-evenly"}
          >
            <Box>
              <Heading pb={2} fontSize={"16px"}>
                State/City
              </Heading>
              <Input
                placeholder="Select an Option"
                focusBorderColor="#F79837"
                w={{ base: "280px", md: "160px", lg: "200px", xl: "300px" }}
              />
            </Box>
            <Box>
              <Heading pb={2} fontSize={"16px"}>
                State/City
              </Heading>
              <Input
                placeholder="Enter your Pin"
                focusBorderColor="#F79837"
                w={{ base: "280px", md: "160px", lg: "200px", xl: "300px" }}
              />
            </Box>
          </Box>

          <Box pb={3} ps={{ md: 1, lg: 3, xl: 4 }}>
            <Heading pb={2} fontSize={"16px"}>
              Full Address
            </Heading>
            <Input
              placeholder="Enter your Address here..."
              focusBorderColor="#F79837"
              w={"97%"}
            />
          </Box>

          <Box pb={3} ps={{ md: 1, lg: 3, xl: 4 }}>
            <Heading pb={2} fontSize={"16px"}>
              Additional Notes
            </Heading>
            <Textarea
              placeholder="Order notes"
              focusBorderColor="#F79837"
              w={"97%"}
            ></Textarea>
          </Box>
        </Box>
        <Box>
          <Heading
            borderBottom={"2px solid #F79837"}
            py={2}
            my={5}
            ps={4}
            fontSize={"24px"}
            fontWeight={"bold"}
          >
            Payment
          </Heading>
          <RadioGroup defaultValue="1">
            <Stack spacing={4} direction="column">
              <Box ps={4}>
                <Radio colorScheme="orange" value="1">
                  <Heading fontSize={"16px"}>Direct Bank Transfer</Heading>
                </Radio>
              </Box>
              <Heading
                fontWeight={"semi-bold"}
                color={"#777C87"}
                fontSize={"16px"}
                ps={4}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </Heading>
              <Box ps={4}>
                <Radio colorScheme="orange" value="2">
                  <Heading fontSize={"16px"}>UPI</Heading>
                </Radio>
              </Box>

              <Box ps={4} pb={3}>
                <Radio colorScheme="orange" value="3">
                  <Heading fontSize={"16px"}>Paypal</Heading>
                </Radio>
              </Box>
            </Stack>
          </RadioGroup>

          <Box ms={4}>
            <Button
              bgColor={"black"}
              borderRadius={0}
              color={"white"}
              transition={"all 0.5s"}
              _hover={{
                bgColor: "white",
                color: "#F79837",
                border: "1px solid black",
              }}
            >
              PLACE ORDER
            </Button>
          </Box>
        </Box>
      </Box>

      <Foot />
    </div>
  );
};

export default Payment;
