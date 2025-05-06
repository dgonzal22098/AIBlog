import styled from "styled-components";

const MainTitle = ({texto, color}) => {
  return (
    <Title color={color}>
        {texto}
    </Title>
  )
}

const Title = styled.h1`
  margin: 2rem 0 10rem 0;
  font-size: 3rem;
  color: #fff;
  text-align: center;
  text-shadow:
    0 0 5px ${props => props.color || '#00ff00'},  /* Color configurable */
    0 0 10px ${props => props.color || '#00ff00'},
    0 0 20px ${props => props.color || '#00ff00'},
    0 0 40px ${props => props.color || '#00ff00'},
    0 0 80px ${props => props.color || '#00ff00'};
  
  animation: flicker 3s infinite;

  @keyframes flicker {
    0%   { opacity: 1; text-shadow: 0 0 5px ${props => props.color || '#00ff00'}, 0 0 10px ${props => props.color || '#00ff00'}, 0 0 20px ${props => props.color || '#00ff00'}, 0 0 40px ${props => props.color || '#00ff00'}; }
    5%   { opacity: 0.4; text-shadow: none; }
    10%  { opacity: 1; text-shadow: 0 0 10px ${props => props.color || '#00ff00'}; }
    20%  { opacity: 0.3; text-shadow: none; }
    30%  { opacity: 1; text-shadow: 0 0 20px ${props => props.color || '#00ff00'}, 0 0 30px ${props => props.color || '#00ff00'}; }
    70%  { opacity: 1; }
    80%  { opacity: 0.6; text-shadow: none; }
    90%  { opacity: 1; }
    100% { opacity: 1; }
  }
`;

export default MainTitle