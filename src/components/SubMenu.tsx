import { useRef } from "react";
import { useGlobalState } from "../contexts/context"

const SubMenu = () => {
    const context = useGlobalState();
    let subMenuRef = useRef<HTMLDivElement>(null);
    const linkRect = context?.link?.getBoundingClientRect();
    const center = linkRect ? (linkRect?.left + linkRect?.right) / 2 : "";
    const bottom = linkRect ? (linkRect.bottom + 10) : "";
    
    if (subMenuRef !== null) {
        if (subMenuRef.current !== null) {subMenuRef.current.style.left = `${center}px`;
        subMenuRef.current.style.top = `${bottom}px`;
    }
    }
    return (
    <div ref={subMenuRef} className={context?.link? 'subMenu ' : 'subMenu subMenu--collapsed'}>
        <h1>This is submenu</h1>
    </div>
    )
}

export default SubMenu