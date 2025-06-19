import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	padding: 1.5rem;
`;

const StyledTitle = styled.h2`
	color: #f9ca8d;
	font-size: 2rem;
	text-align: center;
`;

const StyledNavLink = styled(NavLink)`
	padding: 8px;
	border-radius: 4px;
	background-color: #f9ca8d;
	margin: 4px;
`;

export { StyledNavLink, StyledTitle, StyledDiv };
