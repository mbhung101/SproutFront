import React, {Component} from 'react'
import PatchAdapter from '../adapters/patchAdapter'
import {  Navbar, Card , Icon, Slider, Slide} from 'react-materialize';
import {Line as LineChart} from 'react-chartjs'


export default class AllMyPatches extends Component {

    constructor(props){
      super(props)
      this.state = {
        patches: [],
        search: ""
      }
      this.gardenDisplay = this.gardenDisplay.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.imageMapper = this.imageMapper.bind(this)
      this.yielder = this.yielder.bind(this)
      this.chartData = this.chartData.bind(this)
      this.yieldSort = this.yieldSort.bind(this)
    }

    componentDidMount(){
      if (localStorage.user_id) {
        PatchAdapter.allPatches(localStorage.user_id)
          .then(patches => {
            if (!patches.error) {
              this.setState({
                patches: patches
              })
            }
          })
      }
    }

    imageMapper(imgs){
      if (imgs.length > 0){
      return imgs.map((img)=>
      <Slide
        src={img.url}>
      </Slide>
      )
    }else{
      return 	<Slide
		src="http://lorempixel.com/580/250/nature/1"
		title="No pictures!">
	   </Slide>
    }
    }

    yielder (yields){
      var total = 0
      yields.map((y) => {
        total += y.weight
      })
      return total
    }

    yieldSort (patch){
      var months = [0,0,0,0,0,0,0,0,0,0,0,0]
      patch.yields.forEach((y) => {
        var split = y.harvested_on.split('/')
        months[(split[0]-1)] += y.weight
      })
      return months
    }


    chartData (patch) {
      var data = {
          labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Nov","Dec"],
          datasets: [{
              label: 'grams',
              data: this.yieldSort(patch),
              fillColor: "rgb(0,187,0)",
              borderWidth: 1
          }]
        }
        return data
      }

      chartOptions (){
        var options={
        responsive: true,
        animation:true,
        bezierCurve: true,
        bezierCurveTension: .4,
        datasetFill:true,
        showScale: true,
        pointDot:false,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    return options
      }

    gardenDisplay (){
      return this.state.patches.map((patch)=>
      <Card>
        <div className= "row">
          <div className= "col s4" >
          <Slider>
          {this.imageMapper(patch.images)}
          </Slider>
          </div>
          <div className= "col s4">
            <center> <h5> {patch.plant} </h5></center>
            <hr/>
            <div style={{paddingTop:20}}>
            <p> Planted by: {patch.userName} </p>
            <p> Date planted: {patch.planted_on}</p>
            <p> Garden: {patch.garden}</p>
            <p> Number of Plants: {patch.number}</p>
            <p> Total Yield(g): {this.yielder(patch.yields)}</p>
            <p> Sunlight: {patch.sunlight} </p>
            <p> Substrate: {patch.substrate} </p>
            <p> Spacing (in): {patch.spacing} </p>
            <p> Seed depth(in): {patch.seed_depth} </p>
            <p> Watering schedule: {patch.water} </p>
            <p> Fertizler used: {patch.fertilizer} </p>
            <p> Notes: {patch.notes} </p>
            </div>
          </div>
          <div className = "col s4">
          <center> <h5> Yield History </h5> </center>
          <hr/>
          <div style={{paddingTop:20}}>
          <div style={{width:400,height:250}} >
          <LineChart data={this.chartData(patch)} options= {this.chartOptions()}/>
          </div>
          </div>
          </div>
        </div>
      </Card>
      )
    }

    handleChange (event){
      var patches = []
      var search = event.target.value
      var sortedPatches = this.state.patches.forEach((patch) =>{
        var strs = ""
        for (var i in patch){
          if (typeof patch[i] === "string"){
            strs += patch[i].toLowerCase() + " "
          }
        }
        var regex = new RegExp(search, 'g')
        var matches = strs.match(regex)
        if (matches && matches.length > 0){
          patches.push(patch)
        }
        strs = ""
    })
      this.setState({
        search: event.target.value,
        patches: patches
      })
    }

    render (){
      return (
        <div>
          <Navbar style={{paddingLeft:20}} brand="All Plants"  className="light-green" right>
          </Navbar>
          <div style={{paddingLeft:20}} className= "search-wrapper card">
            <form onSubmit={this.onSearchSubmit}>
              <input type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
              <button className="btn waves-effect waves-light purple" type="submit" name="action"> Reset </button><br/>
            </form>
          </div>
          {this.gardenDisplay()}
        </div>
      )
    }
}
