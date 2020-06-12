import React, { Component } from 'react';
import Navbar from '../components/Navbar';
class Blog extends Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="Blog">
        <Navbar 
            page='blog' 
            history={this.props.history}
        />
        <h2>Blog</h2>
        </div>);
  }
}

export default Blog;
