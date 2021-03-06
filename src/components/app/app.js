import React, { Component } from 'react'

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page'

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true
  }

  toggleRandomPlanet = () => {
    this.setState( ({ showRandomPlanet }) => {
      return {
        showRandomPlanet: !showRandomPlanet
      }
    })
  }

  render() {

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div>
        <Header />
        { planet }

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <PeoplePage />
      </div>
    );
  }
};