import BudItem from './BudItem'
import BudForm from './BudForm'
import { RefObject, useEffect, useState } from 'react'

const BudGrid = () => {
  const [items, setItems] = useState<string[]>([]);
  
  useEffect 
  const addItem = (taskRef: RefObject<HTMLInputElement>) => {
    if (taskRef.current !== null) {
      setItems([...items, taskRef.current.value]);
      taskRef.current.value = '';
    };
  }

  const deleteItem = (index: number) => {
    let deletedItems = [...items];
    deletedItems.splice(index, 1);
    setItems(deletedItems);
}

  const clearItem = () => {
    setItems([]);
  }
  return (
    <div className='budGrid'>
            <BudForm addItem={addItem}></BudForm>
        <div className="budGrid__items">
            {items.map((item, index) => <BudItem item={item} index={index} key={index} onDelete={deleteItem}></BudItem>)}
        </div>
        <button className='budGrid__clearBtn' onClick={() => clearItem()}>Clear Item</button>
    </div>
  )
}

export default BudGrid