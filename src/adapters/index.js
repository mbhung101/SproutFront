const baseUrl = 'http://localhost:3000/api'

export default class SproutAdapter  {

  static createUser(profile){
    return fetch("http://localhost:3000/api/users", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user: profile
      })
    }).then(response => response.json() )
  }


  static createAlert(newAlert){
    return fetch("http://localhost:3000/alerts", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        alert: newAlert
      })
    }).then(response => response.json() )
  }


  static currentUser(user){
    return fetch(`http://localhost:3000/api/users/${user}`, {
      method: 'GET',
      headers: this.headers()
      }).then(response => response.json() )
}


  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

}
