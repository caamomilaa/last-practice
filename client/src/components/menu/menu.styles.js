import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
	padding: 24px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid aliceblue;
`;

const StyledNavLink = styled(NavLink)`
	color: aliceblue;
	font-size: 20px;
	font-weight: 600;
`;

const StyledDiv = styled.div`
	display: flex;
	gap: 16px;
`;

export { StyledUl, StyledNavLink, StyledDiv };
