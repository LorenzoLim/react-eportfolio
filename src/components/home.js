import React, { Component } from 'react';
import { css } from 'glamor';

let rule = css({
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 300px)': {
    color: 'green',
    ':hover': {
      color: 'yellow'
    }
  }
})

class Home extends Component {
  render() {
    return (
      <div {...rule}>
        Zomg
      </div>
    );
  }
}

export default Home;
