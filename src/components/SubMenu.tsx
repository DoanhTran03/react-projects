import { useRef } from "react";
import { useGlobalState } from "../contexts/context"
import {links} from "../data/links"
const SubMenu = () => {
    const context = useGlobalState();
    /*!--Change location according to the link*/
    let subMenuRef = useRef<HTMLDivElement>(null);
    const linkRect = context?.link?.getBoundingClientRect();
    const center = linkRect ? (linkRect?.left + linkRect?.right) / 2 : "";
    const bottom = linkRect ? (linkRect.bottom + 10) : "";

    if (subMenuRef !== null) {
        if (subMenuRef.current !== null) {subMenuRef.current.style.left = `${center}px`;
        subMenuRef.current.style.top = `${bottom}px`;
    }
    }
    /*!--Change content value according to the links*/
    const content = (links.find(link => link.name == context?.link?.textContent))?.content;
    return (
    <div ref={subMenuRef} className={context?.link? 'subMenu ' : 'subMenu subMenu--collapsed'}>
        <h1>{content}</h1>
    </div>
    )
}

export default SubMenu