import React, {Component} from 'react'
import PatchAdapter from '../adapters/patchAdapter'
import { Button, Row, Col, Navbar, NavItem, Card } from 'react-materialize';

export default class CurrentPatches extends Component {

  constructor(props){
    super(props)
    this.state = {
      garden: null
    }
  }

// WILL RENDER GARDENCHOOSER OF GARDEN NAME AND YEAR IF GARDEN = null
// OTHERWISE, WILL RENDER LAYOUT, ADD PATCH AND CHANGABLE GARDEN CARDS

  render (){
    return (
      <div>
      </div>
      )
  }
}
