import React, { Component } from 'react';

import './style/ExternalLinks.css';
class ExternalLinks extends Component {
  constructor(props) {
    super();
    this.state = {
        
    };
    
  }
  componentDidMount() {

  }
  
  render() {
    return (
      <div className="ExternalLinks col-sm-12">
      <a href={this.props.url} className="btn">
        <span className="d-flex flex-row justify-content-left">
          <i 
          style={{color: this.props.iconColor}} 
          className={this.props.icon + " d-flex flex-column justify-content-center"}>
          </i>
          <p>{this.props.name}</p>
        </span>
      </a>
    
 </div>
    );
  }
}

export default ExternalLinks;
