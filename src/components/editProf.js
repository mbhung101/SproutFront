import React, { Component } from  'react'

export default class EditProf extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.render = this.render.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    var user = {
      fname: e.target.children.fname.value,
      lname: e.target.children.lname.value,
      age: e.target.children.age.value,
      bio: e.target.children.bio.value,
      state: e.target.children.state.value,
      city: e.target.children.city.value,
      profilepic: e.target.children.profilepic.value,
      username: e.target.children.username.value,
    }
    this.props.onProfileEditSubmit( user )
  }

  render() {
    return(
      <div className = "center-align">
        <h3>Change Yourself</h3>
        <form onSubmit={this.handleSubmit}>
        <h5> Username<br></br> </h5>
        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/><br/>
        <h5>Profile Pic<br></br></h5>
        <input type="text" name="profilepic" placeholder="URL" value={this.state.profilePic} onChange={this.handleChange} /><br/>
        <h5>First Name<br></br></h5>
        <input type="text" name="fname" placeholder="First Name" value={this.state.FName} onChange={this.handleChange} /><br/>
        <h5>Last Name<br></br></h5>
        <input type="text" name="lname" placeholder="Last Name" value={this.state.LName} onChange={this.handleChange}  /><br/>
        <h5>Age<br></br></h5>
        <input type="number" name="age" placeholder="Age" value={this.state.Age} onChange={this.handleChange}  /><br/>
        <h5>State<br></br></h5>
        <input type="text" name="state" placeholder="State" value={this.state.State} onChange={this.handleChange}  /><br/>
        <h5>City<br></br></h5>
        <input type="text" name="city" placeholder="City" value={this.state.City} onChange={this.handleChange}  /><br/>
        <h5>Bio<br></br></h5>
        <input type="textarea" name="bio" placeholder="Bio" value={this.state.Bio} onChange={this.handleChange}  /><br/>
        <button className="btn waves-effect waves-light light-green" type="submit" name="action">Edit Profile </button>
        </form>
      </div>
    )
  }
}
