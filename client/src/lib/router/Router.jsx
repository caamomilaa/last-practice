import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';
import Home from '../../pages/home/Home';

const Router = () => {
	const navigate = useNavigate();
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/home' element={<Home />} />
		</Routes>
	);
};
export default Router;
