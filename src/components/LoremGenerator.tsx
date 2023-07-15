import React, { FormEvent, useRef, useState } from 'react'
import paras from "../data/data"

const LoremGenerator = () => {
    const [paraNum, setParaNum] = useState(1);
    let numberRef = useRef<HTMLInputElement>(null);
    //Handle triggered when Generate button is Clicked
    const submitHandle = (event: FormEvent) => {
        event.preventDefault();
        let num = 0;
        if (numberRef.current !== null) num = parseInt(numberRef.current.value);
        if (1 <= num && num <= paras.length) setParaNum(num);
        else setParaNum(1);
    };
    //Rerendered everytime the paraNum is changed
    const shownPara = [...paras];
    shownPara.splice(paraNum, shownPara.length - paraNum);
    console.log(shownPara);
    return (
    <div className='loremGenerator'>
        <h1 className='loremGenerator__heading'>Tired of boring lorem ipsum?</h1>
        <form onSubmit={(event) => submitHandle(event)} className="loremGenerator__form" action="">
            <label htmlFor="">Paragraphs:&nbsp;</label>
            <input ref={numberRef} type="number" />
            <button>Generate</button>
        </form>
        {shownPara.map((para,index) => <p className='loremGenerator__para' key={index}>{para}</p>)}
    </div>
  )
}

export default LoremGenerator