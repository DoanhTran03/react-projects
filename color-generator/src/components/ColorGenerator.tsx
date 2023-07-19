import { FormEvent, RefObject, useState } from "react";
import Values from "values.js";
import Form from "./Form";
import ColorGrid from "./ColorGrid";

const ColorGenerator = () => {
    const [color, setColor] = useState<string>("#f15025");
    const colorValue = new Values(color);
    const colors = colorValue.all(10);

    const submitHandle = (event: FormEvent, numRef: RefObject<HTMLInputElement>) => {
        event.preventDefault();
        if (numRef.current !== null) setColor(numRef.current.value);
        if (numRef.current !== null) console.log(numRef.current.value);
      }
  return (
    <div className="colorGenerator">
    <Form submitHandle={submitHandle}></Form>
    <ColorGrid colors={colors}></ColorGrid>
    </div>
  )
}

export default ColorGenerator