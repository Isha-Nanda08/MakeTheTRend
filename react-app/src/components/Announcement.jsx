import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the running text animation
const marquee = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Create the Container component with necessary styling
const Container = styled.div`
  height: 30px;
  background-color: #c66927;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 10;
  overflow: hidden; /* Hide overflow to ensure the text runs within the container */
`;

// Create the MarqueeText component with animation
const MarqueeText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marquee} 8s linear infinite;
`;

const Announcement = () => {
  return (
    <Container>
      <MarqueeText>
        SUPER DEAL - FREE SHIPPING ON ORDERS ABOVE Rs 500
      </MarqueeText>
    </Container>
  );
};

export default Announcement;
