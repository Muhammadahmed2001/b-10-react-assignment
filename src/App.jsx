
import { NameComponent, ObjName, ArrData, ObjListData, ComplexData, LinksData } from "./components/questions.jsx";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="main container">
      <div>
      <h1 className="question">Question 1</h1>
        <NameComponent />
        <ObjName />
        <ArrData />
        <ObjListData />
        <ComplexData />
        <hr />
        <div>
          <h1 className="question">Question 2</h1>
          <h3>1. Import Something from 'package'</h3>
          <p>This is like unwrapping a toy and saying, "I want a surprise toy!" You don't know exactly which toy you'll get, but you're excited to see what's inside. So, when you say <b>import Something from 'package'</b>, you're getting a surprise toy from the package. You can play with it without knowing its specific name.</p>

          <h3>{"2. Import {Something} from 'package'"}</h3>
          <p>{`Now, this is a bit different. It's like looking at the wrapping paper and saying, "I want the toy with the robot
   picture." You're being specific about which toy you want. So, when you say import { Something } from 'package', you're
    choosing a toy by its name, like the one with the robot picture on the wrapper. Then you can play with that specific 
    toy.`}</p>
          <hr />
        </div>
        <div></div>
        <h1 className="question">Question 3</h1>
        <LinksData />
      </div>
    </div>
  );
}

export default App;
