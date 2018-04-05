import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Form from '../Form';
const FormDiv = styled.div`
  padding: 16px;
`;

const AppDiv = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 120px;
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <header>
          <Logo src={logo} alt="logo" />
          <h1>Roman Numerals Convertor</h1>
        </header>
        <FormDiv><Form /></FormDiv>
      </AppDiv>
    );
  }
}

export default App;
