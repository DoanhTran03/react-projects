import { useEffect, useRef, useState } from "react";
import { FaBars, FaFacebookF, FaTwitter, FaBehanceSquare, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const iconRef = useRef<HTMLSpanElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const clickHandle = () =>  {
      isExpanded ? setIsExpanded(false) : setIsExpanded(true);
    }

    useEffect(() => {
      if (isExpanded == false) {
        if(iconRef.current) iconRef.current.style.transform = 'rotate(0deg)';
        if(listRef.current) {
          listRef.current.style.height = "0";
          listRef.current.style.display = "none";
        }
      }
      else {
        if(iconRef.current) iconRef.current.style.transform = 'rotate(90deg)';
        if(listRef.current) { 
          listRef.current.style.height = "fit-content";
          listRef.current.style.display = "block";
       }
      }
    },[isExpanded]);

  return (
    <nav className="navBar">
      <div className="navBar__heading">
        <h1 className="name">
          Coding <strong>Addict</strong>
        </h1>
        <span ref={iconRef} onClick={() => clickHandle()} className={"icon"}>
          <FaBars></FaBars>
        </span>
      </div>
      <ul ref={listRef} className={"navBar__links"}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Profile</a></li>
      </ul>
      <ul className="navBar__icons">
        <li className="icon"><a href=""><FaFacebookF></FaFacebookF></a></li>
        <li className="icon"><a href=""><FaTwitter></FaTwitter></a></li>
        <li className="icon"><a href=""><FaBehanceSquare></FaBehanceSquare></a></li>
        <li className="icon"><a href=""><FaLinkedin></FaLinkedin></a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
