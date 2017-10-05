import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');


//So hopefully we have a bunch of components and our 'state' is being managed in only
//one of them (the 'top' most, the one making the api call). Now lets build a 
//new component that has an <input> and <button> that can be clicked. Use
//react strap for the button and input. Now go to the 'top' most component and wrap your
//logic fetching all the weather api data into a method. Pass that method down
//into this new component and call it when the user clicks on the button. 

//This function will construct a new url string where you inject the city into
//the proper place (where bozeman is, look at the url var in Weather.js)
//Use state in this function to automatically update the table and iconWidget
//to reflect the changes. 

//You've pretty much a react app!!!!

class SearchBar extends Component{

}