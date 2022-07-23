import {Link}from "react-router-dom";
export default function Ubody({data}){
  return (
    <Link to={`/profile/${data._id}`} className='link'>
    <div className='ubody'>
    <img src={data.imgUri?data.imgUri:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CGh88WwR8hAX_NKjKC_WrOOzT-cVnGsw34DgCji_TEIPJaIl1Hbkeia5&s=10`}/>
    <span>@{data.username}</span>
    </div></Link>
    )
}