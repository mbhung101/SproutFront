export default class GardenAdapter  {
  static getGardens(user){
    return fetch(`http://localhost:3000/api/gardens`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: user
      })
    }).then(response => response.json() )
  }
}
