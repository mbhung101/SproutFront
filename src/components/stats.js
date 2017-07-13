import React, {Component} from 'react'
import { Button, Row, Col, Navbar, NavItem, Card, Input, Slide, Slider } from 'react-materialize';
import PatchAdapter from '../adapters/patchAdapter'
import {Line as LineChart} from 'react-chartjs'


export default class Stats extends Component {

  constructor(props){
    super(props)
    this.render = this.render.bind(this)
    this.state = {
      renderSeason: false,
      renderCompare: false,
      patches: [],
      selected: "",
      selected2: "",
      selected3: ""
    }
    this.seasonsSubmit = this.seasonsSubmit.bind(this)
    this.chartData = this.chartData.bind(this)
    this.yieldSort = this.yieldSort.bind(this)
    this.arrRed = this.arrRed.bind(this)
    this.compareSubmit = this.compareSubmit.bind(this)
    this.yielder = this.yielder.bind(this)
    this.imageMapper = this.imageMapper.bind(this)
    this.yieldSort = this.yieldSort.bind(this)
  }


  componentWillMount (){
      PatchAdapter.allPatches()
      .then(patches => {
        this.setState({
          patches:patches
        })
      })
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

    gardenDisplay (patch1,patch2){
      var patches = this.state.patches.filter(function(patch){
        return (patch.id.toString() === patch1 || patch.id.toString() === patch2)
      })
      var cards = patches.map((patch)=>
        <Card>
        <div className="row">
        <div className = "col s6">
        <Slider>
        {this.imageMapper(patch.images)}
        </Slider>
        </div>
        <div className= "col s6">
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
          </div>
          </Card>
      )
      return cards
    }

  yieldSort (patch){
    var months = [0,0,0,0,0,0,0,0,0,0,0,0]
    patch.yields.forEach((y) => {
      var split = y.harvested_on.split('/')
      months[(split[0]-1)] += y.weight
    })
    return months
  }

    arrRed (arrays){
    if (arrays.length === 1){
      return arrays[0]
    }
    else{
    var arr2 = arrays.shift()
    for (var i=0;i<arrays[0].length;i++){
      arrays[0][i] += arr2[i]
      }
      console.log (arrays)
      return this.arrRed(arrays)
    }
}

  chartData (name) {
    var patches = this.state.patches.filter(function(patch){
      return patch.plant.toLowerCase() === name
    })
    var yieldMap = patches.map((patch)=>
      this.yieldSort(patch)
    )
    var final = this.arrRed(yieldMap)
    var data = {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Nov","Dec"],
        datasets: [{
            label: 'grams',
            data: final,
            fillColor: "rgba(46, 204, 113,1.0)",
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
      legend:{
        display: true,
        position: 'top',
        labels: {
          fontColor: "rgba(46, 204, 113,1.0)"
        }
      },
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


    chartData2 (patch1,patch2) {
      var patches = this.state.patches.filter(function(patch){
        return (patch.id.toString() === patch1 || patch.id.toString() === patch2)
      })
      var name1 = patches[0].userName + "'s " + patches[0].plant
      var name2 = patches[1].userName + "'s " + patches[1].plant
      var yieldMap = patches.map((patch)=>
        this.yieldSort(patch)
      )
      var data = {
          labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Nov","Dec"],
          datasets: [{
              label: name1,
              data: yieldMap[0],
              fillColor: "rgba(46, 204, 113,1.0)",
              borderWidth: 1
          },
          {
              label: name2,
              data: yieldMap[1],
              fillColor: "rgba(142, 68, 173,.7)",
              borderWidth: 1
          }
        ]
        }
        return data
      }

  allPlants(patches,filter){
    if (filter === true){
    var names = patches.map((patch) =>
      patch.plant.toLowerCase()
    )
    const unique = function (value, index, self) {
    return self.indexOf(value) === index;
      }
    var uniques = names.filter(unique)
    var jsx = uniques.map((plant)=>
      <option value={plant}>{plant}</option>
    )
    return jsx
  }else{
    var jsx = patches.map((patch)=>
      <option value={patch.id}>{patch.userName + "'s " + patch.plant}</option>
    )
    return jsx
  }
}

  seasonsSubmit (e){
    e.preventDefault()
    this.setState({
      selected: e.target.children[0].children[1].children[3].value,
      renderSeason: true
    })
  }

  compareSubmit (e){
    e.preventDefault()
    this.setState({
      selected2: e.target.children[0].children[0].children[0].children[1].children[3].value,
      selected3: e.target.children[0].children[1].children[0].children[1].children[3].value,
      renderCompare: true
    })
  }

  render (){
    return (
      <div className= "container">
        <Navbar style={{paddingLeft:20}} brand="Harvest Time"  className="light-green" right>
        </Navbar>
        <div className = "row">
        <div className= "col s6">
        <form style={{padding:20}} onSubmit={this.seasonsSubmit}>
          <Input type='select' defaultValue='1' label="Plants">
          {this.allPlants(this.state.patches,true)}
          </Input> <br></br>
          <button className="btn waves-effect waves-light purple" type="submit" name="action">When to expect</button>
        </form>
        </div>
        </div>
        <br></br>
        {this.state.renderSeason ? <LineChart data={this.chartData(this.state.selected)} options= {this.chartOptions()}/> : null}
        <Navbar style={{paddingLeft:20}} brand="Plant Comparison"  className="light-green" right> </Navbar>
        <form style={{padding:20}} onSubmit={this.compareSubmit}>
        <div className= "row">
          <div className= "col s3">
            <Input type='select' defaultValue='1' label="Plants">
            {this.allPlants(this.state.patches,false)}
            </Input> <br></br>
          </div>
          <div className= "col s3">
          <Input type='select' defaultValue='1' label="Plants">
          {this.allPlants(this.state.patches,false)}
          </Input> <br></br>
          </div>
          <div style={{paddingTop:20}} className = "col s3">
            <button className="btn waves-effect waves-light purple" type="submit" name="action">Compare!</button>
          </div>
        </div>
        </form>

        {this.state.renderCompare ? <div style={{paddingLeft:90,height:500,width:1200}}> <LineChart data={this.chartData2(this.state.selected2,this.state.selected3)} options= {this.chartOptions()}/> </div> : null}

        <div style={{padding:20}} className="row">

            <div  className= "col s6">
              {this.state.renderCompare? <div id="compareWrap1"> {this.gardenDisplay(this.state.selected2,this.state.selected3)[0]}  </div> : null}
            </div>

            <div  className= "col s6">
              {this.state.renderCompare? <div id="compareWrap2"> {this.gardenDisplay(this.state.selected2,this.state.selected3)[1]}  </div> : null}
            </div>

        </div>
      </div>
    )
  }
}
