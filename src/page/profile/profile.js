import "./profile.css";
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { BiLogInCircle } from "react-icons/bi";
import Head from'./head'
import Body from'./body'
import Popup from'./popup'
import context from'../../context/context'
import {useNavigate} from "react-router-dom"
export default function Profile() {
  let api=useContext(context)
  let params = useParams();
  let history=useNavigate()
  let [post, setPost] = useState([]);
  let [user, setUser] = useState({});
  let [load, setLoad] = useState(true);
  useEffect(() => {
    async function call() {
      let uri = `https://kitty-album-back.vercel.app/img/user/${params.id}`;
      let url = `https://kitty-album-back.vercel.app/auth/an/${params.id}`;
      try {
        let res = await axios.get(uri);
        let rez = await axios.get(url);
        setUser(rez.data);
        setPost(res.data);
        setLoad(false)
        console.log("img", res.data);
        console.log("auth", rez.data);
      } catch (e) {
        alert(e);
        setLoad(true)
      }
    }
    call();
  }, []);
 // console.log(post)
 let logout=()=>{
   localStorage.removeItem('token')
   api.setVerify({})
   api.setPost([])
   history('/auth')
 }
  return (
    <>
    {!load?
    <div className="profile">
    <Head/>
 {user.username==api.verify.username?
 <div className='logout'>
   <BiLogInCircle size='30px' className='lg'
   onClick={logout}/>
    </div>:''}
      <div className="uper">
        <div className="pimg">
          <img
            src={
              user.imgUri
                ? user.imgUri
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CGh88WwR8hAX_NKjKC_WrOOzT-cVnGsw34DgCji_TEIPJaIl1Hbkeia5&s=10"
            }
          />
        </div>
     <span className='ur'>@{user.username}</span>
        <div className="ubot">
          <div>
            <span>{post?.length}</span>
            <span>post's</span>
          </div>{" "}
        {user.username==api.verify.username?
        <div>
            <FiEdit size='17px'/>
            <span>edit</span>
          </div>:''}
          <div>
            <span>{user.fav?.length}</span>
            <span>like's</span>
          </div>
        </div>
      </div>
<div className='plower'>
      <div className="lower">
      {!post.length==0?
    post.map((e)=>(
   <Body key={e._id} data={e}/> 
    ))
      :<span>no post yet </span>}
      </div>
      </div>
      <div className='pop'>
      <Popup/>
      </div>
    </div>:
            <div className='mainLoad'>
    <div className='load'></div>
    </div>
    }
    </>
  );
}
