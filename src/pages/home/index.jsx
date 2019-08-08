/**
 * @desc 页面 - Home
 * @author rgy
 * @date 2019-08-05 10:53:21
 */

import "./index.less";
import React from "react";
import { render } from "react-dom";
import Header from "@components/Header";

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-home-wrapper">
        <Header current="home" />
        <div className="padding-wrapper">
          <h1>Welcome to Home</h1>
        </div>
      </div>
    )
  }
}

render(<Home />, document.getElementById("app"));
