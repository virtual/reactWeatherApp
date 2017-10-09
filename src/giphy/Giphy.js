import React, {Component} from 'react';

export default class Giphy extends Component {
  constructor (props) {
    super(props);
    this.state = {
      imageURL: ''
    };
  }

  componentDidMount () {
    const fetch = require('node-fetch');
    // var printWidth = function (e) {
    //   if (e.data.image_width > 300) {
    //     console.log("image greater than 300");
    //   } else if(e.data.image_width === 300) {
    //     console.log("image is 300!");
    //   } else {
    //     console.log("image less than 300");
    //   }
    // };
    // let imageURL = '';
    fetch('http://api.giphy.com/v1/gifs/search?api_key=kTbvJKFeUYfzVYxpPTOI1ZjwsQq6afPZ&limit=1&q=' + this.props.desc).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      //this.setState({imageURL: 'is this working?'});
      this.setState({imageURL: 'http://media1.giphy.com/media/' + data.data[0].id+ '/giphy.gif' });
      console.log(this.state.imageURL);
    });
  }

  render () {
    return (
      <div>
        <img src={this.state.imageURL} alt={this.props.desc} />
      </div>
    );
  }
}
