import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';
import { useState } from 'react';
import Title from '../../components/ui/titles/Title';

const Register = ({ navigate }) => {
	const [showPassword, setShowPassword] = useState();
	return (
		<>
			<Title type={'l'}>Register</Title>
			<form onSubmit={event => registerUser(event, navigate)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input name='name' type='text' />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input name='email' type='text' />
				</div>
				<div>
					<label htmlFor='password'>Contraseña</label>
					<input name='password' type={showPassword ? 'text' : 'password'} />
					<button type='button' onClick={() => setShowPassword(!showPassword)}>
						SHOW PASSWORD
					</button>
				</div>
				<input type='submit' value='Registrarse' />
			</form>
		</>
	);
};

const registerUser = async (event, navigate) => {
	event.preventDefault();
	const formData = event.target; //accedo al form
	const email = formData.email.value; //accedo al valor del e.target en email
	const password = formData.password.value; //lo mismo, accedo al valor de password

	try {
		//intenta lo siguiente:
		await createUserWithEmailAndPassword(auth, email, password);
		//createUserWithEmailAndPassword() => método dado por firebase

		//en cuanto tengas los datos disponibles, crea un usuario de mail + password. Le pasamos la autenticación (vigilante), para ver si ha inciado sesión antes el user y creamos user con email y password sacados del formulario.
		navigate('/home');
		//si lo de antes es true y está en orden, llévame al chat
	} catch (error) {
		console.log(error);
		//si no, dinos que error ocurre
	}
};
export default Register;
