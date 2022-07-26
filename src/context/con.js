import Context from "./context";
import {useEffect,useState}from'react'
import axios from'axios'
function Con({ children }) {
let [token,setToken]=useState(localStorage.getItem('token'))
let [verify,setVerify]=useState({})
let [viewOpen,setViewOpen]=useState(false)
let [view,setView]=useState({})
let [post,setPost]=useState([])
let [apost,setaPost]=useState(true)
let [del,setDel]=useState(0)
//verify data
useEffect(()=>{
let uri='https://kitty-album-back.vercel.app/auth/verify'
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
let uri='https://kitty-album-back.vercel.app/img/get'
  async function call(){
    try {
let string=token.toString()
  let res=await axios.post(uri,{token:string})
  setPost(res.data)
  setaPost(false)
  console.log(res.data)
    } catch (e) {
      alert(e)
      setaPost(true)
    }
  };
  if(token){
    call()
  }else{
    
  }
},[token,del])

//console
console.log(viewOpen)
  return(
  <Context.Provider value={{
token,setToken,verify,setVerify,setPost,post,setDel,view,
setView,setViewOpen,viewOpen,apost,setaPost
  }}>
  {children}
  </Context.Provider>
)}

export default Con;
