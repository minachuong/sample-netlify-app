import { Component } from "react";
import './LightBulbApp.css'
import bulbsOn from '../../assets/bulbs--ON.jpeg'
import bulbsOff from '../../assets/bulbs--OFF.jpeg'

class LightBulbApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    }
  }

  switch = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    const bulbState = this.state.isOn;

    return (
      <div>
        <div onClick={this.switch}>
          { bulbState 
            ? <img src={ bulbsOn } alt="light bulbs on" />
            : <img src={ bulbsOff } alt="light bulbs off" />
          }
        </div>
      </div>
    );
  }
}

export default LightBulbApp;