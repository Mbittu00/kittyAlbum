import "./body.css";
import context from '../../context/context'
import {useContext}from'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function Body({data}) {
  let api=useContext(context)
  let handle=()=>{
 api.setView(data)
 api.setViewOpen(true)
  }
  return (
    <div className="body" onClick={handle}>
      <img src={data.imgUri}/>
      <div>
        <span>{data.username}</span>
        <AiOutlineStar size={"20px"} className='st' />
      </div>
    </div>
  );
}

export default Body;
