import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './style/Navbar.css';
import resume from '../assets/ClaudioAtilanoResume.pdf';
class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
        aboutColor: '#4A86E8',
        portfolioColor: 'grey',
        blogColor: 'grey'
    };
    this.linkStyle = this.linkStyle.bind(this);
    
  }
  componentDidMount() {
      this.linkStyle()

    //   alert(window.outerWidth);
  }
  componentWillUpdate() {
  }
  linkStyle() {
      if (this.props.page === 'about') {
        this.setState({
            aboutColor: '#4A86E8',
            portfolioColor: 'grey',
            blogColor: 'grey'  
        })
      }
      if (this.props.page === 'portfolio') {
        this.setState({
            aboutColor: 'grey',
            portfolioColor: '#4A86E8',
            blogColor: 'grey'  
        })
      }
      if (this.props.page === 'blog') {
        this.setState({
            aboutColor: 'grey',
            portfolioColor: 'grey',
            blogColor: '#4A86E8'  
        })
      }
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg justify-content-between navbar-light">
             <MediaQuery query="(max-device-width: 767px)">
             <div className='navbar-brand'>
                <div className="col col-sm-12">
                    <h3 id="title">Claudio Atilano</h3>
                </div>
                <div className="col col-sm-12">
                    <p id="subtitle">Software Engineer</p>
                </div>
            </div>
             </MediaQuery>
             <MediaQuery query="(min-device-width: 768px)">
             <div className='navbar-brand col-sm-8'>
                <div className="col col-sm-12">
                    <h3 id="title">Claudio Atilano</h3>
                </div>
                <div className="col col-sm-12">
                    <p id="subtitle">Software Engineer</p>
                </div>
            </div>
             </MediaQuery>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <a className="nav-link" href="/" onClick={this.toAbout} style={{color: this.state.aboutColor}}>About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/portfolio" onClick={this.toPortfolio} style={{color: this.state.portfolioColor}}>Portfolio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href={resume} download="ClaudioAtilanoResume.pdf" style={{color: this.state.blogColor}}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
