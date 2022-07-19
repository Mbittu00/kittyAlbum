
import './home.css';
import {
  Link
} from "react-router-dom";
import Head from'./head'
import Foot from'./foot'
import Body from'./body'
import context from'../../context/context'
import {useContext}from'react'
function Home() {
  let api=useContext(context)
  console.log(api.post)
  return (
    <div className="home">
<Head/>
<div className='bb'>
{
  api.post.map((e)=>(
  <Body key={e._id} data={e}/> 
  ))
}
</div>
<Foot/>
    </div>
  );
}

export default Home;
    