import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import customTheme from "../src/Pages/Home";
import { extendTheme } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  breakpoints: {
    base: "0px",
    ss:"320px",
    mm:"375px",
    sm: "425px", // 480px
    md: "768px", // 768px
    lg: "1024px", // 992px
    xl: "1440px", // 1280px
    "2xl": "96em", // 1536px}
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
