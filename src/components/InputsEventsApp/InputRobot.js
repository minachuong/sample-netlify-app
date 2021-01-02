import { Component } from 'react'

class InputRobot extends Component {
  render () {
    return (
      <div>
        {this.props.pipe()}
      </div>
    );
  }
}

export default InputRobot;