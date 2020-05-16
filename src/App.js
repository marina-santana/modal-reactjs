import React from "react";
import "./App.css";
import Page from "./pages";
import store from "./store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
