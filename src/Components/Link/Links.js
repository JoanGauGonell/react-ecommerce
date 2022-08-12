import "./Link.css";
import { BrowserRouter, routes, route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Link({ link }) {
return(
<BrowserRouter>
  <routes>
    <route path="/AboutUs" />
    <route path="/Shops" />
    <route path="/Partnership" />
    <route path="/Contact" />
    <route path="/Checkout" />
  </routes>
</BrowserRouter>
)
}

export default Link;