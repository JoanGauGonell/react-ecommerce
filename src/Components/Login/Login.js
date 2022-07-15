import React from 'react'
 
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={username}
            name="Username"  
            placeholder="Username"
            onChange={({target})=>setUsername(target.value)}      >
        </input>
        <input
            type="password"
            value={password}
            name="Password"  
            placeholder="Password"
            onChange={({target})=>setPassword(target.value)}      >
        </input>
        <button>Login</button>
    </form>
  )
}

export default Login