import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import React, { Component } from "react";
import ReactDom from "react-dom";

class AppContainer extends Component {
  render() {
    return (
      <React.StrictMode>
        <h1>Hello</h1>
      </React.StrictMode>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
