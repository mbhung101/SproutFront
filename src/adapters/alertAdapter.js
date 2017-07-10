export default class AlertAdapter  {

  static createAlert(alert){
    return fetch("http://localhost:3000/api/alerts", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        alert: alert
      })
    }).then(response => response.json() )
  }

  static getAlerts(id){
    return fetch(`http://localhost:3000/api/alerts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        alert: {
          user_id: id
        }
      })
    }).then(response => response.json() )
  }

  static deleteAlert(alert_id,user_id){
    return fetch(`http://localhost:3000/api/alerts/${alert_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        alert: {
          id: alert_id,
          user_id: user_id
        }
      })
    }).then(response => response.json() )
  }

  static getWeather(lat,long){
    return fetch(`https://api.darksky.net/forecast/7e0d24407036eacd9539c76dae30c6d8/${lat},${long}?exclude=currently,flags,hourly`, {
      method: 'GEt',
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
