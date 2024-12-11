import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import banner from "../img/banner.jpg";
import chhori from "../img/man.422a052d-removebg.png";
import chhori1 from "../img/chhori1-removebg-preview.png";
import chhori2 from "../img/chhori2-removebg-preview.png";
import chhori3 from "../img/chhori3-removebg-preview.png";
import chhora from "../img/chhora-removebg-preview.png";
import chhorikapakit from "../img/bag-removebg-preview.png";

import fashion from "../img/fashion.png";

import b1 from "../img/b1.png";
import b2 from "../img/b2.png";
import b3 from "../img/b3.png";
import insta1 from "../img/insta1.png";
import insta2 from "../img/insta2.png";
import insta3 from "../img/insta3.png";
import insta4 from "../img/insta4.png";
import insta5 from "../img/insta5.png";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import Foot from "../Components/Foot";
import { useDispatch } from "react-redux";
import { add_cart } from "../Redux/Action";
import { Link } from "react-router-dom";
import HotProducts from "../Components/HotProducts";
import { extendTheme } from "@chakra-ui/react";

const Home = () => {
  
  const instadata = [
    {
      img: insta1,
    },
    {
      img: insta2,
    },
    {
      img: insta3,
    },
    {
      img: insta4,
    },
    {
      img: insta5,
    },
  ];
  const dispatch = useDispatch();

  
  return (
    <div>
      {/* banner-section */}
      <Box
        overflow={"hidden"}
        display={"grid"}
        gridTemplateColumns={{
          ss: "100%",
          mm: "100%",
          sm: "100%",
          md: "60% 40%",
          lg: "60% 40%",
          xl: "50% 50%",
        }}
        bgRepeat={"no-repeat"}
        h={{
          ss: "90vh",
          mm: "90vh",
          sm: "90vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        }}
        bgImg={banner}
        alignItems={"center"}
        mb={"80px"}
        position={{
          ss: "relative",
          mm: "relative",
          sm: "relative",
          md: "static",
          lg: "static",
          xl: "static",
        }}
      >
        <Box
          position={{
            ss: "absolute",
            mm: "absolute",
            sm: "absolute",
            md: "static",
            lg: "static",
            xl: "static",
          }}
        >
          <Heading
            ps={10}
            fontWeight={"100"}
            fontSize={{
              ss: "60px",
              mm: "68px",
              sm: "68px",
              md: "100px",
              lg: "120px",
              xl: "130px",
            }}
          >
            LIVE FOR
          </Heading>

          <Heading
            ps={10}
            textAlign={"start"}
            fontWeight={"bold"}
            color={"white"}
            fontSize={{
              ss: "55px",
              mm: "65px",
              sm: "65px",
              md: "90px",
              lg: "120px",
              xl: "130px",
            }}
          >
            FASHION
          </Heading>

          <Box pb={5} ps={10} color={"white"} fontSize={"24px"}>
            <p>SAVE UP TO 50%</p>
          </Box>
          <Box ps={10}>
            <Button
              p={"16px 35px"}
              borderRadius={0}
              bgColor={"black"}
              color={"white"}
              transition={"all 0.5s"}
              _hover={{
                bgColor: "white",
                color: "black",
                border: "1px solid black",
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
        <Box>
          <Image src={chhori} alt="" />
        </Box>
      </Box>

      {/* offer-section */}
      <Box
        mb={"80px"}
        display={"grid"}
        gap={{ ss: "20px", mm: "20px", sm: "20px", xl: "25px", md: "10px" }}
        gridTemplateColumns={{
          ss: "95%",
          mm: "95%",
          sm: "95%",
          md: "48% 48%",
          lg: "31% 31% 31%",
          xl: "31% 31% 31%",
        }}
        justifyContent={"center"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Box>
            <Box
              bgColor={"gray.100"}
              bgRepeat={"no-repeat"}
              h={{
                ss: "180px",
                mm: "220px",
                sm: "220px",
                md: "220px",
                xl: "270px",
                lg: "200px",
              }}
              alignItems={"center"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box
                transition={"all 0.5s"}
                _hover={{
                  transform: "scale(1.05,1.05)",
                }}
              >
                <img src={chhori1} alt="" />
              </Box>
              <Box
                left={{
                  ss: "20px",
                  mm: "40px",
                  sm: "40px",
                  md: "50px",
                  xl: "50px",
                  lg: "20px",
                }}
                top={{
                  ss: "20px",
                  mm: "25px",
                  sm: "25px",
                  md: "35px",
                  xl: "70px",
                  lg: "25px",
                }}
                position={{
                  ss: "absolute",
                  mm: "absolute",
                  sm: "absolute",
                  md: "absolute",
                  xl: "absolute",
                }}
              >
                <Heading color={"#f78937"} fontSize={"22px"}>
                  OUTWEAR
                </Heading>
                <Heading fontSize={"36px"}>NEW</Heading>
                <Heading pb={"5"} fontSize={"22px"}>
                  COLLECTION
                </Heading>
                <Button
                  color={"white"}
                  bgColor={"black"}
                  borderRadius={0}
                  _hover={{
                    color: "black",
                    bgColor: "white",
                    border: "1px solid black",
                  }}
                >
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              bgColor={"gray.100"}
              bgRepeat={"no-repeat"}
              h={{
                ss: "180px",
                mm: "220px",
                sm: "220px",
                md: "220px",
                xl: "270px",
                lg: "200px",
              }}
              alignItems={"center"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box
                transition={"all 0.5s"}
                _hover={{
                  transform: "scale(1.05,1.05)",
                }}
              >
                <img src={chhori2} alt="" />
              </Box>
              <Box
                position={{
                  ss: "absolute",
                  mm: "absolute",
                  sm: "absolute",
                  md: "absolute",
                  xl: "absolute",
                }}
                left={{
                  ss: "20px",
                  mm: "40px",
                  sm: "40px",
                  md: "50px",
                  xl: "50px",
                  lg: "20px",
                }}
                top={{
                  ss: "20px",
                  mm: "25px",
                  sm: "25px",
                  md: "35px",
                  xl: "70px",
                  lg: "25px",
                }}
              >
                <Heading color={"#f78937"} fontSize={"22px"}>
                  SUMMER
                </Heading>
                <Heading fontSize={"36px"}>HOT</Heading>
                <Heading pb={5} fontSize={"22px"}>
                  COLLECTION
                </Heading>
                <Button
                  borderRadius={0}
                  color={"white"}
                  bgColor={"black"}
                  _hover={{
                    color: "black",
                    bgColor: "white",
                    border: "1px solid black",
                  }}
                >
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* pakit */}
        <Box
          bgColor={"gray.100"}
          bgRepeat={"no-repeat"}
          bgSize={"100%"}
          h={{
            ss: "400px",
            mm: "460px",
            sm: "460px",
            md: "460px",
            xl: "560px",
            lg: "420px",
          }}
          position={"relative"}
        >
          <Box
            transition={"all 0.5s"}
            _hover={{
              transform: "scale(1.05,1.05)",
            }}
          >
            <img src={chhorikapakit} alt="" />
          </Box>
          <Box
            position={{
              ss: "absolute",
              mm: "absolute",
              sm: "absolute",
              md: "absolute",
              xl: "absolute",
              lg: "absolute",
            }}
            left={{
              ss: "40px",
              mm: "40px",
              sm: "40px",
              md: "60px",
              xl: "60px",
              lg: "60px",
            }}
            top={{
              ss: "220px",
              mm: "280px",
              sm: "280px",
              md: "280px",
              xl: "310px",
              lg: "250px",
            }}
          >
            <Heading color={"#f78937"} fontSize={"36px"}>
              10% OFFER
            </Heading>
            <Heading fontSize={"22px"}>NO SELECTED</Heading>
            <Heading pb={5} fontSize={"22px"}>
              MODELS
            </Heading>
            <Button
              borderRadius={0}
              color={"white"}
              bgColor={"black"}
              _hover={{
                color: "black",
                bgColor: "white",
                border: "1px solid black",
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
        <Box
          display={{
            ss: "none",
            mm: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          }}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Box
            bgColor={"gray.100"}
            overflow={"hidden"}
            bgRepeat={"no-repeat"}
            bgSize={"100%"}
            h={{ xl: "270px", lg: "200px" }}
            position={"relative"}
          >
            <Box
              transition={"all 0.5s"}
              _hover={{
                transform: "scale(1.05,1.05)",
              }}
            >
              <img src={chhori3} alt="" />
            </Box>
            <Box
              position={{ xl: "absolute", lg: "absolute" }}
              left={{ xl: "50px", lg: "20px" }}
              top={{ xl: "70px", lg: "25px" }}
            >
              <Heading fontSize={"36px"}>NEW</Heading>
              <Heading pb={5} fontSize={"22px"} color={"#f78937"}>
                ARRIVALS
              </Heading>
              <Button
                borderRadius={0}
                color={"white"}
                bgColor={"black"}
                _hover={{
                  color: "black",
                  bgColor: "white",
                  border: "1px solid black",
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
          <Box
            overflow={"hidden"}
            bgColor={"gray.100"}
            bgRepeat={"no-repeat"}
            bgSize={"100%"}
            h={{ xl: "270px", lg: "200px" }}
            position={"relative"}
          >
            <Box
              transition={"all 0.5s"}
              _hover={{
                transform: "scale(1.05,1.05)",
              }}
            >
              <img src={chhora} alt="" />
            </Box>
            <Box
              position={{ xl: "absolute", lg: "absolute" }}
              left={{ xl: "50px", lg: "20px" }}
              top={{ xl: "70px", lg: "25px" }}
            >
              <Heading fontSize={"36px"}>HOT</Heading>
              <Heading fontSize={"22px"} pb={5} color={"#f78937"}>
                OFFER
              </Heading>
              <Button
                borderRadius={0}
                color={"white"}
                bgColor={"black"}
                _hover={{
                  color: "black",
                  bgColor: "white",
                  border: "1px solid black",
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* hot-product-section */}
      <HotProducts />

      {/* new-fashion */}
      <Box mb={"80px"}>
        <Box
          bgSize={"cover"}
          backgroundPosition={{
            ss: "40%",
            mm: "40%",
            sm: "40%",
            md: "80%",
            xl: "50%",
            lg: "100%",
          }}
          p={"115px 0px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={{
            ss: "center",
            mm: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          }}
          textAlign={"center"}
          bgImg={fashion}
          // gap={{lg:'25px'}}
        >
          <Box>
            <Heading
              fontWeight={"semi-bold"}
              fontSize={"18px"}
              color={"#f78937"}
            >
              TRENDING
            </Heading>
            <Heading color={"white"} fontSize={"36px"}>
              New Fashion
            </Heading>
            <Heading
              py={5}
              fontWeight={"semi-bold"}
              fontSize={"16px"}
              color={"white"}
            >
              Consectetur adipisicing elit. Dolores nisi distinctio magni, iure
              deserunt doloribus optio
            </Heading>
            <Button
              transition={"all 0.5s"}
              _hover={{
                bgColor: "black",
                color: "white",
              }}
              borderRadius={0}
              w={"150px"}
              h={"50px"}
              bgColor={"white"}
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
      </Box>

      {/* blog-section */}
      <Box mb={"80px"}>
        <Box textAlign={"center"}>
          <Heading fontWeight={"bold"} fontSize={"36px"}>
            LATEST BLOG
          </Heading>
          <Heading
            py={3}
            mb={5}
            fontWeight={"500"}
            color={"#777C87"}
            fontSize={"16px"}
          >
            {" "}
            Mauris luctus nisi sapien tristique dignissim ornare
          </Heading>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            ss: "97%",
            mm: "97%",
            sm: "97%",
            md: "31% 31% 31%",
            xl: "31% 31% 31%",
            lg: "31% 31% 31%",
          }}
          gap={"20px"}
          justifyContent={{
            ss: "center",
            mm: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          }}
        >
          <Box>
            <Box overflow={"hidden"}>
              <Image
                transition={"all 0.5s"}
                _hover={{
                  transform: "scale(1.05,1.05)",
                }}
                src={b1}
                alt=""
              />
            </Box>
            <Heading
              textDecoration={"underline"}
              py={4}
              color={"#f79837"}
              fontSize={"16px"}
            >
              24 February 2021
            </Heading>
            <Box pb={3} color={"#777C87"} fontSize={"16px"} fontWeight={"500"}>
              <span>
                No matter what you spend on your wardrobe, there are three
                pieces that can always elevate your look – shoes, handbags, and
                sunglasses.
              </span>
            </Box>
            <Button
              transition={"all 0.5s"}
              _hover={{
                bgColor: "white",
                color: "#F79837",
                border: "1px solid #F79837",
              }}
              border={"1px solid black"}
              bgColor={"white"}
              fontSize={"16px"}
            >
              Read More <FaArrowRight />
            </Button>
          </Box>
          <Box>
            <Box overflow={"hidden"}>
              <Image
                transition={"all 0.5s"}
                _hover={{
                  transform: "scale(1.05,1.05)",
                }}
                src={b2}
                alt=""
              />
            </Box>
            <Heading
              textDecoration={"underline"}
              py={4}
              color={"#f79837"}
              fontSize={"16px"}
            >
              29 jan 2018
            </Heading>
            <Box pb={3} color={"#777C87"} fontSize={"16px"} fontWeight={"500"}>
              <span>
                We spent spring break this year in California with Cody’s family
                and it was such a fun getaway. Cody’s family always goes hard on
                vacation
              </span>
            </Box>
            <Button
              transition={"all 0.5s"}
              _hover={{
                bgColor: "white",
                color: "#F79837",
                border: "1px solid #F79837",
              }}
              border={"1px solid black"}
              bgColor={"white"}
              fontSize={"16px"}
            >
              Read More <FaArrowRight />
            </Button>
          </Box>
          <Box>
            <Box overflow={"hidden"}>
              <Image
                transition={"all 0.5s"}
                _hover={{
                  transform: "scale(1.05,1.05)",
                }}
                src={b3}
                alt=""
              />
            </Box>
            <Heading
              animation={""}
              textDecoration={"underline"}
              py={4}
              color={"#f79837"}
              fontSize={"16px"}
            >
              14 February 2021
            </Heading>
            <Box pb={3} color={"#777C87"} fontSize={"16px"} fontWeight={"500"}>
              <span>
                STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s
                styles! They are all really flattering. but since these are
                wider leg I stuck with my usual size (25).
              </span>
            </Box>
            <Button
              transition={"all 0.5s"}
              _hover={{
                bgColor: "white",
                color: "#F79837",
                border: "1px solid #F79837",
              }}
              border={"1px solid black"}
              bgColor={"white"}
              fontSize={"16px"}
            >
              Read More <FaArrowRight />
            </Button>
          </Box>
        </Box>
      </Box>

      {/* insta-section */}
      <Box
        mb={{
          ss: "100px",
          mm: "100px",
          sm: "100px",
          md: "0px",
          lg: "00px",
          xl: "0px",
        }}
      >
        <Box textAlign={"center"}>
          <Heading
            fontWeight={"bold"}
            fontSize={{
              ss: "22px",
              mm: "28px",
              sm: "30px",
              md: "36px",
              lg: "36px",
              xl: "36px",
            }}
          >
            FOLLOW US INSTAGRAM
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
          display={"grid"}
          justifyContent={{
            ss: "center",
            mm: "center",
            sm: "center",
            xl: "center",
            md: "center",
            lg: "center",
          }}
          gridTemplateColumns={{
            ss: "100%",
            mm: "100%",
            sm: "100%",
            md: "19% 19% 19% 19% 19%",
            xl: "19% 19% 19% 19% 19%",
            lg: "19% 19% 19% 19% 19%",
          }}
          gap={{
            ss: "10px",
            mm: "10px",
            sm: "10px",
            xl: "10px",
            md: "px",
            lg: "5px",
          }}
        >
          {instadata.map((e) => {
            return (
              <>
                <Box h={"400px"} position={"relative"}>
                  <Box
                    transition={"all 0.5s"}
                    _hover={{
                      zIndex: "1",
                      opacity: "40%",
                    }}
                    position={{
                      ss: "absolute",
                      mm: "absolute",
                      sm: "absolute",
                      md: "absolute",
                      lg: "absolute",
                      xl: "absolute",
                    }}
                  >
                    <Image
                      ps={{
                        ss: "10px",
                        mm: "37px",
                        sm: "65px",
                        md: "0px",
                        lg: "0px",
                        xl: "0px",
                      }}
                      src={e.img}
                      alt=""
                    />
                  </Box>
                  <Box
                    zIndex={{
                      ss: "-1",
                      mm: "-1",
                      sm: "-1",
                      md: "-1",
                      lg: "-1",
                      xl: "-1",
                    }}
                    pt={{
                      ss: "150px",
                      mm: "150px",
                      sm: "150px",
                      md: "70px",
                      lg: "100px",
                      xl: "150px",
                    }}
                    ps={{
                      ss: "140px",
                      mm: "170px",
                      sm: "200px",
                      md: "50px",
                      lg: "80px",
                      xl: "130px",
                    }}
                    fontSize={"40px"}
                  >
                    <FaInstagram />
                  </Box>
                </Box>
              </>
            );
          })}
          {/* <Box
            position={{
              sm: "relative",
              md: "relative",
              lg: "relative",
              xl: "relative",
            }}
          >
            <Box>
              <Image
                _hover={{
                  zIndex: "1",
                  opacity: "40%",
                }}
                position={{
                  sm: "absolute",
                  md: "absolute",
                  lg: "absolute",
                  xl: "absolute",
                }}
                transition={"all 0.5s"}
                src={insta1}
                alt=""
              />
            </Box>
            <Box
              fontSize={"40px"}
              zIndex={{ sm: "-1", md: "-1", lg: "-1", xl: "-1" }}
              pt={{ sm: "150px", md: "120px", lg: "100px", xl: "150px" }}
              ps={{ sm: "130px", md: "110px", lg: "80px", xl: "130px" }}
            >
              <FaInstagram />
            </Box>
          </Box>
          <Box
            position={{ md: "relative", lg: "relative", xl: "relative" }}
            display={{ sm: "none", md: "block", lg: "block", xl: "block" }}
          >
            <Image
              _hover={{ zIndex: "1", opacity: "40%" }}
              position={{ md: "absolute", lg: "absolute", xl: "absolute" }}
              transition={"all 0.5s"}
              src={insta2}
              alt=""
            />
            <Box
              pt={{ md: "120px", lg: "100px", xl: "150px" }}
              ps={{ md: "110px", lg: "80px", xl: "130px" }}
              fontSize={"40px"}
              zIndex={{ md: "-1", lg: "-1", xl: "-1" }}
            >
              <FaInstagram />
            </Box>
          </Box>
          <Box
            position={{ md: "relative", lg: "relative", xl: "relative" }}
            display={{ sm: "none", md: "block", lg: "block", xl: "block" }}
          >
            <Image
              _hover={{ zIndex: "1", opacity: "40%" }}
              position={{ md: "absolute", lg: "absolute", xl: "absolute" }}
              transition={"all 0.5s"}
              src={insta3}
              alt=""
            />
            <Box
              pt={{ md: "120px", lg: "100px", xl: "150px" }}
              ps={{ md: "110px", lg: "80px", xl: "130px" }}
              fontSize={"40px"}
              zIndex={{ md: "-1", lg: "-1", xl: "-1" }}
            >
              <FaInstagram />
            </Box>
          </Box>
          <Box
            position={{ md: "relative", lg: "relative", xl: "relative" }}
            display={{ sm: "none", md: "none", xl: "block", lg: "block" }}
          >
            <Image
              position={{ md: "absolute", lg: "absolute", xl: "absolute" }}
              _hover={{ zIndex: "1", opacity: "40%" }}
              transition={"all 0.5s"}
              src={insta4}
              alt=""
            />
            <Box
              pt={{ lg: "100px", xl: "150px" }}
              ps={{ lg: "80px", xl: "130px" }}
              fontSize={"40px"}
              zIndex={{ md: "-1", lg: "-1", xl: "-1" }}
            >
              <FaInstagram />
            </Box>
          </Box>
          <Box
            position={{ md: "relative", lg: "relative", xl: "relative" }}
            display={{ sm: "none", md: "none", xl: "block", lg: "block" }}
          >
            <Image
              _hover={{ zIndex: "1", opacity: "40%" }}
              position={{ md: "absolute", lg: "absolute", xl: "absolute" }}
              transition={"all 0.5s"}
              src={insta5}
              alt=""
            />
            <Box
              pt={{ lg: "100px", xl: "150px" }}
              ps={{ lg: "80px", xl: "130px" }}
              fontSize={"40px"}
              zIndex={{ md: "-1", lg: "-1", xl: "-1" }}
            >
              <FaInstagram />
            </Box>
          </Box> */}
        </Box>
      </Box>

      <Foot />
    </div>
  );
};

export default Home;
