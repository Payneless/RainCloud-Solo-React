import React from "react";
import "./index.css";
import ReactDOM from "react-dom";

import { ModalProvider } from "./context/modal";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { restoreCSRF, csrfFetch } from "./store/csrf.js";
import App from "./App";
import * as sessionActions from "./store/session";

import configureStore from "./store";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
