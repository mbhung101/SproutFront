import React, {Component} from 'react'
import './App.css';
import GardenContainer from './containers/GardenContainer'


class App extends Component {
  render() {
    return (
      <div className="container">
        <GardenContainer/>
      </div>
    );
  }
}

export default App;
