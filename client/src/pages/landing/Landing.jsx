import { StyledDiv, StyledNavLink, StyledTitle } from './landing.styles';

const Landing = () => {
	return (
		<>
			<StyledDiv>
				<StyledTitle>Encuentra tu entrenador personal</StyledTitle>
				<StyledNavLink to='/home'>Acceder</StyledNavLink>
			</StyledDiv>
		</>
	);
};

export default Landing;
