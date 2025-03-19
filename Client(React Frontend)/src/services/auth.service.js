
const API_URL = "http://localhost:5070/api/User";

export const login = async (email, password) => {
  var response=null;
  await fetch(`${API_URL}/Login`, {
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({email, password })})
    .then(resp=>resp.json())
    .then(result=>
      {
        response=result;
        localStorage.setItem('userId',response.user.id)
        localStorage.setItem("token", response.token);
      })
    .catch(err=>{
        console.log(err);
    });
  // if (response.token) {
  //   localStorage.setItem("token", response.token);
  // }
  return response;
};
export const signUp = async (user) => {
    var response=null;
    await fetch(`${API_URL}`, {
      method:"POST",
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify(user)})
      .then(resp=>resp.json())
      .then(result=>response=result)
      .catch(err=>{
          console.log(err);
      });
    return response;
  };