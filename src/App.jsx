
import { NameComponent, ObjName,ArrData,ObjListData,ComplexData } from "./components/questions.jsx";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div>
        <NameComponent />
        <ObjName />
        <ArrData />
        <ObjListData />
        <ComplexData />
      </div>
    </div>
  );
}

export default App;
