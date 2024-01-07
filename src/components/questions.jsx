import "./components.css";

const NameComponent = () => {
  const name = "Muhammad Ahmed";
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

const ObjName = () => {
  const nameObj = { name: "Muhammad Ahmed" };
  return (
    <div>
      <h3>{nameObj.name}</h3>
    </div>
  );
};

const ArrData = () => {
  const data = ["We", "are", "United"];
  return (
    <div>
      <ul className="data-ul">
        {data.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </div>
  );
};

const ObjListData = () => {
  const list = [
    { name: "Muhammad Ahmed 1" },
    { name: "Muhammad Ahmed 2" },
    { name: "Muhammad Ahmed 3" },
  ];
  return (
    <div>
      {list.map((v, i) => {
        return <h4 key={i}>{v.name}</h4>;
      })}
    </div>
  );
};

const ComplexData = () => {
  const complex = [
    { company: "XYZ", jobs: ["Javascript", "React"] },
    { company: "ABC", jobs: ["AngularJs", "Ionic"] },
  ];
  return (
    <div>
      {complex.map((v, i) => {
        return (
          <div key={i}>
            <h3>{v.company}</h3>
            <ul className="data-ul">
               {v.jobs.map((v,i)=>{
                return(
                    <li key={i}>{v}</li>
                )
               })} 
            </ul>
           
          </div>
        );
      })}
    </div>
  );
};



const LinksData = ()=>{

}

export { NameComponent, ObjName, ArrData, ObjListData, ComplexData,LinksData };
