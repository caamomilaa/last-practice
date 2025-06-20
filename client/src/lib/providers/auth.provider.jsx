import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../context/AuthContext';

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				setUser(user);
			} else {
				console.log('no user');
				setUser(null);
			}
		});
		return () => unsuscribe();
	}, []); //vigilante en use effect, que revisa si el ususario ha iniciado sesisión o se va.

	return (
		<AuthContext.Provider value={{ user: user, setUser: setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
