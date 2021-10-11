import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { GeneralImages } from '../Constants/Images';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Login.css';
import swal from 'sweetalert2';

const Login = () => {

	const cookies = new Cookies();
	const baseUrl = "https://vademecum.col1.co/db_catalogo/";

	const [data, setData] = useState({
		cedulas: ""
	})

	const iniciarSesion = async (event) => {
		event.preventDefault();

		// await axios.get(`${baseUrl}${data.cedula}`)
		await axios.get(baseUrl, { params: { cedulas: data.cedulas } })

			.then(response => {
				// console.log(response);
				return response.data;
			})
			.then(response => {
				// console.log(response);	
				let count = Object.keys(response).length;
				if (count >= 7) {
					var respuesta = response;
					console.log(respuesta);
					cookies.set('id', respuesta.id, { path: `/` });
					cookies.set('cedulas', respuesta.cedulas, { path: `/` });
					cookies.set('nombres', respuesta.nombres, { path: `/` });
					cookies.set('apellidos', respuesta.apellidos, { path: `/` });
					window.location.href = `.${RoutersLinks.home}`;
				} else {
					swal("¡Incorrecto!", "La cédula inscrita es incorrecta, verifica de nuevo", "error");
					alert("Cedula Incorrecta");
				}
			})
			.catch(error => {
				console.log(error);
			})

	}

	const handleChange = e => {
		const newData = { ...data };
		newData[e.target.name] = e.target.value;
		setData(newData);
		console.log(data);
	}

	useEffect(() => {
		if (cookies.get('cedulas')) {
			window.location.href = `${RoutersLinks.home}`;
		}
	})

	return (
		<div className='Login'>
			<img src={GeneralImages.DentistLogin} alt="" />
			{/* <form onSubmit={handleSubmit}> */}
			<form onSubmit={iniciarSesion}>
				<label>
					<AiOutlineUser />
					<input type="number" placeholder="Cédula" name="cedulas" onChange={handleChange} />
				</label>

				<label>
					<AiOutlineMail />
					<input type="text" placeholder="Correo Electronico" />
				</label>

				<input type="submit" value="Ingresar" />
			</form>
		</div>
	);
};

export default Login;