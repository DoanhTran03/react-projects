import BudItem from './BudItem'
import BudForm from './BudForm'
import { RefObject, useState } from 'react'

const BudGrid = () => {
  const [items, setItems] = useState<string[]>([]);
  
  const addItem = (taskRef: RefObject<HTMLInputElement>) => {
    if (taskRef.current !== null) setItems([...items, taskRef.current.value]);
  }

  return (
    <div className='budGrid'>
            <BudForm addItem={addItem}></BudForm>
        <div className="budGrid__items">
            {items.map((item, index) => <BudItem item={item} key={index}></BudItem>)}
        </div>
        <button className='budGrid__clearBtn'>Clear Item</button>
    </div>
  )
}

export default BudGrid