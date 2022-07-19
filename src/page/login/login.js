
import './login.css';
import axios from'axios'
import {
  useNavigate
} from "react-router-dom";
import {useState,useContext}from'react'
import context from'../../context/context'

function Login() {
  let api=useContext(context)
  let [username,setUserName]=useState('')
  let [password,setPassword]=useState('')
  let submit=async()=>{
  try {
 let res=await axios.post('http://localhost:8080/auth/login',{username,password})
  api.setToken(res.data.token)
  let string=res.data.token.toString()
  localStorage.setItem('token',string)
  api.setVerify(res.data)
  } catch (e) {
    console.log(e)
    
  }
  
  }
  return (
    <div className="login">
    <div>
    <span>KittyAlbum</span>
    <div>
    <input type='text' placeholder='username'
    onChange={(e)=>setUserName(e.target.value)}/>
    <input type='password' placeholder='password...'
    onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button onClick={submit}>login</button>
    </div>
    </div>
  );
}

export default Login;
    