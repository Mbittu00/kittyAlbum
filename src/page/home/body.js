import "./body.css";
import {useNavigate} from "react-router-dom"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function Body({data}) {
  let history=useNavigate()
  let handle=()=>{
  history(`/pre/${data._id}`)
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
