import { IoIosArrowRoundBack } from 'react-icons/io';
import {useNavigate} from "react-router-dom"
export default function Head(){
  let history=useNavigate()
  return (
    <div className='uhead'>
<IoIosArrowRoundBack size='35px' onClick={()=>{
  history(-1)
}}/>
    </div>
    )
}