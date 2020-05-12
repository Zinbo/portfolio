import React, { Component } from 'react';

import './style.scss';

class SkillUnit extends Component {
  render() {
    return (
      <div className='skill-unit col-xs-4 col-sm-3 col-md-2'>
        <a href={this.props.link} target='_blank'>
          <div
            className='image'
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour,
            }}
          ></div>
        </a>
      </div>
    );
  }
}

export default SkillUnit;
