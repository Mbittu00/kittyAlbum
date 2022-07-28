import "./foot.css";
import { HiViewGridAdd } from "react-icons/hi";
import { BsFillPeopleFill, BsGithub} from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState, useContext } from "react";
import axios from "axios";
import context from "../../context/context";
import { storage } from "../../firebase";
import {Link}from "react-router-dom";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
function Foot() {
  let api = useContext(context);
  let [file, setFile] = useState("");
  let [imgurl, setImageUrls] = useState("");
  
  
  let call=async(e)=>{
    if (e.target.files[0] == null) 
    {
      
    }else{
  let image=e.target.files[0]
  let imageRef=ref(storage,`/images/${Date.now()+image.name}`)
  try {
  let upRes=await uploadBytes(imageRef,image)
  let durl=await getDownloadURL(upRes.ref)
  let uri='https://kitty-album-back.vercel.app/img/post'
  let res=await axios.post(uri,{
    token:api.token,uri:durl,pathName:upRes.metadata.fullPath})
  api.setPost((n)=>[res.data,...n])
  } catch (e) {
    alert(e)
  }
}}
  
  return (
    <div className="foot">
      <label>
        <HiViewGridAdd size={"30px"} color="white" />
        <input type="file" onChange={call}
        accept='image/*' />
      </label>
    <Link to='/users' className='link usr'>  <button>
        <BsFillPeopleFill size={"18px"} color="orange" />
        user
      </button></Link>
   <Link to='/like' className='link'><MdFavorite size={"20px"} /></Link>
      <BsGithub size={"20px"} />
     <Link to={`/profile/${api.verify._id}`} 
     className='link'> 
     <CgProfile size={"20px"} /></Link>
    </div>
  );
}

export default Foot;
