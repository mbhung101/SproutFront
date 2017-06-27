import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Homepage from '../components/homepage'
import Patches from '../components/patches'
import PastPatches from '../components/pastPatches'
import NavBar from '../components/navbar'
import EditProf from '../components/editProf'



class GardenContainer extends Component {

  constructor(){
    super()
    this.state = {
      alerts: [{message:"Slugs sighted near my begonias!",priority:"High",date:"1/2/1234"},
      {message:"I pooped my pants again",priority:"Medium",date:"1/2/1234"},
      {message:"Nothing brings me joy anymore",priority:"Low",date:"1/2/1234"}],
      user: {FName:"Richard", LName: "Teekler", Age:70, State: "NY", City: "Bumblefuq", Bio: "My plants are the only thing preventing me from drinking enough cough syrup to fall asleep forever", username: "Deekteekler70", profilePic: "https://cdn0.iconfinder.com/data/icons/financial-business/512/agriculture_project-512.png"},
      patches: [{type: 'Ghost Peppers', number:25, fertilizer: "Rick's Kronenberg Solution", yields:[10,12,41], spacing: 12, plantedOn: 5/12/1940, wateringSchedule: "daily", notes: "Sticking them in my ass is the only way I feel alive", img:""},
               {type: 'Ghost Peppers', number:20, fertilizer: "Children's bones", yields:[13,41,59], spacing: 15, plantedOn: 4/12/1940, wateringSchedule: "daily", notes: "Sticking them in my ass is the only way I feel alive", img:"" }  ]
    }
    this.render = this.render.bind(this)
  }


  render (){
    return (
      <BrowserRouter>
        <div className = "container">
        <NavBar/>
        <Route exact path = '/home' render= {() =><Homepage user={this.state.user} alerts ={this.state.alerts}/>}/>
        <Route exact path = '/home/edit' render= {() =><EditProf user={this.state.user}/>}/>
        <Route exact path = '/gardens/current' render= {() =><Patches patches={this.state.patches}/>}/>
        <Route exact path = '/gardens/history' render= {() =><PastPatches patches={this.state.patches}/>}/>
        </div>
      </BrowserRouter>
    )
  }
}


export default GardenContainer
