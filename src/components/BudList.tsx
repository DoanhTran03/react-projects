import BudItem from './BudItem'
import BudForm from './BudForm'
import { RefObject, useEffect, useState } from 'react'

const BudGrid = () => {
  const [items, setItems] = useState<string[]>([]);
  const [isEdit, setEdit] =   useState(false);
  let [editIndex, setEditIndex] = useState(-1);

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
  
  const edit = (index: number) => {
    setEditIndex(index);
    setEdit(true);
  }

  const editItem = (taskRef: RefObject<HTMLInputElement>) => {
    setItems(items.map((item,index) => {
       if (index == editIndex && taskRef.current !== null) return taskRef.current.value;
       return item;
    }));
    if (taskRef.current !== null) taskRef.current.value = "";
    setEdit(false);
  }

  console.log(items);
  const clearItem = () => {
    setItems([]);
  }

  return (
    <div className='budGrid'>
            <BudForm editItem={editItem} isEdit={isEdit} addItem={addItem}></BudForm>
        <div className="budGrid__items">
            {items.map((item, index) => <BudItem item={item} index={index} key={index} onDelete={deleteItem} onEdit={edit}></BudItem>)}
        </div>
        <button className='budGrid__clearBtn' onClick={() => clearItem()}>Clear Item</button>
    </div>
  )
}

export default BudGrid