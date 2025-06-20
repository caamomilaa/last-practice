import { useContext, useEffect, useState } from 'react';
import Title from '../../components/ui/titles/Title';
import { AuthContext } from '../../lib/context/AuthContext';

const Profile = () => {
	const [isEditing, setIsEditing] = useState(false);
	console.log(isEditing);

	const { user } = useContext(AuthContext);
	return (
		<>
			<Title type={'l'}>Profile</Title>
			{!isEditing && (
				<>
					<p>Foto bonita</p>
					<p>Name:</p>
				</>
			)}
			{isEditing && (
				<>
					<p>Foto EDIT</p>
					<p>Name:EDIT</p>
				</>
			)}

			{/* <p>Email: {user.email}</p> */}
			<button onClick={() => setIsEditing(!isEditing)}>
				{!isEditing && 'Editar'}
				{isEditing && 'Guadar Cambios'}
			</button>
		</>
	);
};

//si recargo la pagina, user.email sale como null. entiendo que hay que hacer un async, pero no se donde

export default Profile;
