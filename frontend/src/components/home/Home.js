import React, { Component } from 'react';
import actions from '../../services/index'
import './home.css'

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        <h1 id = 'home-title'>Historic Christianity</h1>
       
        <img className = 'pictures-home' src = 'https://www.crossroadsinitiative.com/wp-content/uploads/2016/02/reading-the-Early-Church-Fathers.jpg' />
      </div>
    );
  }
}

export default Home;
