import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import banner from "../img/log-banner.png";
import Foot from "../Components/Foot";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Action";

const Login = () => {
  const {UserData} = useSelector((store) => store.User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const dispatch = useDispatch(); 
  const navigation = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const loginuser = {
      email: email,
      password: password,
    };
    const findUser = UserData.find((e) => {
      return e.email === email && e.password === password;
    });
    if (findUser) {
      // alert("login successful");
      navigation('/');
      dispatch(login(findUser));
      // console.log(findUser);
    } else {
      alert("email or password does not match");
    }
  };

  return (
    <div>
      {/* banner */}
      <Box p={"100px 0px"} bgImg={banner}>
        <Heading fontSize={"36px"} color={"white"} textAlign={"center"}>
          Login
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
            Login
          </Box>
        </Box>
      </Box>

      {/* form */}
      <Box
        pb={"80px"}
        pt={"80px"}
        alignItems={"center"}
        flexDirection={"column"}
        display={"flex"}
      >
        <Box
          boxShadow={"xl"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          w={{ base: "320px", md: "500px", lg: "500px", xl: "500px" }}
          h={"500px"}
          justifyContent={"center"}
        >
          <Box>
            <Heading pb={8} fontSize={"35px"}>
              Login
            </Heading>
            <Box pb={5}>
              <FormLabel ps={5} fontSize={"14px"}>
                Email *
              </FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="#F79837"
                w={"90%"}
              ></Input>
            </Box>
            <Box pb={8}>
              <FormLabel ps={5} fontSize={"14px"}>
                Passwords *
              </FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="#F79837"
                w={"90%"}
              ></Input>
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
              LOGIN
            </Button>
            <Heading
              transition={"all 0.5s"}
              _hover={{ color: "#F79837", cursor: "pointer" }}
              textAlign={"start"}
              fontWeight={"semi-bold"}
              fontSize={"16px"}
              ps={5}
            >
              <Link to="/Signin">Create Your Account?</Link>
            </Heading>
          </Box>
        </Box>
      </Box>

      <Foot />
    </div>
  );
};

export default Login;
