import { IoIosArrowRoundBack } from 'react-icons/io';
import {Link}from "react-router-dom";
export default function Head(){
  return (
    <div className='uhead'>
    <Link to='/' className='link bl'><IoIosArrowRoundBack size='35px'/></Link>
    </div>
    )
}