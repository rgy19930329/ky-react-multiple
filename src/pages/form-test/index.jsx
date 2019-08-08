/**
 * @desc 页面 - FormTest
 * @author rgy
 * @date 2019-08-08 15:51:50
 */

import "./index.less";
import React from "react";
import { render } from "react-dom";
import { Label, EnumSelect } from "nice-ui";
import Header from "@components/Header";
import Section from "@components/Section";
import { fetch } from "@utils";

class FormTest extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-form-test-wrapper">
        <Header current="form-test" />
        <div className="padding-wrapper">
          <Section title="iconfonts">
            <a
              href="https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=1336454&keyword="
              target="_blank"
            ><i className="iconfont icon-zhuye"></i></a><i className="split"></i>
            <i className="iconfont icon-shezhi"></i><i className="split"></i>
            <i className="iconfont icon-zan"></i><i className="split"></i>
            <i className="iconfont icon-anquansuo"></i><i className="split"></i>
            <i className="iconfont icon-anquanfangwen"></i><i className="split"></i>
            <i className="iconfont icon-geren"></i>
          </Section>
          <Section title="Lable Test">
            <Label />
          </Section>
          <Section title="EnumSelect Test">
            <EnumSelect
              placeholder="请选择"
              style={{width: 200}}
              createPromise={() => fetch({
                url: "/example/fruits",
              }).then(res => res.data.list)}
            />
          </Section>
        </div>
      </div>
    )
  }
}

render(<FormTest />, document.getElementById("app"));