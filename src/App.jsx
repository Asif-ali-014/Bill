import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useContext } from "react";
import { MyContext } from "./context/MyProvider";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";

const App = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="wrapper">
        <div className="center-wrapper">
          <img
            style={{ width: "300px", height: "200px" }}
            src="https://static01.nyt.com/images/2020/01/28/multimedia/28xp-memekid3/28cp-memekid3-superJumbo.jpg"
            alt=""
          />
          <h1>Who pays the bill?</h1>
          {context.stage === 1 ? <StageOne /> : <StageTwo />}
        </div>
      </div>
    </>
  );
};

export default App;
