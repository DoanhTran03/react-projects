import React, { FormEvent, RefObject, useRef } from 'react'

interface Props {
  submitHandle: (event: FormEvent, numRefer: RefObject<HTMLInputElement>) => void;
}

const Form = ({submitHandle}: Props) => {
  const numRefer = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => submitHandle(event, numRefer)} className="form" action="">
        <label className="form__label" htmlFor="">Color Generator</label>
        <input ref={numRefer} className="form__input" type="text" placeholder="#f15025" defaultValue={"#f15025"}/>
        <button className="form__btn">Submit</button>
    </form>
  )
}

export default Form