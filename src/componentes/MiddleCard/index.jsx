import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;
    background-image: ${({ $url }) => `url(${ $url })`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    filter: grayscale(100%) brightness(50%);
`
const MiddleCard = ({url}) => {
  
    return <Card $url={url}/>
}

export default MiddleCard;