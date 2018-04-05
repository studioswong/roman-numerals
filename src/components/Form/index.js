import React from 'react';
import CalculateValue from '../../utils/CalculateValue';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rValue: '', iValue:0, hasError: false};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      // log the error to an error reporting service
      console.log('Error', error, info);
    }

    handleChange(event) {
      this.setState({rValue: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({iValue: CalculateValue(this.state.rValue)});
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
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

