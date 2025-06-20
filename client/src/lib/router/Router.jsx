import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import Profile from '../../pages/profile/Profile';

const Router = () => {
	const navigate = useNavigate();
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/home' element={<Home navigate={navigate} />} />
			<Route path='/login' element={<Login navigate={navigate} />} />
			<Route path='/register' element={<Register navigate={navigate} />} />
			<Route path='/profile' element={<Profile navigate={navigate} />} />
		</Routes>
	);
};
export default Router;
