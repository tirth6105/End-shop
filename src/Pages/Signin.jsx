import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import banner from "../img/log-banner.png";
import Foot from "../Components/Foot";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../Redux/Action";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: "", email: "", password: "" });

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const ValidPassword = (password) => {
    return String(password).match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{5,32}$/);
  };
 

  const validUsername = (username) => {
    return String(username).match(/^[0-9A-Za-z]{5,16}$/);
  };


  const handlesubmit = (e) => {
    e.preventDefault();
    let error = {};

    if (!validUsername(username)) {
      console.log(error);
      error.username = "Username cannot contain special characters";
    }

    if (!validateEmail(email)) {
      error.email = "Email must be in the correct format";
    }

    if (!ValidPassword(password)) {
      error.password = "Password is not strong enough";
    }

    if (Object.keys(error).length > 0) {
      setError(error);
    } else {
      setError({});
      const signinuser = {
        username,
        email,
        password,
      };

      dispatch(signin(signinuser));
      console.log(signinuser);
    }
  };

  return (
    <div>
      {/* banner */}
      <Box p={"100px 0px"} bgImg={banner}>
        <Heading fontSize={"36px"} color={"white"} textAlign={"center"}>
          Register
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
            Register
          </Box>
        </Box>
      </Box>

      {/* form */}
      <Box
        pb={"80px"}
        pt={"80px"}
        alignItems={"center"}
        // justifyContent={'center'}
        flexDirection={"column"}
        display={"flex"}
      >
        <Box
          boxShadow={"xl"}
          display={"flex"}
          flexDirection={"column"}
          // border={"2px solid #F79837"}
          textAlign={"center"}
          w={{ base: "320px", md: "500px", lg: "500px", xl: "500px" }}
          h={"500px"}
          justifyContent={"center"}
        >
          <Box>
            <Heading pb={8} fontSize={"35px"}>
              Register
            </Heading>
            <Box pb={5}>
              <FormLabel ps={5} fontSize={"14px"}>
                Username *
              </FormLabel>
              <Input
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                focusBorderColor="#F79837"
                w={"90%"}
              ></Input>
              {<p style={{ color: "red" }}>{error.username}</p>}
            </Box>
            <Box pb={5}>
              <FormLabel ps={5} fontSize={"14px"}>
                Email *
              </FormLabel>
              <Input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="#F79837"
                w={"90%"}
              ></Input>
              {<p style={{ color: "red" }}>{error.email}</p>}
            </Box>
            <Box pb={8}>
              <FormLabel ps={5} fontSize={"14px"}>
                Passwords *
              </FormLabel>
              <Input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="#F79837"
                w={"90%"}
              ></Input>
              {<p style={{ color: "red" }}>{error.password}</p>}
            </Box>
            <Button
              _hover={{
                bgColor: "white",
                color: "black",
                border: "1px solid black",
              }}
              bgColor={"black"}
              color={"white"}
              borderRadius={0}
              p={"16px 35px"}
              mb={7}
              onClick={handlesubmit}
            >
              REGISTER
            </Button>
          </Box>
          <Heading
            transition={"all 0.5s"}
            _hover={{ color: "#F79837", cursor: "pointer" }}
            textAlign={"start"}
            fontWeight={"semi-bold"}
            fontSize={"16px"}
            ps={5}
          >
            <Link to="/Login">Already Have Account?</Link>
          </Heading>
        </Box>
      </Box>

      <Foot />
    </div>
  );
};

export default Signin;
