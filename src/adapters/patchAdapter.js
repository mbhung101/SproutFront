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

  static deletePatch(patchId,gardenId){
    return fetch(`http://localhost:3000/api/patches/${patchId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        patch: {
          patch_id: patchId,
          garden_id: gardenId
        }
      })
    }).then(response => response.json() )
  }


  static getGardenPatches(garden,user){
    return fetch(`http://localhost:3000/api/garden_patches`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        patch:{
        user_id: user,
        garden_id: garden
        }
      })
    }).then(response => response.json() )
  }

  static createPatch(patch){
    return fetch(`http://localhost:3000/api/patches`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        patch:patch
      })
    }).then(response => response.json() )
  }

  static editPatch(patch,patch_id){
    return fetch(`http://localhost:3000/api/patches/${patch.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        patch:patch,
        patch_id: patch_id
      })
    }).then(response => response.json() )
  }

}
