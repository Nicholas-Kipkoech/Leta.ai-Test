import React, { useState } from 'react'
import { AuthServiceClient } from '../../generated/AuthServiceClientPb'
import { LoginRequest } from '../../generated/auth_pb'


const authService = new AuthServiceClient('http://localhost:5000',null)

const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const handleLogin=()=>{
    const _request = new LoginRequest()
    _request.setUsername(username)
    _request.setPassword(password)

    authService.login(_request,{},(err: any,response:any)=>{
     if(err){
      throw Error(err)
     }else{
        console.log(response)
        const jwtToken = response.getjwtToken()
        localStorage.setItem('jwtToken',jwtToken)
     }
  
  
    })
  }
  return (
   <form>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="button" onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login