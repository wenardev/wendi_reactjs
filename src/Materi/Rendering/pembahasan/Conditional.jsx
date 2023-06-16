import React from "react";

export default class Conditional extends React.Component {
	state = {
		isLogin: true
	}

	render() {
		//const isLogin = false;
		/*
		let message = '';
		if(isLogin) {
			message = 'Anda sudah login'
		} else {
			message = 'Silahkan login terlebih dahulu'
		}
		*/
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 3000)

		return(
			<div>
				{ this.state.isLoading 
					? <h1>Loading...</h1> 
					: <h1>Selamat datang di kelas MERN</h1>
				}
			</div>
		)
	}
}