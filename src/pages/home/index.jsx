/**
 * @desc 页面 - Home
 * @author rgy
 * @date 2019-08-05 10:53:21
 */

import "./index.less";
import React from "react";
import { render } from "react-dom";

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-home-wrapper">
        主页
        <a href="/list.html">列表页</a>
      </div>
    )
  }
}

render(<Home />, document.getElementById("app"));
