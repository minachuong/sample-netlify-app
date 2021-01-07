import React, { useState } from 'react'
import { 
  Jumbotron,
  Container,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap'
import './Header.css'
import Footer from './Footer'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [inputDisabled, setInputDisabled] = useState(false);
  const toggleDisabledInput = () => setInputDisabled(!inputDisabled);

  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Cat Tinder</h1>
        <p className="lead">It's like Tinder but for cats.</p>
        <button id="disableInputButton" onClick={ toggleDisabledInput }>Disable Input</button>
        <label htmlFor="first">First Input</label>
        <input type="text" disabled={inputDisabled} id="first" className={ inputDisabled ? 'grey': 'blue'}/>

        <label htmlFor="second">Second Input</label>
        <input type="text" disabled={!inputDisabled} id="second" className={ !inputDisabled ? 'grey': 'blue'}/>
        <Footer />
        <Navbar light>
            <NavbarToggler onClick={ toggleNavbar } className="mr-2"/>
            <Collapse isOpen={ !collapsed } navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/catindex">See All the Cats</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/catnew">Create a New Cat</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </Container>
    </Jumbotron>
  );
}

export default Header;