import React, { Component } from 'react'
import './MadlibInput.css'

class MadlibInput extends Component {
  render() {
    return (
      <div className="MadlibInput__Container">
        <label className="MadlibInput__Label">
          {this.props.label}
        </label>
        <input 
          className="MadlibInput__Input"
          type="text" 
          name={this.props.name}
          value={this.props.value}
          onChange={ this.props.onChange }
        />
      </div>
    );
  }
}

export default MadlibInput;