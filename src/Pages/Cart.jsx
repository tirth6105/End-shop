import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_cart } from "../Redux/Action";
import { Link } from "react-router-dom";
import banner from "../img/log-banner.png";
import { ADD_QTY, REMOVE_CART, REMOVE_QTY } from "../Redux/ActionType";
import { MdDelete } from "react-icons/md";
import Foot from "../Components/Foot";

const Cart = () => {
  const { cart } = useSelector((store) => store.items);
  console.log(cart);
  const dispatch = useDispatch();

  const [totalprice, setTotalprice] = useState(0);

  const totalPrice = (data) => {
    const total = data.reduce((acc, crr) => {
      return acc + crr.price * crr.qty;
    }, 0);
    setTotalprice(total);
  };

  const handleremove = (id) => {
    dispatch(remove_cart(id));
  };

  useEffect(() => {
    totalPrice(cart);
    // console.log(cart);
  }, [cart]);

  const addQty = (data) => {
    dispatch({ type: ADD_QTY, payload: data });
  };

  const removeQty = (data) => {
    if (data.qty <= 0) {
      dispatch({ type: REMOVE_CART, payload: data.id });
    } else {
      dispatch({ type: REMOVE_QTY, payload: data });
    }
  };
  return (
    <div>
      {/* banner */}
      <Box p={"100px 0px"} bgImg={banner}>
        <Heading fontSize={"36px"} color={"white"} textAlign={"center"}>
          Cart
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
            Cart
          </Box>
        </Box>
      </Box>

      {/* cart-data */}

      <Box
        mt={"50px"}
        mb={"50px"}
        justifyContent={{
          base: "center",
          md: "center",
          xl: "center",
          lg: "center",
        }}
        display={{ base: "grid", md: "grid", lg: "grid", xl: "grid" }}
        gridTemplateColumns={{
          base: "100%",
          md: "90% ",
          lg: "80%",
          xl: "70%",
        }}
        gap={"10px"}
        overflow={"auto"}
        whiteSpace={"nowrap"}
      >
        <Table>
          <Tr fontSize={"16px"} bgColor={"#F79837"}>
            <Th color={"white"} textAlign={"center"}>
              Product
            </Th>
            <Th color={"white"} textAlign={"center"}>
              Title
            </Th>
            <Th color={"white"} textAlign={"center"}>
              Price
            </Th>
            <Th color={"white"} textAlign={"center"}>
              Quantity
            </Th>
            <Th color={"white"} textAlign={"center"}>
              Remove
            </Th>
          </Tr>
          {cart.map((el) => {
            return (
              <>
                <Tr>
                  <Td px={{ base: "0px" }}>
                    <Image
                      w={{
                        base: "120px",
                        md: "140px",
                        lg: "140px",
                        xl: "140px",
                      }}
                      h={{
                        base: "120px",
                        md: "140px",
                        lg: "140px",
                        xl: "140px",
                      }}
                      src={el.img}
                      alt=""
                    />
                  </Td>
                  <Td>
                    <Heading
                      py={2}
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"semi-bold"}
                    >
                      {el.title}
                    </Heading>
                  </Td>
                  <Td>
                    <Heading
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                      pb={"2"}
                    >
                      ${el.price}.00
                    </Heading>
                  </Td>
                  <Td>
                    <Box
                      alignItems={"center"}
                      display={"flex"}
                      // gridTemplateColumns={"10% 13% 10%"}
                      justifyContent={"center"}
                      pb={3}
                    >
                      <Button
                        onClick={() =>
                          removeQty({ id: el.id, qty: el.qty - 1 })
                        }
                      >
                        -
                      </Button>
                      <Heading px={3} fontSize={"20px"}>
                        {el.qty}
                      </Heading>

                      <Button
                        onClick={() => addQty({ id: el.id, qty: el.qty + 1 })}
                      >
                        +
                      </Button>
                    </Box>
                  </Td>
                  <Td>
                    <Box display={"flex"} justifyContent={"center"}>
                      <Button
                        transition={"all 0.5s"}
                        _hover={{ color: "#F79837" }}
                        bgColor={"white"}
                        borderRadius={0}
                        mb={3}
                        fontSize={"20px"}
                        onClick={() => handleremove(el.id)}
                      >
                        <MdDelete />
                      </Button>
                    </Box>
                  </Td>
                </Tr>
              </>
            );
          })}
        </Table>
      </Box>

      {/* <Box boxShadow={"md"}>
                <Image src={el.img} alt="" />
                <Heading
                  py={2}
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"semi-bold"}
                >
                  {el.title}
                </Heading>
                <Heading
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                  pb={"2"}
                >
                  ${el.price}.00
                </Heading>

                <Box
                  alignItems={"center"}
                  display={"grid"}
                  gridTemplateColumns={"10% 13% 10%"}
                  justifyContent={"center"}
                  pb={3}
                >
                  <Button
                    onClick={() => removeQty({ id: el.id, qty: el.qty - 1 })}
                  >
                    -
                  </Button>
                  <Heading ps={3} fontSize={"20px"}>
                    {el.qty}
                  </Heading>

                  <Button
                    onClick={() => addQty({ id: el.id, qty: el.qty + 1 })}
                  >
                    +
                  </Button>
                </Box>

                <Box display={"flex"} justifyContent={"center"}>
                  <Button
                    transition={"all 0.5s"}
                    _hover={{ color: "#F79837" }}
                    bgColor={"white"}
                    border={"1px solid black"}
                    borderRadius={0}
                    mb={3}
                    onClick={() => handleremove(el.id)}
                  >
                    REMOVE
                  </Button>
                </Box>
      </Box> */}

      {/* cart-total */}
      <Box mb={"80px"} display={"flex"} justifyContent={"center"}>
        <Box
          boxShadow={"md"}
          // border={'0.5px solid gray'}
          w={"700px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box width={"100%"}>
            <Box
              py={2}
              ps={2}
              fontSize={"16px"}
              fontWeight={"bold"}
              color={"white"}
              bgColor={"#F79837"}
              w={"100%"}
            >
              <Box>CART TOTAL</Box>
            </Box>

            <Box py={3} display={"flex"} justifyContent={"space-between"}>
              <Box
                ps={2}
                color={"#777C87"}
                fontWeight={"bold"}
                fontSize={"16px"}
              >
                Subtotal
              </Box>
              <Box>
                <Heading pe={2} fontSize={"18px"} color={"#777C87"}>
                  ${totalprice}.00
                </Heading>
              </Box>
            </Box>

            <Box py={2} display={"flex"} justifyContent={"space-between"}>
              <Box
                ps={2}
                color={"#777C87"}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
              >
                Shipping
                <span> Free</span>
              </Box>
              <Box
                pe={2}
                color={"#777C87"}
                fontWeight={"semi-bold"}
                fontSize={"16px"}
                textDecoration={"line-through"}
              >
                $15.00
              </Box>
            </Box>

            <hr />

            <Box py={3} display={"flex"} justifyContent={"space-between"}>
              <Box
                ps={2}
                color={"#777C87"}
                fontWeight={"bold"}
                fontSize={"20px"}
              >
                Total
              </Box>
              <Box>
                <Heading pe={2} fontSize={"18px"} color={"#777C87"}>
                  ${totalprice}.00
                </Heading>
              </Box>
            </Box>

            <Box textAlign={"end"} pb={3}>
              <Link to="/Payment">
                <Button
                  bgColor={"black"}
                  _hover={{ bgColor: "black" }}
                  color={"white"}
                  me={2}
                >
                  PROCEED TO PAYMENT
                </Button>
              </Link>
            </Box>

            <Box>
              <Link to="/">
                <Heading
                  textDecoration={"underline"}
                  pb={5}
                  color={"#777C87"}
                  ps={2}
                  fontSize={"14px"}
                >
                  Add more?
                </Heading>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Foot />
    </div>
  );
};

export default Cart;
