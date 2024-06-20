import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <LeftSection>
        <img src="https://img.freepik.com/premium-photo/3d-render-metaverse-technology-background-with-blockchain-network-connections_685067-2639.jpg" alt="VR Experience" />
        <Title>Bringing Ideas To Our Reality</Title>
        <ExploreButton>Explore</ExploreButton>
      </LeftSection>
      <RightSection>
        <img src="https://img.freepik.com/premium-photo/3d-render-metaverse-technology-background-with-blockchain-network-connections_685067-2642.jpg?w=360" alt="Infographic" />
      </RightSection>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f3e6f3;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: auto;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

const ExploreButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #5b21b6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4c1d95;
  }
`;

const RightSection = styled.div`
  img {
    width: 300px;
    height: auto;
    transition: transform 0.5s ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
  }
`;
