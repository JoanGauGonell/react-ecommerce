import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Users from "../../Data/login.json"
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "../Header/Header"

export default function Login() {
  // console.log(Users);
  const [logged, setLoged] = useState(localStorage.getItem("logged") || false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
  }
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  
  function authLogin() {
    let dataName = Users.map(user => {if(user.name === username && user.password === password ){
      console.log("Logged in bro");
      setLoged(true);
      localStorage.setItem("logged" , true);
      navigate("/", { replace: true })
  }
  
  else{
    setError(true);

  }} );
  return dataName
   }
   
  return (
    <div className="login">
    <Header />
    <form className="loginForm" onSubmit={handleSubmit}>
      <h1>LOGIN</h1>
        <input
            type="text"
            value={username}
            name="Username"
            id="username"  
            placeholder="Username"
            onChange={({target})=>setUsername(target.value)}      
            >
        </input>
        <input
            type="password"
            value={password}
            name="Password" 
            id="password" 
            placeholder="Password"
            onChange={({target})=>setPassword(target.value)}      
            >
        </input>
        <Button onClick={authLogin} type="submit" disabled={!validateForm()} >
          Login
        </Button>
        {error && <p>ERORR PINCHE CULIAO</p>}

        {logged && <p>IS Logged</p>}
    </form>
    </div>
  )
}

