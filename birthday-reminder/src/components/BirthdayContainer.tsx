import { useState } from 'react'
import BirthdayList from './BirthdayList'
import peoples from "../data/data"

export interface Birthday {
    id: number;
    name: string;
    age: number;
    image: string
}
const BirthdayContainer = () => {
    const [data, setData] = useState<Birthday[]>(peoples) 
  return (
    <div className='birthdayContainer'>
        <h1>{data.length + " birthdays today"}</h1>
        <BirthdayList birthdays={data}></BirthdayList>
        <button className='birthdayContainer__btn'>clear all</button>
    </div>
  )
}

export default BirthdayContainer