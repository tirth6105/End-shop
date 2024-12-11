import React, { useState } from "react";
import HotProducts from "../Components/HotProducts";
import {
  Box,
  Button,
  Heading,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import fream from "../img/Frame.png";
import faltu from "../img/faltu.png";
import coin from "../img/coin.png";
import mundi from "../img/mundi.png";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
   function handelClick() {
     setIsOpen(!isOpen);
   }
  return (
    <div>
      <HotProducts />
      <div>
        {/* <Box
        display={"Flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgGradient={
          "linear-gradient(194.51deg, #27292C 16.82%, #000000 103.6%)"
        }
        h={"500px"}
        w={"500px"}
      >
        <Box
          bgRepeat={"no-repeat"}
          objectFit="cover"
          overflow={"hidden"}
          bgImg={fream}
          w={"450px"}
          h={"250px"}
          borderRadius={"40px"}
        >
          <Box
            display={"Flex"}
            gap={4}
            ms={7}
            mt={7}
            mb={5}
            alignItems={"center"}
          >
            <Box>
              <Box
                boxShadow={"18px 18px 20px 0px rgba(0, 0, 0, 0.25)"}
                w={"50px"}
                h={"50px"}
                borderRadius={"20px"}
                bg={"black"}
                display={"Flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img src={faltu} alt="" />
              </Box>
            </Box>
            <Box
              display={"Flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading textColor={"white"} fontSize={"24px"}>
                Push Notification
              </Heading>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} pb={5}>
            <RangeSlider
              defaultValue={[100]}
              min={0}
              w={"90%"}
              max={300}
              step={30}
            >
              <RangeSliderTrack bg="gray" h={"8px"} borderRadius={"10px"}>
                <RangeSliderFilledTrack
                  bgGradient={
                    "linear-gradient(90deg, #ff6900 0%, #ffc80e 100%)"
                  }
                  zIndex={"1"}
                />
              </RangeSliderTrack>
              <RangeSliderThumb
                zIndex={"10"}
                bgGradient={"linear-gradient(90deg, #ff6900 0%, #ffc80e 100%)"}
                boxSize={5}
                _focus={{ boxShadow: "0 0 5px 2px rgba(255, 200, 14, 0.4)" }}
                index={0}
              />
            </RangeSlider>
          </Box>
          <Box px={7} display={"Flex"} justifyContent={"space-between"}>
            <Box>
              <Heading fontSize={"14px"} textColor={"darkgray"}>
                250 Coins
              </Heading>
            </Box>
            <Box>
              <Heading fontSize={"14px"} textColor={"darkgray"}>
                500 Users
              </Heading>
            </Box>
          </Box>
          <Box
            mt={4}
            display={"Flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Box
              boxShadow={"18px 18px 20px 0px rgba(0, 0, 0, 0.25)"}
              bgColor={"black"}
              w={"100px"}
              h={"60px"}
              borderRadius={"18px"}
              display={"Flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={1}
            >
              <Box
                display={"Flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={4}
              >
                <Box w={"20px"} h={"20px"}>
                  <img src={coin} alt="" />
                </Box>
                <Box>
                  <Heading fontSize={"16px"} textColor={"white"}>
                    250
                  </Heading>
                </Box>
              </Box>
              <Box
                display={"Flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={4}
              >
                <Box w={"20px"} h={"20px"}>
                  <img src={mundi} alt="" />
                </Box>
                <Box>
                  <Heading fontSize={"16px"} textColor={"white"}>
                    125
                  </Heading>
                </Box>
              </Box>
            </Box>

            <Box
              boxShadow={"18px 18px 20px 0px rgba(0, 0, 0, 0.25)"}
              bgColor={"black"}
              w={"240px"}
              h={"60px"}
              borderRadius={"18px"}
              display={"Flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading
                className="bhangar"
                px={"50px"}
                fontSize={"20px"}
                textColor={"white"}
              >
                Send
              </Heading>
            </Box>
          </Box>
        </Box>

        
      </Box> */}
      </div>

      {/* <Box
        display={"Flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgGradient={
          "linear-gradient(194.51deg, #27292C 16.82%, #000000 103.6%)"
        }
        h={"500px"}
        w={"500px"}
      >
        <Box
          position={"relative"}
          bgRepeat="no-repeat"
          bgImage={fream}
          w="450px"
          h="420px"
          bgSize="cover"
          borderRadius={"40px"}
          filter={isOpen ? "opacity(40%)" : "opacity(100%)"}
        >
          
        </Box>
      </Box> */}
      {/* <Box
        px={7}
        pb={4}
        display={"Flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Heading fontSize={"18px"} textColor={"white"}>
            History
          </Heading>
        </Box>
        <Box>
          <Button
            _hover={{ bgColor: "#494745" }}
            bgColor={"#494745"}
            w={"100px"}
            h={"40px"}
            borderRadius={"40px"}
          >
            <Heading className="bhangar" fontSize={"18px"}>
              See All
            </Heading>
          </Button>
        </Box>
      </Box>

      <Box px={7}>
        <Box borderRadius={"20px"} bgColor={"#272524"} p={4}>
          <Box
            pb={2}
            display={"Flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom={"2px solid #494745"}
          >
            <Box textColor={"white"}>15 Feb 2024</Box>
            <Box>
              <Box
                display={"Flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={4}
              >
                <Box>
                  <Heading fontSize={"16px"} textColor={"white"}>
                    250
                  </Heading>
                </Box>
                <Box w={"20px"} h={"20px"}>
                  <img src={coin} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            py={2}
            display={"Flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom={"2px solid #494745"}
          >
            <Box textColor={"white"}>15 Feb 2024</Box>
            <Box>
              <Box
                display={"Flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={4}
              >
                <Box>
                  <Heading fontSize={"16px"} textColor={"white"}>
                    250
                  </Heading>
                </Box>
                <Box w={"20px"} h={"20px"}>
                  <img src={coin} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            py={2}
            display={"Flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom={"2px solid #494745"}
          >
            <Box textColor={"white"}>15 Feb 2024</Box>
            <Box>
              <Box
                display={"Flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={4}
              >
                <Box>
                  <Heading fontSize={"16px"} textColor={"white"}>
                    250
                  </Heading>
                </Box>
                <Box w={"20px"} h={"20px"}>
                  <img src={coin} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}
      {/* <Box
        pt={5}
        px={7}
        display={"Flex"}
        justifyContent={"center"}
        textColor={"white"}
      >
        <Button
          _hover={{ bgColor: "black" }}
          boxShadow={"18px 18px 20px 0px rgba(0, 0, 0, 0.25)"}
          bgGradient={
            "linear-gradient(194.51deg, #27292C 16.82%, #000000 103.6%)"
          }
          borderRadius={"25px"}
          w={"300px"}
          h={"80px"}
        >
          <Heading className="bhangar" fontSize={"20px"}>
            Book Slot
          </Heading>
        </Button>
      </Box>
      {isOpen ? (
        <Box
          // backdropFilter={"opacity(60%)"}
          position={"absolute"}
          w={"400px"}
          h={"200px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Box>
            <Image src={faltu} w={"40px"} />
          </Box>
          <Box
            mt={2}
            bgGradient={
              "linear-gradient(320.66deg, #181716 14.75%, #312c2a 84.81%)"
            }
            borderRadius={"15px"}
            w={"230px"}
            h={"50px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              color="transparent"
              backgroundClip="text"
              bgImage="linear-gradient(90deg, #ff6900 0%, #ffc80e 100%)"
              fontWeight="600"
              _hover={{ bgColor: "transparent" }}
            >
              Coming Soon ...
            </Button>
          </Box>
        </Box>
      ) : null}
      <Box
        bgColor={"black"}
        w={"500px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button onClick={handelClick}> Click </Button>
      </Box> */}
    </div>
  );
};

export default Product;
