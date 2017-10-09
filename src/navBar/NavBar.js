import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  Link
} from 'react-router-dom';

export default class NavBar extends Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Weather App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link className='nav-link' to='/home'>Home</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/current-weather'>Current Weather</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/sunrise-report'>Sunrise Report</Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}
