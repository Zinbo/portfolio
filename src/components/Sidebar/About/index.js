import React, { Component } from 'react';

import './style.scss';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='image'></div>
        <div className='bio'>
          Programming enthusiast &amp;&amp;<br></br>
          Passionate clean coder &amp;&amp;<br></br>
          Video games geek &amp;&amp; <br></br>
          Avid non-fiction reader
          <div className='emoji'>👨🏻‍💻&nbsp;🧹&nbsp;🎮&nbsp;📚&nbsp;🏳️‍⚧️</div>
        </div>
      </div>
    );
  }
}

export default About;
