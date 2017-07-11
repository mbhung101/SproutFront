const baseUrl = 'http://localhost:3000/api'
const key = "7e0d24407036eacd9539c76dae30c6d8"

export default class SproutAdapter  {

  static createUser(profile){
    return fetch("http://localhost:3000/api/users", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        user: profile
      })
    }).then(response => response.json() )
  }

  static editUser(profile){
    return fetch(`http://localhost:3000/api/users/${profile.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        user: profile
      })
    }).then(response => response.json() )
  }

  static getWeather(lat,long){
    return fetch(`https://api.darksky.net/forecast/7e0d24407036eacd9539c76dae30c6d8/${lat},${long}?exclude=currently,flags,hourly,minutely`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
    }).then(response => response.json() )
  }

  static currentUser(user){
    return fetch(`http://localhost:3000/api/currentuser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    }).then(response => response.json() )
}

static getUser(id){
  return fetch(`http://localhost:3000/api/users/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
  }).then(response => response.json() )
}


}
