import Context from "./context";
import {useEffect,useState}from'react'
import axios from'axios'
function Con({ children }) {
let [token,setToken]=useState(localStorage.getItem('token'))
let [verify,setVerify]=useState({})
let [post,setPost]=useState([])
//verify data
useEffect(()=>{
let uri='https://kitty-album-back-f2414lmv0-mbittu00.vercel.app/auth/verify'
async function call(){
  try {
let string=token.toString()
  let res=await axios.post(uri,{token:string})
  setVerify(res.data)
  } catch (e) {
    alert(e)
  }
}
if (token) {
call()  
}else{
  
}
},[token])
//gallary post's 
useEffect(()=>{
let uri='https://kitty-album-back-f2414lmv0-mbittu00.vercel.app/img/get'
  async function call(){
    try {
let string=token.toString()
  let res=await axios.post(uri,{token:string})
  setPost(res.data)
  console.log(res.data)
    } catch (e) {
      alert(e)
    }
  };
  if(token){
    call()
  }else{
    
  }
},[token])
  return(
  <Context.Provider value={{
token,setToken,verify,setVerify,setPost,post
  }}>
  {children}
  </Context.Provider>
)}

export default Con;
