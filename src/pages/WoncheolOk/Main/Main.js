import React, { Component } from 'react';
// import Nav from "../../components/Nav/Nav";
import Feeds from './Components/Feeds';
import MainRight from './Components/MainRight';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <main>
          <Feeds />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
