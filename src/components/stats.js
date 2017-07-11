import React, {Component} from 'react'
import { Button, Row, Col, Navbar, NavItem, Card } from 'react-materialize';
import {Line as LineChart} from 'react-chartjs'


export default class Stats extends Component {

  constructor(props){
    super(props)
    this.render = this.render.bind(this)
  }

  chartData () {
    var data = {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Nov","Dec"],
        datasets: [{
            label: '# of Votes',
            data: [0,0,0,0,24,192,492,89,32,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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

  render (){
    return (
      <div>
        <Navbar style={{paddingLeft:20}} brand="Garden Stats"  className="light-green" right>
        </Navbar>
        <br></br>
        <div style={{paddingLeft:350}}>
        <div style={{height:300,width:500}}>
        <LineChart data={this.chartData()} options= {this.chartOptions()}/>
        </div>
        </div>
      </div>
    )
  }
}
