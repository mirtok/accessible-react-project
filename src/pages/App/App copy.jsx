import React, { PureComponent, createRef } from 'react';
import '../../assets/global.css';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			formUser: {
				name: '',
				family: '',
				phone: '',
				email: ''
			},
			isEdit: false,
			editIndex: -1,
			formRef: createRef(),
            userList: [
                {"id":1645066753889,"name":"迁动","family":"吴","phone":"18847512436","email":"2541584wdwa@qq.com"},
                {"id":1645066753699,"name":"辉东","family":"吴","phone":"18847512436","email":"2541584wdwa@qq.com"}
            ]
		};
	}

	/**
	 * Sets the global font size
	 * @param {Number} flag
	 */
	pixSizeHandle = flag => {
		const docEl = window.document.documentElement;
		const currentSize = getComputedStyle(window.document.documentElement)['font-size'].replace('px', '');
		if (flag > 0) {
			docEl.style.fontSize = Number(currentSize) + 1 + 'px';
		} else {
			docEl.style.fontSize = Number(currentSize) - 1 + 'px';
		}
	};

	expandHandle = index => {
		const preUserList = [...this.state.userList];
		this.setState({
			userList: preUserList.map((item, idx) => {
				return idx === index ? { ...item, expand: !item['expand'] } : item;
			})
		});
	};

    updateCurrentContaces = (index,item) => {}
    
    addCurrentContaces = (item) => {}

	deleteCurrentContacts = (index) => {
		if (window.confirm('Are you sure you want to delete it')) {
            const userList = [...this.state.userList];
            userList.splice(index,1)
            this.setState({userList})
			window.alert('successfully delete');
		}
	};


	render() {
		const { userList } = this.state;
		return (
			<div className="app">
				<header className="app-header">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand font-weight-bold" href="#">
							联系人信息
						</a>
						<button
							className="navbar-toggler btn-sm"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon btn-sm"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<form className="form-inline my-2 my-lg-0 ml-auto">
								<button
									className="btn btn-success mr-1 font-action btn-sm"
									type="button"
									title="字体放大"
									onClick={() => this.pixSizeHandle(1)}>
									字体<i className="bi bi-zoom-in"></i>
								</button>
								<button
									className="btn btn-danger font-action btn-sm"
									type="button"
									title="字体缩小"
									onClick={() => this.pixSizeHandle(-1)}>
									字体<i className="bi bi-zoom-out"></i>
								</button>
							</form>
						</div>
					</nav>
				</header>
				<section className="container">
					<button className="btn btn-block btn-info font-action mt-3 mb-3" title="添加" onClick={() => this.props.history.push(`/add`)}>
						<i className="bi bi-send-plus pr-2"></i>添加
					</button>
				</section>
				<section className="container">
					<div className="w-100" id="accordionExample">
						{userList.map((item, index) => (
							<div className="card mb-3" key={index}>
								<div className="card-header d-flex justify-content-between">
									<span className="font-weight-bold">{item.family + item.name}</span>
									<div>
										<button
											className="pr-3 cubuttonrsor cursor user-select-none action-btn"
											title="更多信息"
											onClick={() => this.expandHandle(index)}>
											<i className="bi bi-justify"></i>
											{item['expand'] ? '折叠' : '更多'}
										</button>
										<button
											className="pr-3 cursor user-select-none action-btn"
											title="编辑"
											onClick={() => this.props.history.push(`/edit/${item.id}`)}>
											<i className="bi bi-pencil-square cursor"></i>编辑
										</button>
										<button className="cursor user-select-none action-btn" title="删除" onClick={() => this.deleteCurrentContacts(index)}>
											<i className="bi bi-trash3 cursor"></i>删除
										</button>
									</div>
								</div>
								<div className="card-body">
									<div className="w100">
										<span className="font-weight-bold">姓氏：</span>
										<span>{item.family}</span>
									</div>
									<div className="w100">
										<span className="font-weight-bold">电话：</span>
										<span>{item.phone}</span>
									</div>
									{item['expand'] && (
										<div>
											<div className="w100">
												<span className="font-weight-bold">邮箱：</span>
												<span>{item.email}</span>
											</div>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		);
	}
}
export default App;
