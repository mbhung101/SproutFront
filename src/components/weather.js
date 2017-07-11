import React, {Component} from 'react'
import SproutAdapter from '../adapters/index'
import { Button, Table, Icon} from 'react-materialize';


export default class Weather extends Component {

  constructor(props){
    super(props)
    this.state = {
      forecast: [],
      latitude: 0,
      longitude: 0,
      renderWeather: false,
      weather: []
    }
    this.render = this.render.bind(this)
    this.onLocationSubmit = this.onLocationSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.iconChooser = this.iconChooser.bind(this)
  }

  onLocationSubmit (e){
    e.preventDefault()
    var lat = e.target.latitude.value
    var long = e.target.longitude.value
    SproutAdapter.getWeather(lat,long)
    .then(weather => this.setState({
        weather: weather,
        renderWeather: true
    })
  )
}

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  iconChooser(day){
    var forecast = day.summary.toLowerCase()
    if (forecast.includes("lightning")){
      return  <Icon large> flashon </Icon>
    }
    else if (forecast.includes("snow")){
      return  <Icon large> ac_unit </Icon>
    }
    else if (forecast.includes("rain") || forecast.includes("rainy") || forecast.includes("precipitation") || forecast.includes("drizzle")){
      return  <Icon large> beach_access </Icon>
    }
    else if (forecast.includes("foggy")){
      return  <Icon large> cloud_queue </Icon>
    }
    else if (forecast.includes("breezy")|| forecast.includes("windy") || forecast.includes("windy")){

      return  <Icon large> flight_takeoff </Icon>
    }
    else if (forecast.includes("partly")){

      return  <Icon large> cloud_circle </Icon>
    }
    else if (forecast.includes("cloud") || forecast.includes("cloudy") || forecast.includes("overcast")){

      return  <Icon large> cloud </Icon>
    }
    else{
      return <Icon large> brightness_5 </Icon>
    }
  }

  render (){
    const hpStyle = {
      paddingLeft: 20,
      paddingRight: 20
    }
    if (this.state.renderWeather === false){
    return (
      <div style={hpStyle} className = "row">
      <div className = "col s4">
      <form onSubmit={this.onLocationSubmit}>
        <div>
          <input type="number"  step="any" name="latitude" placeholder="latitude" value={this.state.search} onChange={this.handleChange} />
        </div>
        <div>
          <input type="number" step="any" name="longitude" placeholder="longitude" value={this.state.search} onChange={this.handleChange} />
        </div>
        <button className="btn waves-effect waves-light purple" type="submit" name="action"> Get Forecast </button><br/>
      </form>
      </div>
      </div>
    )
  } else{
    return (
      <div>
      <h5> Weather for {this.state.weather.timezone} </h5>
      <hr/>
      <h5> Summary: {this.state.weather.daily.summary} </h5>
      <Table>
      	<thead>
      		<tr>
      			<th data-field="id">Day</th>
      			<th data-field="icon">Icon</th>
            <th data-field="temp">Temp(F)</th>
            <th data-field="temp">Precipitation Chance</th>
            <th data-field="summary"> DarkSky Forecast</th>
      		</tr>
      	</thead>

      	<tbody>

      		<tr>
      			<td>Today</td>
            <td> {this.iconChooser(this.state.weather.daily.data[0])}</td>
            <td> {(this.state.weather.daily.data[0].temperatureMax + this.state.weather.daily.data[0].temperatureMax)/2} </td>
            <td> {this.state.weather.daily.data[0].precipProbability * 100} % </td>
            <td> {this.state.weather.daily.data[0].summary} </td>
          </tr>

          <tr>
      			<td>Tomorrow</td>
            <td> {this.iconChooser(this.state.weather.daily.data[1])}</td>
            <td> {(this.state.weather.daily.data[1].temperatureMax + this.state.weather.daily.data[1].temperatureMax)/2} </td>
            <td> {this.state.weather.daily.data[1].precipProbability * 100} %  </td>
            <td> {this.state.weather.daily.data[1].summary} </td>
          </tr>

          <tr>
            <td>Day After Tomorrow</td>
            <td> {this.iconChooser(this.state.weather.daily.data[2])}</td>
            <td> {(this.state.weather.daily.data[2].temperatureMax + this.state.weather.daily.data[2].temperatureMax)/2} </td>
            <td> {this.state.weather.daily.data[2].precipProbability * 100} % </td>
            <td> {this.state.weather.daily.data[2].summary} </td>

          </tr>

          <tr>
            <td>Day After Day After Tomorrow</td>
            <td> {this.iconChooser(this.state.weather.daily.data[3])}</td>
            <td> {(this.state.weather.daily.data[3].temperatureMax + this.state.weather.daily.data[3].temperatureMax)/2} </td>
            <td> {this.state.weather.daily.data[3].precipProbability * 100} % </td>
            <td> {this.state.weather.daily.data[3].summary} </td>
          </tr>

          <tr>
            <td>4 Days From Today</td>
            <td> {this.iconChooser(this.state.weather.daily.data[4])}</td>
            <td> {(this.state.weather.daily.data[4].temperatureMax + this.state.weather.daily.data[4].temperatureMax)/2} </td>
            <td> {this.state.weather.daily.data[4].precipProbability * 100} % </td>
            <td> {this.state.weather.daily.data[4].summary} </td>
          </tr>

      	</tbody>
      </Table>
      </div>
    )
  }
}
}
