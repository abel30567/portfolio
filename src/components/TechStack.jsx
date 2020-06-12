import React, { Component } from 'react';

import './style/TechStack.css';
class TechStack extends Component {
  constructor(props) {
    super();
    this.state = {
        
    };
    
  }
  componentDidMount() {

  }
  
  render() {
    return (
        <div className="TechStack col-sm-12">
           <span className="d-flex flex-row justify-content-left"><i style={{color: this.props.iconColor}} className={this.props.icon}></i><p>{this.props.name}</p></span>
        </div>
    
    );
  }
}

export default TechStack;
