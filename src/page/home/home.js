import "./home.css";
import { Link } from "react-router-dom";
import Popup from "./popup";
import Foot from "./foot";
import Body from "./body";
import context from "../../context/context";
import { useContext } from "react";
function Home() {
  let api = useContext(context);
  console.log(api.post);
  return (
    <>
      {!api.apost ? (
        <div className="home">
          <div className="bb">
            {api.post.map((e) => (
              <Body key={e._id} data={e} />
            ))}
          </div>
          <div className="pop">
            <Popup />
          </div>
          <Foot />
        </div>
      ) : (
        <div className="mainLoad">
          <div className="load"></div>
        </div>
      )}
    </>
  );
}

export default Home;
