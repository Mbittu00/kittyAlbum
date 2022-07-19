import "./foot.css";
import { HiViewGridAdd } from "react-icons/hi";
import { BsFillPeopleFill, BsGithub } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { useState, useContext } from "react";
import axios from "axios";
import context from "../../context/context";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
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
  let uri='https://kitty-album-back-f2414lmv0-mbittu00.vercel.app/img/post'
  let res=await axios.post(uri,{token:api.token,uri:durl})
  api.setPost((n)=>[...n,res.data])
  } catch (e) {
    alert(e)
  }
}}
  
  return (
    <div className="foot">
      <label>
        <HiViewGridAdd size={"35px"} color="orange" />
        <input type="file" onChange={call}
        accept='image/*' />
      </label>
      <button>
        <BsFillPeopleFill size={"18px"} color="orange" />
        user
      </button>
      <MdFavorite size={"20px"} />
      <BsGithub size={"20px"} />
      <AiFillInstagram size={"20px"} />
    </div>
  );
}

export default Foot;
