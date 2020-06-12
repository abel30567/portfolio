import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import data from '../data/portfolio';
import Project from '../components/Project';
import './style/Portfolio.css';
class Portfolio extends Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="Portfolio">
        <Navbar 
            page='portfolio' 
            history={this.props.history}
        />
        <div className="portfolio-row row">
          <div className="col-sm-12 d-flex flex-column justify-content-center portDesc">
            <h2>Claudio's Portfolio</h2>
            
            <p>I tend to focus on using Javascript as much as possible. With Node.js I am able to build RESTful services fast and be able to integrate my APIs with client side applications built with React.js or React Native.</p>
          </div>
        </div>
        <div className="portfolio-row row">
          <div className="col-xs-12 d-flex flex-column justify-content-center">
          {data.map((project, indy) => (
            <Project 
              key={indy}
              mainHref={project.projectHref}
              title={project.title}
              description={project.description}
              img={project.projectImage}
              bkgImg={project.bkgImg}
              tech={project.tech}
              links={project.links}
            />
          ))}
          </div>
        </div>
        </div>);
  }
}

export default Portfolio;
