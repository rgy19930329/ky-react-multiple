/**
 * @desc 页面 - Home
 * @author rgy
 * @date 2019-08-05 10:53:21
 */

import "./index.less";
import React from "react";
import { render } from "react-dom";
import { Breadcrumb, Icon } from "antd";

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-wrapper page-home-wrapper">
        <Breadcrumb>
          <Breadcrumb.Item href="/home.html">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/home.html">
            <span>Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/list.html">
            <span>List</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1>Welcome to Home</h1>
      </div>
    )
  }
}

render(<Home />, document.getElementById("app"));
