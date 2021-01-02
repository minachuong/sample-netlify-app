import React, { Component } from 'react'
import InputRobot from './InputRobot'
import RobotPipes from './RobotPipes'

class InputsEventsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return(
      <React.Fragment>
        <input type='text' value={this.state.userInput} onChange={ this.handleChange } />
        <InputRobot pipe={() => RobotPipes.applyBlahPipe('BLAH',this.state.userInput)} />
        <InputRobot pipe={() => RobotPipes.applyPhrasePipe(this.state.userInput)} />
      </React.Fragment>
    );
  }

}

export default InputsEventsApp;