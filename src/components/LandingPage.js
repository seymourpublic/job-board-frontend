// src/components/LandingPage.js

import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  background-color: #f5f5f5;
  padding: 50px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <Title>Welcome to IT Job Board</Title>
      <Description>Find the perfect IT job for you. Start your career today!</Description>
      <Button>Get Started</Button>
    </LandingPageContainer>
  );
}

export default LandingPage;
