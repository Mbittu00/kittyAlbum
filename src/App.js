import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from'./page/home/home'
import Login from'./page/login/login'
import Preview from'./page/preview/preview'
import context from'./context/context'
import {useEffect,useContext}from'react'
function App() {
  let history=useNavigate()
  let api=useContext(context)
  useEffect(()=>{
    if (api.token) {
     
    }else{
      history('/auth')
    }
    
  },[api.token])
  return (
<Routes>
<Route path="/auth" element={<Login />}/>
<Route path="/" element={<Home />}/>
<Route path="/pre/:id" element={<Preview />}/>
</Routes>
  );
}

export default App;
