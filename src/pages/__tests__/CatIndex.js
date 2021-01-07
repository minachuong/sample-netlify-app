// Imports React into our test file.
import React from 'react' 

// Imports react-dom into our test file.
import ReactDOM from 'react-dom' 

// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 

 // Imports in the component we are going to be testing. 
import CatIndex from '../CatIndex'

// Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() }) 

describe('CatIndexTests', () => {
  it('initializes CatIndex', () => {
    // Arrange
    const wrapper = document.createElement('div');
    // Act & Assert
    ReactDOM.render(<CatIndex />, wrapper);
  });

  it('displays a header', () => {
    // Arrange
    const catIndexComponent = shallow(<CatIndex />);
  
    // Act
  
    // Assert
    expect(catIndexComponent.find('h2').text()).toBe('All about cats');
  });
});

