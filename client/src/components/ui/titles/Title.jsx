import { StyledBigTitle, StyledMediumTitle, StyledSmallTitle } from "./styled.title"

const Title = ({type, children})=>{
    if(type=== 'xl') return <StyledBigTitle>{children}</StyledBigTitle>;
    if(type=== 'l') return <StyledMediumTitle>{children}</StyledMediumTitle>;
    if(type=== 'm') return <StyledSmallTitle>{children}</StyledSmallTitle>;
}
export default Title