import React from "react";
import * as Validator from 'validatorjs';

const Input = ({ label, type, name, value, onChange }) => {
	return (
		<div>
			<label> {label}: </label>
			<br />
			<input type={type} name={name} value={value} onChange={onChange} />
			<br />
		</div>
	)
}

const ShowErrors = ({ errors }) => {
	return (
		<ul style={{ color: 'red', marginLeft: '-25px' }}>
			{
				errors.map((error, i) => <li key={i}>{error}</li>)
			}
		</ul>
	)
}

class FormRegistrasi extends React.Component {
	state = {
		nama: '',
		email: '',
		password: '',
		jenisKelamin: '',
		errors: []
	}

	handleSubmit = event => {
		event.preventDefault();
		const { nama, email, password, jenisKelamin } = this.state;

		let data = { nama, email, password, jenisKelamin };

		let rules = {
			nama: 'required',
			email: 'required|email',
			password: 'min:8|required',
			jenisKelamin: 'required'
		};

		let formRegistrasi = new Validator(data, rules);
		formRegistrasi.passes();
		this.setState({
			errors: [
				...formRegistrasi.errors.get('nama'),
				...formRegistrasi.errors.get('email'),
				...formRegistrasi.errors.get('password'),
				...formRegistrasi.errors.get('jenisKelamin')
			]
		});

		if (formRegistrasi.passes()) {
			alert(`
					nama: ${this.state.nama}
					email: ${this.state.email}
					password: ${this.state.password}
					jenisKelamin: ${this.state.jenisKelamin}
				`);
		}
	}

	handleJenisKelaminChange = event => {
		this.setState({ jenisKelamin: event.target.value });
	}

	render() {
		const style = {
			width: '400px',
			margin: '100px auto 0',
			border: '1px solid black',
			padding: '10px'
		}
		return (
			<div style={style}>
				{
					this.state.errors && <ShowErrors errors={this.state.errors} />
				}
				<h4>Registrasi Page</h4>
				<form onSubmit={this.handleSubmit}>
					<Input type="text" name="nama" label="Nama"
						value={this.state.nama} onChange={e => this.setState({ nama: e.target.value })} />
					<Input type="email" name="email" label="Email"
						value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
					<Input type="password" name="password" label="Password"
						value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />

					<label>Jenis Kelamin:</label>
					<br />
					<input type="radio" name="jenisKelamin" value="Laki-laki"
						checked={this.state.jenisKelamin === "Laki-laki"}
						onChange={this.handleJenisKelaminChange} /> Laki-laki
					<br />
					<input type="radio" name="jenisKelamin" value="Perempuan"
						checked={this.state.jenisKelamin === "Perempuan"}
						onChange={this.handleJenisKelaminChange} /> Perempuan
					<br />

					<button type="submit">Registrasi</button>
				</form>
			</div>
		)
	}
}

export default FormRegistrasi;
