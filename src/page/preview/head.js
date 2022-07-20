import { IoIosArrowBack } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import {useNavigate} from "react-router-dom"
import { storage } from "../../firebase";
import { ref, deleteObject } from "firebase/storage";
import axios from'axios'
import context from'../../context/context'
import {useContext}from'react'
export default function Head({data}){
  let api=useContext(context)
  let history=useNavigate()
  console.log(data)
  let dele=async()=>{
let uri=`https://kitty-album-back.vercel.app/img/delete/${data._id}`
try {
 const delref = ref(storage, data.pathName);
let delet=await deleteObject(delref)
let res=await axios.delete(uri)
history(-1)
api.setDel((n)=>n+1)
} catch (e) {
  alert(e)
}
  }
  return(
   <div className='phead'> 
    <IoIosArrowBack className='ic' size='30px'
    onClick={()=>history(-1)}/>
    <AiFillDelete className='ic' size='30px'
    onClick={dele}/>
    </div>
    )
}