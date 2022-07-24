import './popup.css'
import context from'../../context/context'
import {useContext}from'react'
import { AiFillStar, AiOutlineStar,AiOutlineClose,AiOutlineDelete} from "react-icons/ai";
import { storage } from "../../firebase";
import { ref, deleteObject } from "firebase/storage";
import axios from'axios'
export default function Popup(){
  let api=useContext(context)
  let close=()=>{
    api.setViewOpen(false)
  }
  let del=async()=>{
let uri=`https://kitty-album-back.vercel.app/img/delete/${api.view._id}`
try {
 const delref = ref(storage, api.view.pathName);
let delet=await deleteObject(delref)
let res=await axios.delete(uri)
close()
api.setDel((n)=>n+1)
} catch (e) {
  alert(e)
}
  }
   let like=async()=>{
  let token=localStorage.getItem('token')
  let uri='https://kitty-album-back.vercel.app/auth/like'
  try {
let res=await axios.put(uri,{_id:api.verify._id,
like:api.view._id})
api.setVerify(res.data)
  } catch (e) {
    alert(e)
  }
  }
  return (
    <>{api.viewOpen?
    <div className='popup'>
    <img src={api.view.imgUri}/>
    <AiOutlineClose size='25px' className='close'
    onClick={close}/>
    <div>
    <div>
    <span>{api.view.username}</span>
    
    </div>
  {api.verify.username==api.view.username?
  <AiOutlineDelete size='30px' className='del'
    onClick={del}/>:''}
   {!api.verify.fav.includes(api.view._id)?
   <AiOutlineStar size={'30px'} className='start'
    onClick={like}/>:
     <AiFillStar size='30px' className='start'
     onClick={like}/>
   }
    </div>
    </div>:''}
    </>
    )
}