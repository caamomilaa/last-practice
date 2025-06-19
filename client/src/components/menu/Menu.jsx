import { StyledDiv, StyledLi, StyledUl } from "./menu.styles"

const Menu = ()=>{
return(
    <>
    	<nav>
			<StyledUl>
                <StyledDiv>
				<StyledLi>Login</StyledLi>
				<StyledLi>Register</StyledLi>
                </StyledDiv>
				<StyledLi>Profile</StyledLi>
			</StyledUl>
		</nav>
    </>
)
}
export default Menu