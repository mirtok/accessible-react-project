import React, { PureComponent, createRef } from 'react';
import '../../assets/global.css';

class AddPage extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			formUser: {
				name: '',
				family: '',
				phone: '',
				email: ''
			},
			userList: [],
			formRef: createRef()
		};
	}

	/**
	 * 设置全局字体大小
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

	handleSubmit = event => {
		this.props.addHandler(this.state.formUser);
		event.preventDefault();
	};

	valueChange = (e, key) => {
		const formUser = Object.assign({}, this.state.formUser, { [key]: e.target.value });
		this.setState({ formUser });
	};

	render() {
		const { formUser, formRef } = this.state;
		return (
			<div className="app">
				{/* <header className="app-header">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand font-weight-bold" href="###">
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
				</header> */}

				{/* 新增 */}
				<div className="container mt-3">
					<div className="card">
						<div className="card-header d-flex align-items-center">
							<button
								className="bi bi-arrow-left mr-2 cursor font-weight-bold back-icon btn"
								title="返回"
								style={{ lineHeight: 1, padding: '6px 0' }}
								onClick={() => this.props.changeShowPanel(0)}></button>
							<span>联系人信息（新增）</span>
						</div>
						<div className="card-body">
							<form ref={formRef} onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="name">姓名</label>
									<input
										required
										type="text"
										value={formUser.name}
										onChange={e => this.valueChange(e, 'name')}
										className="form-control"
										id="name"
										placeholder="请输入姓名"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="family">姓氏</label>
									<input
										required
										type="text"
										value={formUser.family}
										onChange={e => this.valueChange(e, 'family')}
										className="form-control"
										id="family"
										placeholder="请输入姓氏"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="phone">电话</label>
									<input
										required
										type="number"
										value={formUser.phone}
										onChange={e => this.valueChange(e, 'phone')}
										className="form-control"
										id="phone"
										placeholder="请输入电话"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">邮箱</label>
									<input
										required
										type="email"
										value={formUser.email}
										onChange={e => this.valueChange(e, 'email')}
										className="form-control"
										id="email"
										placeholder="请输入邮箱"
									/>
								</div>
								<button type="submit" className="btn btn-primary">
									保存
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default AddPage;
