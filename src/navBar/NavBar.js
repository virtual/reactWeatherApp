import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import WeatherIcon from '../iconWidget/weatherIcon';

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
    console.log(this.props);
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'><WeatherIcon desc={this.props.weatherData.weather[0].description} /> Weather App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link className='nav-link' to='/'>Home</Link>
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
