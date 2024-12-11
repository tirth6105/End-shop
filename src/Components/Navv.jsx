import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { IoReorderFourOutline } from "react-icons/io5";


const Navv = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    rmd: "38em", // ~608px
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <div>
      {/* header */}

      <Box>
        <Box
          bgColor={"#FEF5EF"}
          h={"80px"}
          alignItems={"center"}
          fontFamily={"sans-serif"}
          display={"flex"}
          justifyContent={{
            base: "space-between",
            md: "space-evenly",
            lg: "space-evenly",
            xl: "space-evenly",
          }}
        >
          <Box>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Box>

          <Box display={{ base: "block", md: "none", lg: "none", xl: "none" }}>
            <Button bgColor={"gray.200"} onClick={onOpen}>
              <IoReorderFourOutline />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Image w={"200px"} src={logo} alt="" />
                    <Button onClick={onClose}>X</Button>
                  </Box>
                </DrawerHeader>
                <DrawerBody>
                  <Box onClick={onClose} color={"#F79837"} py={3}>
                    <Link to="/">HOME</Link>
                  </Box>
                  <Box onClick={onClose} pb={3}>
                    <Link to="/Product">PRODUCT</Link>
                  </Box>
                  <Box onClick={onClose} pb={3}>
                    <Link to="/Cart">CART</Link>
                  </Box>
                  <Box onClick={onClose} pb={3}>
                    <Link to="/Signin">SIGNIN</Link>
                  </Box>
                  <Box onClick={onClose}>
                    <Link to="/Login">LOGIN</Link>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          <Box
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            fontWeight={"bold"}
            _hover={{ color: "#f79837", transition: "all 0.5s" }}
          >
            <Link fontSize={"14px"} to="/">
              Home
            </Link>
          </Box>

          <Box
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            fontWeight={"bold"}
            _hover={{ color: "#f79837", transition: "all 0.5s" }}
          >
            <Link to={"/Product"}>Shop</Link>
          </Box>

          <Box
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            fontWeight={"bold"}
            _hover={{ color: "#f79837", transition: "all 0.5s" }}
          >
            <Link to={"/Cart"}>Cart</Link>
          </Box>

          <Box
            display={{base:'none', md:'block', lg:'block', xl:'block'}}
            fontWeight={"bold"}
            _hover={{ color: "#f79837", transition: "all 0.5s" }}
          >
            <Link to={"/Signin"}>SignIn</Link>
          </Box>

          <Box
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            fontWeight={"bold"}
            _hover={{ color: "#f79837", transition: "all 0.5s" }}
          >
            <Link to={"/Login"}>LogIn</Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navv;
