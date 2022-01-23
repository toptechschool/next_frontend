import React, { useEffect } from "react";
import store from "../store";
import { loadUser } from "../store/actions/auth";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
