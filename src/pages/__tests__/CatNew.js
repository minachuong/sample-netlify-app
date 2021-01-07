import React from 'react' 
import ReactDOM from 'react-dom' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import CatNew from '../CatNew'

Enzyme.configure({ adapter: new Adapter() }) 

describe('CatNewComponent Tests', () => {
  it('initializes on the DOM', () => {
    const wrapper = document.createElement('div');

    ReactDOM.render(<CatNew />, wrapper);
  });
});