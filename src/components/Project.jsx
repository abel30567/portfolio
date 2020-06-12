import React, { Component } from 'react';
import TechStack from './TechStack';
import ExternalLinks from './ExternalLinks';
import MediaQuery from 'react-responsive';
import './style/Project.css';
class Project extends Component {
  constructor(props) {
    super();
    this.state = {
        
    };
    
  }
  componentDidMount() {
    // console.log(this.props)
  }
  
  render() {
    return (
        <div className="Project row">
          <MediaQuery query="(max-device-width: 767px)">
          <div className="col-xs-12 col-md-6 mainImg d-flex flex-column justify-content-center">
           <a href={this.props.mainHref} className="btn"> <img style={{backgroundColor: this.props.bkgImg}} src={this.props.img} /></a>
           </div>
          </MediaQuery>
           <div className="col-xs-12 col-md-6 writtenDesc">
            <a href={this.props.mainHref} className="btn"><h3>{this.props.title}</h3></a>
            <p>{this.props.description}</p>
           </div>
           <MediaQuery query="(min-device-width: 768px)">
          <div className="col-md-6 mainImg d-flex flex-column justify-content-center">
           <a href={this.props.mainHref} className="btn"> <img style={{backgroundColor: this.props.bkgImg}} src={this.props.img} /></a>
           </div>
          </MediaQuery>
           <div className="col-xs-12 col-md-6 techContainer">
             <h4>Technology Used</h4>
             {this.props.tech.map((item, i) => (
               <TechStack
                key={i + 'tec'}
                name={item.name}
                icon={item.icon}
                iconColor={item.iconColor}
               />
             ))}
           </div>
           <div className="col-md-6 linksContainer">
             <h4>Links</h4>
             {this.props.links.map((link,i) => (
               <ExternalLinks
                key={i + 'link'}
                name={link.name}
                icon={link.icon}
                url={link.url}
                iconColor={link.iconColor}
               />
             ))}
           </div>
        </div>
    
    );
  }
}

export default Project;
