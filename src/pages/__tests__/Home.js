import React from 'react' 
import ReactDOM from 'react-dom' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() }) 

describe('Home Tests', () => {
  it('initializes on the DOM', () => {
    const wrapper = document.createElement('div');

    ReactDOM.render(<Home />, wrapper);
  });
});