import React, { Component } from  'react'
import { Input } from 'react-materialize';


export default class AlertForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      message: "",
      priority: "",
    }
    this.render = this.render.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }




  render() {
    return(
      <div>
        <form onSubmit={this.props.handleAlertSubmit}>
          <input type="text" name="date" placeholder="Date" value={this.state.date} onChange={this.handleChange} /><br/>
          <input type="text" name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} /><br/>
          <Input type='select' defaultValue='1' label="Alert priority">
        		<option value='High'>High</option>
        		<option value='Medium'>Medium</option>
        		<option value='Low'>Low</option>
        	</Input> <br></br>
          <button className="btn waves-effect waves-light purple" type="submit" name="action">Create Alert </button>
        </form>
      </div>
    )
  }
}
