import React from 'react' 
import ReactDOM from 'react-dom' 
import Enzyme, { shallow, mount, render } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Header from '../Header'
import mockReactstrap from 'reactstrap'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() }) 

// describe('HeaderComponent Tests', () => {
  // it('initializes on the DOM', () => {
  //   const wrapper = document.createElement('div');

  //   ReactDOM.render(<Header />, wrapper);
  // });

jest.mock('../Footer', () => {
  return () => (<div id="mockFooter">MockFooter</div>);
});

let headerComponent;

describe('When Header Component initializes', () => {
  beforeEach(() => {
    // headerComponent = shallow(<Header />); // renders only one level (doesn't render child nodes)
    headerComponent = shallow(<Header />); // uses DOM to render component and exposes inner implementation of child components
  });

  it('displays a header', () => {
    // Arrange
    // const headerComponent = shallow(<Header />);
    // Act

    // Assert
    expect(headerComponent.find('h1').text()).toBe('Cat Tinder');
    expect(headerComponent.find('p').text()).toBe("It's like Tinder but for cats.");
    expect(headerComponent.find('input#first').props().disabled).toBe(false);
    expect(headerComponent.find('input#first').hasClass('blue')).toBe(true);
    expect(headerComponent.find('input#first').props().type).toBe('text');
    expect(headerComponent.find('input#second').props().disabled).toBe(true);
    expect(headerComponent.find('input#second').props().type).toBe('text');
    // expect(headerComponent.find('Footer').text()).toBe('<Footer />'); // passes if shallow-rendered
    // expect(headerComponent.find('Footer').text()).toBe("This is a footer."); // passes if deeply-rendered
    expect(headerComponent.find('#mockFooter').text()).toBe('MockFooter');
  });

  it('disables the input when the button is clicked', () => {
    // Arrange
    // const headerComponent = shallow(<Header />);

    // Act
    const button = headerComponent.find('#disableInputButton');
    button.simulate('click');

    // Assert
    expect(headerComponent.find('input#first').props().disabled).toBe(true);
    expect(headerComponent.find('input#second').props().disabled).toBe(false);
  });


});
  