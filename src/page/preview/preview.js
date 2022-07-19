import { useParams } from "react-router-dom";
import './preview.css';
import axios from'axios'
import Head from'./head'
import {useState,useEffect}from'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function Preview() {
  let params=useParams()
  let [data,setData]=useState({})
  let [have,setHave]=useState(params.id?true:false)
  useEffect(()=>{
async function call(){
let uri=`http://localhost:8080/img/find/${params.id}`
  try {
 let res=await axios.get(uri)
 setData(res.data)
  } catch (e) {
    alert(e)
  }
};
if (have) {
  call()
}else{
  
}
  },[params.id])
  return (
    <>
    <Head/>
    <br/>
    <div className="preview">
<img src={data.imgUri} className='pic'/>
<div>
<span>{data.username}</span>
<AiOutlineStar size='30px' className='star'/>
</div>
    </div>
    </>
  );
}

export default Preview;
    