/**
 * @desc 组件 - Section
 * @author rgy
 * @date 2019-08-08 16:44:30
 */

import "./index.less";
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class Section extends React.Component {

  static propTypes = {
    title: PropTypes.string, // 标题
    hasBorder: PropTypes.bool, // 是否有边框
  }

  static defaultProps = {
    title: "",
    hasBorder: true,
  }

  render() {
    const { title, titleSlot, children, hasBorder, className } = this.props;
    return (
      <div
        className={classnames({
          ["comp-section-wrapper"]: true,
          ["comp-section-wapper-border"]: hasBorder,
          [className]: !!className,
        })}
      >
        {title && (
          <div className="comp-section-title">
            <h3>{title}</h3>
            <div className="title-slot">{titleSlot}</div>
          </div>
        )}
        <div>{children}</div>
      </div>
    )
  }
}
