import React from 'react'

const Form = () => {
  return (
    <form className="form" action="">
        <label className="form__label" htmlFor="">Color Generator</label>
        <input className="form__input" type="text" placeholder="#f15025"/>
        <button className="form__btn">Submit</button>
    </form>
  )
}

export default Form