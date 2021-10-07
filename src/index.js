import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

// styles
import "./index.css";
import "antd/dist/antd.css";
import "./Fonts/Font-stylesheet.css";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <Suspense fallback={<div className={"h-screen"}></div>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
