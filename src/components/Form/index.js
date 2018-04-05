import React, { Component } from 'react';
import styled from 'styled-components';
import CalculateValue from '../../utils/CalculateValue';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rValue: '', iValue:0};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({rValue: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({iValue: CalculateValue(this.state.rValue)});
    }

    render() {
      return (
        <div >
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter Roman Numerals:<br/>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <p> This equates to:</p>
            <div>{this.state.iValue}</div>
        </div>
      );
    }
  }

