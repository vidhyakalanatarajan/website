// src/components/MainContent.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Content>
        <Title>IDA - AR, VR and MR Company in India</Title>
        <Paragraph>
          We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Industry and Business With Immersive Technical solution with extensive and wide range of Imagination that becomes Possible.
        </Paragraph>
        <Paragraph>
          We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR (Augmented Reality), VR (Virtual Reality), MR (Mixed Reality) and XR (eXtended Reality). To reshape the entire future.
        </Paragraph>
        <Paragraph>Join Us into the Immersive Future</Paragraph>
        <LearnMoreButton>Learn more</LearnMoreButton>
      </Content>
      <Image src="https://cdn.prod.website-files.com/63fe5b1c322d2f50310b436a/65cd1795019bbb236bae3bf5_AR%20and%20VR%20in%20User%20Experience%20(UX)%20Design.webp" alt="Immersive Future" />
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f3e6f3;
`;

const Content = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  color: #6b21a8;
`;

const Paragraph = styled.p`
  color: #333;
  margin: 10px 0;
`;

const LearnMoreButton = styled.button`
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

const Image = styled.img`
  width: 400px;
  height: auto;
`;
