import React, {Component} from 'react'
import { Button, Table} from 'react-materialize';


export default class Weather extends Component {

  constructor(props){
    super(props)
    this.state = {
      forecast: [],
      lattitude: 0,
      longitude: 0,
      renderWeather: false
    }
    this.render = this.render.bind(this)
    this.onLocationSubmit = this.render.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  // NOT HITTING THIS WHY?
  onLocationSubmit (e){
    e.preventDefault()
    debugger
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render (){
    if (this.state.renderWeather === false){
    return (
      <div className = "row">
      <div className = "col s4">
      <form onSubmit={this.onLocationSubmit}>
        <div>
        <input type="number"  step="any" name="latitude" placeholder="latitude" value={this.state.search} onChange={this.handleChange} />
        </div>
        <div>
        <input type="number" step="ant" name="longitude" placeholder="longitude" value={this.state.search} onChange={this.handleChange} />
        </div>
        <button className="btn waves-effect waves-light light-green" type="submit" name="action"> Get Forecast </button><br/>
      </form>
      </div>
      </div>
    )
  } else{
    return (
      <div>
      </div>
    )
  }
}
}
