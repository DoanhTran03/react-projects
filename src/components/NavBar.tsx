import {PiBooksLight} from "react-icons/pi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useGlobalState } from "../contexts/context";
const NavBar = () => {
    const context = useGlobalState();
    const hoverHandle = (event: React.MouseEvent) => {
        context?.setLink(event.currentTarget);
    }  
  return (
    <div className="navBar">
      <div className="navBar__heading">
        <span className="icon"><PiBooksLight/></span>
        <h1>Ademo Books</h1>
      </div>
      <ul className="navBar__links">
        <li onMouseOver={(event) => hoverHandle(event)}>
          <a href="">our project</a>
        </li>
        <li onMouseOver={(event) => hoverHandle(event)}>
          <a href="">about us</a>
        </li>
        <li onMouseOver={(event) => hoverHandle(event)}>
          <a href="">contact</a>
        </li>
      </ul>
      <span className="navBar__cartIcon"><AiOutlineShoppingCart/></span>
    </div>
  );
};

export default NavBar;
