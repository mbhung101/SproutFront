export default class PatchAdapter  {
  static getPatches(user){
    return fetch(`http://localhost:3000/api/patches`, {
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
