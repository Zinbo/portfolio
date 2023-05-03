import React, { Component } from 'react';

import './style.scss';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='image'></div>
        <div className='bio'>
          Passionate Programmer &amp;&amp;<br></br>
          Meticulous Clean Coder &amp;&amp;<br></br>
          Avid Reader
          <div className='emoji'>👨🏻‍💻&nbsp;🧹&nbsp;📚&nbsp;🎮</div>
        </div>
      </div>
    );
  }
}

export default About;
