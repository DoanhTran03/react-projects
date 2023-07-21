import {PiBooksLight} from "react-icons/pi"
import {AiOutlineShoppingCart} from "react-icons/ai"
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__heading">
        <span className="icon"><PiBooksLight/></span>
        <h1>Ademo Books</h1>
      </div>
      <ul className="navBar__links">
        <li>
          <a href="">our project</a>
        </li>
        <li>
          <a href="">about us</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
      </ul>
      <span className="navBar__cartIcon"><AiOutlineShoppingCart/></span>
    </div>
  );
};

export default NavBar;
