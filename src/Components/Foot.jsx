import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import logo from "../img/logo.png";
import footer from "../img/fotter.png";
import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <div>
      {/* fotter-section */}
      <Box mb={"60px"}>
        <Box
          gap={{ base: "10px", md: "10px", lg: "20px", xl: "20px" }}
          justifyContent={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "center",
          }}
          display={"grid"}
          gridTemplateColumns={{
            base: "95%",
            md: "23% 23% 23% 23%",
            lg: "23% 23% 23% 23%",
            xl: "23% 23% 23% 23%",
          }}
        >
          <Box>
            <Link to="/">
              <Image pb={"4"} src={logo} alt="" />
            </Link>
            <Heading
              pb={4}
              fontSize={"16px"}
              color={"#777C87"}
              fontWeight={"400"}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati culpa assumenda voluptas placeat amet consectetur
              adipisicing elit. Obcaecati culpa assumenda voluptas placeat.
            </Heading>
            <Box display={"flex"}>
              <Box
                transition={"all 0.5s"}
                _hover={{ color: "#F79837" }}
                pe={2}
                fontSize={"18px"}
              >
                <FaFacebookF />
              </Box>
              <Box
                transition={"all 0.5s"}
                _hover={{ color: "#F79837" }}
                pe={2}
                fontSize={"18px"}
              >
                <FaTwitter />
              </Box>
              <Box
                transition={"all 0.5s"}
                _hover={{ color: "#F79837" }}
                pe={2}
                fontSize={"18px"}
              >
                <FaLinkedinIn />
              </Box>
              <Box
                transition={"all 0.5s"}
                _hover={{ color: "#F79837" }}
                pe={2}
                fontSize={"18px"}
              >
                <AiFillInstagram />
              </Box>
              <Box
                transition={"all 0.5s"}
                _hover={{ color: "#F79837" }}
                pe={2}
                fontSize={"18px"}
              >
                <FaGoogle />
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              pb={"4"}
              fontSize={"18px"}
            >
              INFORMATION
            </Heading>
            <Heading
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              pb={"3"}
              fontSize={"16px"}
            >
              Home
            </Heading>
            <Heading
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={"3"}
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              fontSize={"16px"}
            >
              About us
            </Heading>
            <Heading
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={"3"}
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              fontSize={"16px"}
            >
              Privacy Policy
            </Heading>
            <Heading
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={"3"}
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              fontSize={"16px"}
            >
              Frequently Questions
            </Heading>
            <Heading
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={"3"}
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              fontSize={"16px"}
            >
              Order Tracking
            </Heading>
            <Heading
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={"3"}
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              fontSize={"16px"}
            >
              Compare
            </Heading>
          </Box>
          <Box>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              pb={4}
              fontSize={"18px"}
            >
              SHOP
            </Heading>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={3}
              fontSize={"16px"}
            >
              Cart View One
            </Heading>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={3}
              fontSize={"16px"}
            >
              Cart View Two
            </Heading>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={3}
              fontSize={"16px"}
            >
              Empty Cart
            </Heading>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={3}
              fontSize={"16px"}
            >
              Checkout View One
            </Heading>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={3}
              fontSize={"16px"}
            >
              Checkout View Two
            </Heading>
            <Heading
              ps={{ base: "0", md: "5", lg: "5", xl: "5" }}
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              fontWeight={"semi-bold"}
              pb={3}
              fontSize={"16px"}
            >
              Wishlist
            </Heading>
          </Box>
          <Box>
            <Heading pb={4} fontSize={"18px"}>
              NEWSLETTER
            </Heading>
            <Input
              focusBorderColor="#F79837"
              mb={4}
              placeholder="Your Mail*"
            ></Input>
            <Button
              p={"16px 35px"}
              borderRadius={0}
              transition={"all 0.5s"}
              _hover={{
                bgColor: "white",
                color: "black",
                border: "1px solid black",
              }}
              color={"white"}
              bgColor={"black"}
              fontSize={"12px"}
            >
              SEND MAIL
            </Button>
          </Box>
        </Box>
      </Box>

      {/* semi-footer */}
      <Box
        h={"60px"}
        bgColor={"black"}
        display={{ base: "grid", md: "flex", lg: "flex", xl: "felx" }}
        alignItems={"center"}
        justifyContent={{
          base: "center",
          md: "space-between",
          lg: "space-between",
          xl: "space-between",
        }}
        gap={"10px"}
      >
        <Box display={"flex"}>
          <Heading
            ps={{ base: 0, md: 10, lg: 10, xl: 10 }}
            color={"white"}
            fontSize={"14px"}
          >
            © CopyRight 2021{" "}
          </Heading>
          <Heading ps={1} color={"#F79837"} fontSize={"14px"}>
            AndShop
          </Heading>
        </Box>
        <Box>
          <Image pe={{ base: 0, md: 10, lg: 10, xl: 10 }} src={footer} alt="" />
        </Box>
      </Box>
    </div>
  );
};

export default Foot;
