export default class GardenAdapter  {

  static getGardens(id){
    return fetch(`http://localhost:3000/api/gardens`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: id
      })
    }).then(response => response.json() )
  }

  static newGarden(garden){
    return fetch(`http://localhost:3000/api/gardens`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        garden: garden
      })
    }).then(response => response.json() )
  }

}
