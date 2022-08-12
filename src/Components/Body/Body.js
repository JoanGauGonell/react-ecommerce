
import "./Body.css";
import Aside from "../Aside/Aside";
import Main from  "../Main/Main";

function Body({ addProduct }) {
  return (
    <div className="d-flex bd-highlight body">
      <div className="p-2 w-100 bd-highlight ">
        <Main addProduct={addProduct} />
      </div>
      <div className="p-2 flex-shrink-1 bd-highlight">
        <Aside />
      </div>
    </div>
  );
}

export default Body;