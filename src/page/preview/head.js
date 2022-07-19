import { IoIosArrowBack } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import {useNavigate} from "react-router-dom"
export default function Head(){
  let history=useNavigate()
  return(
   <div className='phead'> 
    <IoIosArrowBack className='ic' size='30px'
    onClick={()=>history(-1)}/>
    <AiFillDelete className='ic' size='30px'/>
    </div>
    )
}