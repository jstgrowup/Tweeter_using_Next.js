import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../store/store";
import Footer from "./Footer";
import Navbar from "../Components/Navbar";
import PrivateRoute from "../Private/PrivateRoute";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
       
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
