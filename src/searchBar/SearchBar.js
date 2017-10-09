import React, { Component } from 'react';
import { Button, InputGroup, Input } from 'reactstrap';

// So hopefully we have a bunch of components and our 'state' is being managed in only
// one of them (the 'top' most, the one making the api call). Now lets build a 
// new component that has an <input> and <button> that can be clicked. Use
// react strap for the button and input. Now go to the 'top' most component and wrap your
// logic fetching all the weather api data into a method. Pass that method down
// into this new component and call it when the user clicks on the button. 

// This function will construct a new url string where you inject the city into
// the proper place (where bozeman is, look at the url var in Weather.js)
// Use state in this function to automatically update the table and iconWidget
// to reflect the changes. 

// You've pretty much a react app!!!!

class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange (event) {
    console.log('handle change called');
   this.setState({value: event.target.value});
  }

  handleClick() {
   // console.log('helloooooo')
   // console.log(this.state.value)
   if (this.state.value !== '') {
    this.props.fetchWeatherData(this.state.value);
   }
  }


  render () {
    //console.log(this.props);
    return (
      <div className="cityform">
        <InputGroup>
          <Input placeholder='City Name' value={this.state.value} onChange={this.handleChange} />
        </InputGroup>
        <Button onClick={this.handleClick} color='primary'>Update</Button>
      </div>
    );
  }
}

export default SearchBar;
