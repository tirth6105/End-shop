import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import hp1 from "../img/hp1.png";
import hp2 from "../img/hp2.png";
import hp3 from "../img/hp3.png";
import hp4 from "../img/hp4.png";
import hp5 from "../img/hp5.png";
import hp6 from "../img/hp6.png";
import hp7 from "../img/hp7.png";
import hp8 from "../img/hp8.png";
import hhp1 from "../img/hhp1.png";
import hhp2 from "../img/hhp2.png";
import hhp3 from "../img/hhp3.png";
import hhp4 from "../img/hhp4.png";
import hhp5 from "../img/hhp5.png";
import hhp6 from "../img/hhp6.png";
import hhp7 from "../img/hhp7.png";
import hhp8 from "../img/hhp8.png";
import { useDispatch } from "react-redux";
import { add_cart } from "../Redux/Action";

const HotProducts = () => {
  const hotproduct = [
    {
      id: Date.now(),
      img: hp1,
      hoverimage: hhp1,
      title: "Blue Dress For Woman",
      price: 38,
    },
    {
      id: Date.now(),
      img: hp2,
      hoverimage: hhp2,
      title: "Woman Full Sliv Dresss",
      price: 39,
    },
    {
      id: Date.now(),
      img: hp3,
      hoverimage: hhp3,
      title: "Black T-Shirt For Woman",
      price: 18,
    },
    {
      id: Date.now(),
      img: hp4,
      hoverimage: hhp4,
      title: "Blue Dress For Woman",
      price: 38,
    },
    {
      id: Date.now(),
      img: hp5,
      hoverimage: hhp5,
      title: "Woman Full Sliv Dresss",
      price: 88,
    },
    {
      id: Date.now(),
      img: hp6,
      hoverimage: hhp6,
      title: "Blue Dress For Woman",
      price: 48,
    },
    {
      id: Date.now(),
      img: hp7,
      hoverimage: hhp7,
      title: "Black T-Shirt For Woman",
      price: 34,
    },
    {
      id: Date.now(),
      img: hp8,
      hoverimage: hhp8,
      title: "Blue Dress For Woman",
      price: 38,
    },
  ];
  const dispatch = useDispatch();

  const handlecart = (e) => {
    // console.log(e);
    dispatch(add_cart({ ...e, qty: 1 }));
  };
  return (
    <div>
      <Box mb={"80px"}>
        <Box textAlign={"center"}>
          <Heading fontWeight={"bold"} fontSize={"36px"}>
            HOT PRODUCT
          </Heading>
          <Heading
            py={3}
            mb={5}
            fontWeight={"500"}
            color={"#777C87"}
            fontSize={"16px"}
          >
            Mauris luctus nisi sapien tristique dignissim ornare
          </Heading>
        </Box>
        <Box
          mb={5}
          justifyContent={{
            base: "center",
            md: "center",
            xl: "center",
            lg: "center",
          }}
          gap={{ base: "20px", md: "15px", xl: "25px", lg: "15px" }}
          display={"grid"}
          gridTemplateColumns={{
            base: "95%",
            md: "31% 31% 31% ",
            xl: "23% 23% 23% 23%",
            lg: "23% 23% 23% 23%",
          }}
        >
          {hotproduct.map((e) => {
            return (
              <>
                <Box boxShadow={"md"} position={"relative"}>
                  <Image
                    position={"absolute"}
                    transition={"all 0.5s"}
                    _hover={{ opacity: "0" }}
                    src={e.img}
                  />
                  <Image opacity={"1"} src={e.hoverimage} />

                  <Heading
                    py={2}
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"semi-bold"}
                    transition={"all 0.5s"}
                    _hover={{ color: "#F79837", cursor: "pointer" }}
                  >
                    {e.title}
                  </Heading>
                  <Heading
                    pb={"3"}
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"bold"}
                  >
                    ${e.price}.00
                  </Heading>
                  <Box justifyContent={"center"} display={"flex"}>
                    <Link to="/Cart">
                      <Button
                        transition={"all 0.5s"}
                        _hover={{ color: "#F78937" }}
                        borderRadius={0}
                        border={"1px solid black"}
                        bgColor={"white"}
                        mb={"3"}
                        onClick={() => {
                          handlecart(e);
                        }}
                      >
                        Add To Cart
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </>
            );
          })}
          {/* <Box boxShadow="md" h={"auto"}>
            <Box position={"relative"}>
              <Image
                transition={"all 0.5s"}
                position={"absolute"}
                _hover={{ opacity: "0" }}
                src={hp1}
                alt=""
              />
              <Image opacity={1} height={"auto"} src={hhp1} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Blue Dress For Woman
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $38.00
              </Heading>
            </Box>
          </Box>
          <Box boxShadow="md" h={"auto"}>
            <Box position={"relative"}>
              <Image
                position={"absolute"}
                _hover={{ opacity: 0 }}
                transition={"all 0.5s"}
                alt=""
                src={hp2}
              />
              <Image height={"auto"} opacity={1} src={hhp2} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Woman Full Sliv Dresss
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $39.00
              </Heading>
            </Box>
          </Box>
          <Box boxShadow="md" h={"auto"}>
            <Box position={"relative"}>
              <Image
                position={"absolute"}
                _hover={{ opacity: 0 }}
                transition={"all 0.5s"}
                src={hp3}
                alt=""
              />
              <Image opacity={1} height={"auto"} src={hhp3} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Black T-Shirt For Woman
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $18.00
              </Heading>
            </Box>
          </Box>
          <Box
            display={{ md: "block", xl: "block", lg: "block" }}
            boxShadow="md"
            h={"auto"}
          >
            <Box position={"relative"}>
              <Image
                position={"absolute"}
                _hover={{ opacity: 0 }}
                transition={"all 0.5s"}
                src={hp4}
                alt=""
              />

              <Image opacity={1} height={"auto"} src={hhp4} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Blue Dress For Woman
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $38.00
              </Heading>
            </Box>
          </Box>
          <Box boxShadow="md" h={"auto"}>
            <Box position={"relative"}>
              <Image
                position={"absolute"}
                _hover={{ opacity: 0 }}
                transition={"all 0.5s"}
                src={hp5}
                alt=""
              />

              <Image height={"auto"} opacity={1} src={hhp5} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Woman Full Sliv Dresss
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $88.00
              </Heading>
            </Box>
          </Box>
          <Box boxShadow="md" h={"auto"}>
            <Box position={"relative"}>
              <Image
                position={"absolute"}
                _hover={{ opacity: 0 }}
                transition={"all 0.5s"}
                src={hp6}
                alt=""
              />
              <Image height={"auto"} opacity={1} src={hhp6} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Blue Dress For Woman
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $48.00
              </Heading>
            </Box>
          </Box>
          <Box boxShadow="md" h={"auto"}>
            <Box position={"relative"}>
              <Image
                position={"absolute"}
                _hover={{ opacity: 0 }}
                transition={"all 0.5s"}
                src={hp7}
                alt=""
              />
              <Image opacity={1} height={"auto"} src={hhp7} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Black T-Shirt For Woman
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $34.00
              </Heading>
            </Box>
          </Box>
          <Box
            display={{ md: "block", xl: "block", lg: "block" }}
            boxShadow="md"
            h={"auto"}
          >
            <Box position={"relative"}>
              <Image
                position={"absolute"}
                _hover={{ opacity: 0 }}
                transition={"all 0.5s"}
                src={hp8}
                alt=""
              />

              <Image opacity={1} height={"auto"} src={hhp8} alt="" />
            </Box>
            <Box py={4} textAlign={"center"}>
              <Heading
                transition={"all 0.5s"}
                _hover={{
                  color: "#F78937",
                  cursor: "pointer",
                }}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Blue Dress For Woman
              </Heading>
              <Heading pt={2} fontWeight={"bold"} fontSize={"16px"}>
                $38.00
              </Heading>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </div>
  );
};

export default HotProducts;
