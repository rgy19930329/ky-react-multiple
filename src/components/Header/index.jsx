/**
 * @desc 组件 - Header
 * @author rgy
 * @date 2019-08-08 15:58:20
 */

import "./index.less";
import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Icon } from "antd";
import { camelCase } from "./utils";
import classnames from "classnames";

export default class Header extends React.Component {

  static propTypes = {
    current: PropTypes.string,
  }

  static defaultProps = {
    current: 'home',
  }

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [
        'home',
        'list',
        'form-test',
      ]
    }
  }

  render() {
    const { dataSource } = this.state;
    const { current } = this.props;
    return (
      <div className="comp-header-wrapper">
        <Breadcrumb>
          <Breadcrumb.Item href="/home.html">
            <Icon type="home" />
          </Breadcrumb.Item>
          {dataSource && dataSource.map((item, index) => {
            return (
              <Breadcrumb.Item key={String(index)}>
                <a
                  href={`/${item}.html`} 
                  className={classnames({
                    "active": item === current,
                  })}
                >{camelCase(item)}</a> 
              </Breadcrumb.Item>
            )
          })}
        </Breadcrumb>
      </div>
    )
  }
}
