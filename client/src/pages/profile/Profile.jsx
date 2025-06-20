import { useContext, useEffect, useState } from "react";
import Title from "../../components/ui/titles/Title";
import { AuthContext } from "../../lib/context/AuthContext";

const Profile = () => {

	const [isEditing, setIsEditing]= useState()

	useEffect(()=>{
	},[])
	
	const { user } = useContext(AuthContext);
	return (
		<>
			<Title type={'l'}>Profile</Title>
			<p>Foto bonita</p>
			<p>Name:</p>
			{/* <p>Email: {user.email}</p> */}
			<button onClick={setIsEditing(!isEditing)}>Editar</button>
		</>
	);
};

//si recargo la pagina, user.email sale como null. entiendo que hay que hacer un async, pero no se donde

export default Profile;
