import React from 'react' 
import ReactDOM from 'react-dom' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() }) 

describe('FooterComponent Tests', () => {
  it('initializes on the DOM', () => {
    const wrapper = document.createElement('div');

    ReactDOM.render(<Footer />, wrapper);
  });
});