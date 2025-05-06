import React, { useState } from 'react';
import styled from 'styled-components';

const FlipCard = ({ frontalText, contentBack, frontColor = '#ffffff', backColor = '#1e5631' }) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <CardContainer 
    className={`${flipped ? 'flipped-active' : ''} ${hovered ? 'hovered' : ''}`}
    onClick={() => setFlipped(!flipped)}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>

      <CardInner className={flipped ? 'flipped' : ''}>

        <CardFront $frontColor={frontColor}>
          <h2>{frontalText}</h2>
        </CardFront>

        <CardBack $backColor={backColor}>
          <p>{contentBack}</p>
        </CardBack>

      </CardInner>

    </CardContainer>
  );
};

export default FlipCard;

const CardContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 200px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
  transition: transform 0.3s ease, z-index 0.3s ease-in-out;

  &.hovered {
    z-index: 10;
    transform: scale(1.05);
  }

  &.flipped-active {
    z-index: 20;
  }
`;


const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: center center;
  transition: transform 0.6s;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

const SharedSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
`;

const CardFront = styled(SharedSide)`
  background-color: ${({ $frontColor }) => $frontColor};
  color: black;
`;

const CardBack = styled(SharedSide)`
  background-color: ${({ $backColor }) => $backColor};
  color: black;
  transform: rotateY(180deg);

`;
