import React, { Component } from 'react';

import './style.scss';

class CertUnit extends Component {
  render() {
    return (
      <div className='cert-unit col-xs-4 col-sm-4 col-md-4'>
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

export default CertUnit;
