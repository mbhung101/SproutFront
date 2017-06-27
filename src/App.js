import React, {Component} from 'react'
import './App.css';
import GardenContainer from './containers/GardenContainer'
import { Button, Card, Row, Col } from 'react-materialize';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GardenContainer/>
      </div>
    );
  }
}

export default App;
