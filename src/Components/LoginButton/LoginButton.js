import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const LoginButton = () => {
    const [logged, setLoged] = useState(localStorage.getItem("logged") || false);
    function logout () {
    localStorage.setItem("logged", "false");
        setLoged(false);
    }
  return (
    
    <>
    {logged === "true" ? (
                <button className="btn btn-danger" onClick={logout}>
                    Logout
                 </button>
    ):(
        <Link to='/Login'>
            <button className="btn btn-primary">
              Login
           </button>
     </Link>)
     }
    </>
  )
}

export default LoginButton