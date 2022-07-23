import './user.css'
import Head from'./head'
import Body from'./body'
import axios from'axios'
import {useState,useEffect}from'react'
export default function User(){
  let [data,setData]=useState([])
  let [load,setLoad]=useState(true)
  useEffect(()=>{
  async function call() {
let uri='https://kitty-album-back.vercel.app/auth/users'
    try {
  let res=await axios.get(uri)
  setData(res.data)
  setLoad(false)
    } catch (e) {
      setLoad(true)
      alert(e)
    }
  };call()
  },[])
  return (
    <>
    {!load?
      <div>
    <Head/>
    <div className='user'>
  {
    data.map((e)=>(
    <Body key={e._id} data={e}/>
    ))
  }
    </div>
    </div>:
      <div className='mainLoad'>
    <div className='load'></div>
    </div>
    }
    </>
    )
}