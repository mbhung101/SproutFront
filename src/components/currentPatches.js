import React, {Component} from 'react'
import GardenChooser from './gardenChooser'
import GardenAdapter from '../adapters/gardenAdapter'
import SelectedGarden from './selectedGarden'

export default class CurrentPatches extends Component {

  constructor(props){
    super(props)
    this.state = {
      gardens: null,
      currentGarden: null,
      currentGardenName: ""
    }
    this.gardenChoice = this.gardenChoice.bind(this)
    this.newGardenSubmit = this.newGardenSubmit.bind(this)
  }

  componentWillMount(){
    GardenAdapter.getGardens(localStorage.user_id)
      .then( gardens =>
        this.setState({
        gardens: gardens
      })
        )
      }



  gardenChoice (e){
    e.preventDefault()
    this.setState({
      currentGarden: e.target[1].value
    },function(){
      console.log(this.state)
    })
  }

  newGardenSubmit(event){
    event.preventDefault()
    var newGarden = {
      year: event.target.year.value,
      name: event.target.name.value,
      user_id: localStorage.user_id,
      season_id: 1
    }
    GardenAdapter.newGarden(newGarden)
      .then(garden => this.setState({
          currentGarden: garden.id
      })
    )
  }

  render (){
    if (this.state.gardens !== null && this.state.currentGarden === null){
    return (
      <div>
        <GardenChooser gardenChoice={this.gardenChoice} gardens={this.state.gardens} onNewGardenSubmit={this.newGardenSubmit}/>
      </div>
      )
    } else if (this.state.gardens && this.state.currentGarden !== null){
      return(
      <div>
      <SelectedGarden gardens={this.state.currentGarden}/>
      </div>
    )
    } else{
      return null
    }
  }
}
