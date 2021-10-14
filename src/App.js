import React from 'react';
import './style.css';
import styled from '@emotion/styled';
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 0.5rem 1rem;
  background-color: ${({ color }) => color};
  `;

export default function App() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {[...Array(1000).keys()].map((item) => (
        <Button color={'#' + Math.floor(Math.random() * 16777215).toString(16)}>
          {' '}
          Click Me{' '}
        </Button>
      ))}

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
