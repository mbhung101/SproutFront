import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Homepage from '../components/homepage'
import Patches from '../components/patches'
import PastPatches from '../components/pastPatches'
import Stats from '../components/stats'
import NavBar from '../components/navbar'
import EditProf from '../components/editProf'



class GardenContainer extends Component {

  constructor(){
    super()
    this.state = {
      user: {FName:"Richard", LName: "Teekler", Age:70, State: "NY", City: "Bumblefuq", Bio: "My plants are the only thing preventing me from drinking enough cough syrup to fall asleep forever", username: "xoxoRichardTeekler70xoxo", profilePic: "https://cdn0.iconfinder.com/data/icons/financial-business/512/agriculture_project-512.png"},
      patches: [{type: 'Ghost Peppers', number:25, fertilizer: "Rick's Kronenberg Solution", yields:[10,12,41], spacing: 12, plantedOn: 5/12/1940, water: "daily", notes: "Sticking them in my ass is the only way I feel alive", imgs:[]},
               {type: 'Ghost Peppers', number:20, fertilizer: "Children's bones", yields:[13,41,59], spacing: 15, plantedOn: 4/12/1940, water: "daily", notes: "Sticking them in my ass is the only way I feel alive", imgs:[]}  ]
    }
    this.render = this.render.bind(this)
  }

  render (){
    return (
      <BrowserRouter>
        <div className = "container">
        <NavBar/>
        <Route exact path = '/home' render= {() =><Homepage user={this.state.user}/>}/>
        <Route exact path = '/home/edit' render= {() =><EditProf user={this.state.user} onProfileEditSubmit={this.ß}/>}/>
        <Route exact path = '/gardens/current' render= {() =><Patches patches={this.state.patches}/>}/>
        <Route exact path = '/gardens/history' render= {() =><PastPatches patches={this.state.patches}/>}/>
        <Route exact path = '/stats' render= {() =><Stats/>}/>
        </div>
      </BrowserRouter>
    )
  }
}


export default GardenContainer
