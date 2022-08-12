import React from 'react'
import "../../Data/login.json"
const LoginJson = () => {
    let myRequest = new Request("../../Data/login.json")
fetch(myRequest).then(function(resp){
    return resp.json();
})
.then(function(data){

})

const loginData= JSON.parse
  return (
    <div></div>
  )
}

export default LoginJson