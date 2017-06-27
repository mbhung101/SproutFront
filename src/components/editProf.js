import React, { Component } from  'react'

export default class EditProf extends Component {
  constructor(props) {
    super(props)

    this.state = props.user
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.render = this.render.bind(this)
  }

  handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit(event) {
    this.props.createFood(event.target.children)
  }

  render() {
    return(
      <div className = "center-align">
        <h3>Change Yourself</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} /><br/>
        <input type="text" name="profilePic" placeholder="URL" value={this.state.profilePic} onChange={this.handleChange} /><br/>  
        <input type="text" name="FName" placeholder="First Name" value={this.state.FName} onChange={this.handleChange} /><br/>
        <input type="text" name="LName" placeholder="Last Name" value={this.state.LName} onChange={this.handleChange}  /><br/>
        <input type="number" name="Age" placeholder="Age" value={this.state.Age} onChange={this.handleChange}  /><br/>
        <input type="text" name="State" placeholder="State" value={this.state.State} onChange={this.handleChange}  /><br/>
        <input type="text" name="City" placeholder="City" value={this.state.City} onChange={this.handleChange}  /><br/>
        <input type="textarea" name="Bio" placeholder="Bio" value={this.state.Bio} onChange={this.handleChange}  /><br/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
