import Values from "values.js";
import { rgbToHex } from "../services/rbgToHex";
import { useEffect, useState } from "react";

interface Props {
  color: Values;
  index: number;
}

const ColorItem = ({color,index}: Props) => {
  const [alert, setAlert] = useState(false);
  const hexValue = rgbToHex(color.rgb[0],color.rgb[1],color.rgb[2]);
  const clickHandle = () => {
    setAlert(true);
    window.navigator.clipboard.writeText(hexValue);
  }
  useEffect(()=>{
    const timeout = setTimeout(()=> {
      setAlert(false);
    },500)
    return () => clearTimeout(timeout);
  },[alert])
  return (
    <article onClick={() => clickHandle()} style={{backgroundColor: hexValue}} className={index < 10 ? 'colorItem' : 'colorItem colorItem--light'}>
        <p className='percentage'>{color.weight + "%"}</p>
        <p className='value'>{hexValue}</p>
        {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  ) 
}

export default ColorItem