import './like.css'
import Head from'./head'
import Body from'./body'
import Popup from'./popup'
import context from'../../context/context'
import {useContext,useState,useEffect}from'react'
import axios from'axios'
export default function Like(){
  let api=useContext(context)
  let [data,setData]=useState([])
  useEffect(()=>{
    async function call() {
  let uri='https://kitty-album-back.vercel.app/auth/get/like' 
  try {
//  console.log('ver',api.verify.username)
  let res=await axios.post(uri,{_id:api.verify._id})
  setData(res.data)
  } catch (e) {
    alert(e);
  }
    };
    if (api.verify.username) {
      call()
    }else{
    }
  },[api.verify])
  return (
    <>
    <Head/>
    <br/>
    <div className='like'>
    {
      data.map((e,i)=>(
     <Body key={i} data={e}/>
      ))
    }
    </div>
    <div className='pop'>
    <Popup/>
    </div>
    </>
    )
}