import styled from "styled-components";

const MiddleCard = ({ bigText, smallText, color, backgroundPicture }) => {
  return (
    <Middle $url={backgroundPicture}>
      <div className="text">
        <BigTitle color={color}>{bigText}</BigTitle>
        <p>{smallText}</p>
      </div>
    </Middle>
  );
};

const Middle = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 5rem;
  padding-top: 3rem;
  box-sizing: border-box;
  background-image: ${({ $url }) => `url(${ $url })`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 400px;
    z-index: 3;
    position: relative;
    gap: 20px;
    p {
      font-weight: 300;
      color: white; /* o configurable */
    }
  }
`;

const BigTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #fff;
  text-shadow:
    0 0 5px ${props => props.color || '#00ffff'},
    0 0 10px ${props => props.color || '#00ffff'},
    0 0 20px ${props => props.color || '#00ffff'},
    0 0 40px ${props => props.color || '#00ffff'},
    0 0 80px ${props => props.color || '#00ffff'};
  animation: flicker 3s infinite;

  @keyframes flicker {
    0%   { opacity: 1; text-shadow: 0 0 5px ${props => props.color || '#00ffff'}, 0 0 10px ${props => props.color || '#00ffff'}; }
    5%   { opacity: 0.4; text-shadow: none; }
    10%  { opacity: 1; text-shadow: 0 0 10px ${props => props.color || '#00ffff'}; }
    20%  { opacity: 0.3; text-shadow: none; }
    30%  { opacity: 1; text-shadow: 0 0 20px ${props => props.color || '#00ffff'}; }
    70%  { opacity: 1; }
    80%  { opacity: 0.6; text-shadow: none; }
    90%  { opacity: 1; }
    100% { opacity: 1; }
  }
`;

export default MiddleCard;
