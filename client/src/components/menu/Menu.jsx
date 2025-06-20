import { useContext } from 'react';
import { AuthContext } from '../../lib/context/AuthContext';
import { StyledDiv, StyledNavLink, StyledUl } from './menu.styles';

const Menu = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<nav>
				<StyledUl>
					<StyledDiv>
						{!user && (
							<>
								<li>
									<StyledNavLink to='/login'>Login</StyledNavLink>
								</li>
								<li>
									<StyledNavLink to='/register'>Register</StyledNavLink>
								</li>
							</>
						)}
					</StyledDiv>
					{user && (
						<li>
							<StyledNavLink to='/profile'>Profile</StyledNavLink>
						</li>
					)}
				</StyledUl>
			</nav>
		</>
	);
};
export default Menu;
