/**
 * @desc 页面 - List
 * @author rgy
 * @date 2019-08-05 11:54:12
 */

import "./index.less";
import React from "react";
import { render } from "react-dom";
import { Table } from "antd";
import { fetch } from "@utils";
import Header from "@components/Header";
import CellLimit from "@components/CellLimit";

class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      total: 0,
      current: 1,
      loaded: false,
    };
  }

  state = {
		dataSource: [],
		total: 0,
		current: 1,
		loaded: false,
	};

	componentDidMount() {
		this.dataLoad(1);
	}

  /**
	 * 数据加载
	 * @param {Number} current 当前页码
	 */
	dataLoad = async (current) => {
    this.setState({ loaded: false });
		const result = await fetch({
			url: "/example/mock",
			data: {
				current,
			}
		});
		if(result.success) {
			const { projects, total } = result.data;
			this.setState({
				dataSource: projects,
				total,
				loaded: true,
			});
		}
  };
  
  /**
	 * 创建表格列模式
	 */
	createColumns = () => {
		return [
			{
				title: "name",
				dataIndex: "name",
				key: "name",
				render: (value, record) => {
					const { id } = record;
					return (
						<CellLimit width={100}>
							<a href={`#/detail/${id}`}>{value}</a>
						</CellLimit>
					)
				}
			},
			{
				title: "email",
				dataIndex: "email",
				key: "email",
				render: (text) => {
					return <CellLimit width={150}>{text}</CellLimit>
				}
			},
			{
				title: "address",
				dataIndex: "address",
				key: "address",
				render: (text) => {
					return <CellLimit width={150}>{text}</CellLimit>
				}
			},
			{
				title: "string",
				dataIndex: "string",
				key: "string",
			},
			{
				title: "age",
				dataIndex: "number",
				key: "number",
			}
		];
  };
  
  /**
	 * 创建分页器
	 */
	createPagination = () => {
		return {
			showQuickJumper: true,
			total: this.state.total,
			pageSize: 10,
			current: this.state.current,
			showSizeChanger: false,
			onChange: async (current) => {
				this.dataLoad(current);
				this.setState({ current });
			}
		}
	};

  render() {
    return (
      <div className="page-wrapper page-list-wrapper">
        <Header current="list" />
        <div className="padding-wrapper">
					<div className="list-wrapper">
						<Table
							rowKey={record => record.email}
							columns={this.createColumns()}
							dataSource={this.state.dataSource}
							pagination={this.createPagination()}
							loading={!this.state.loaded}
							locale={{ emptyText: "暂无数据" }}
						/>
					</div>
        </div>
      </div>
    )
  }
}

render(<List />, document.getElementById("app"));