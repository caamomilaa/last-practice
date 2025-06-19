import Title from '../../components/ui/titles/Title';
import { StyledDiv, StyledNavLink } from './landing.styles';

const Landing = () => {
	return (
		<>
			<StyledDiv>
				<Title type={'xl'}>Encuentra tu entrenador personal</Title>
				<StyledNavLink to='/home'>Acceder</StyledNavLink>
			</StyledDiv>
		</>
	);
};

export default Landing;
