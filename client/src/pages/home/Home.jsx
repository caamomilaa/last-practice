import { useContext } from 'react';
import Menu from '../../components/menu/Menu';
import Title from '../../components/ui/titles/Title';
import { AuthContext } from '../../lib/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const Home = ({ navigate }) => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<Menu />
			{!user && <Title type={'xl'}>Tu mejor cambio, está aquí</Title>}
			{user && <Title type={'xl'}>Hola, {user.email}</Title>}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsum,
				natus perspiciatis suscipit obcaecati beatae sit magni aliquid, nam
				facilis ea saepe? Aperiam at provident praesentium id fuga, similique
				asperiores?
			</p>
			{user && <button onClick={() => logOut(navigate)}>Cerrar sesión</button>}
		</>
	);
};
const logOut = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Home;
