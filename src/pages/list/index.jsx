/**
 * @desc 页面 - List
 * @author rgy
 * @date 2019-08-05 11:54:12
 */

import "./index.less";
import React from "react";
import { render } from "react-dom";

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-list-wrapper">
        列表页
        <br />
        <a href="/home.html">主页</a>
        <br />
        <a href="/home.html">主页</a>
        <br />
        <a href="/home.html">主页2</a>
      </div>
    )
  }
}

render(<List />, document.getElementById("app"));