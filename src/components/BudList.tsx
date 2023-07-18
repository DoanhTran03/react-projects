import BudItem from './BudItem'
import BudForm from './BudForm'
import { RefObject, useEffect, useState } from 'react'
import Alert from './Alert';

const BudGrid = () => {
  const getItemsLocal = () => {
    let list = localStorage.getItem('list');
    if (list) return JSON.parse(list);
    else return '';
  }

  const [items, setItems] = useState<string[]>(getItemsLocal);
  const [isEdit, setEdit] =   useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [alert, setAlert] = useState({message: '', flag: ''});

  const addItem = (taskRef: RefObject<HTMLInputElement>) => {
    if (taskRef.current !== null) {
      setItems([...items, taskRef.current.value]);
      taskRef.current.value = '';
      setAlert({message: "Add task successfully", flag: "success"})
    };
  }

  const deleteItem = (index: number) => {
    let deletedItems = [...items];
    deletedItems.splice(index, 1);
    setItems(deletedItems);
    setAlert({message: "Delete task sucessfully", flag: "danger"})
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
    setAlert({message: "Edit task successfully",flag: "success"});
  }

  const clearItem = () => {
    setItems([]);
    setAlert({message: "All item cleared", flag: "danger"});
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({message:'', flag: ''});
    }, 1000)
    return () => clearTimeout(timeout);
  }, [alert]);

  useEffect(()=> {
    window.localStorage.setItem("list",JSON.stringify(items));
  },[alert]);

  return (
    <div className='budGrid'>
            {alert.message !== '' ? <Alert message={alert.message} flag={alert.flag}></Alert> : ''}
            <BudForm editItem={editItem} isEdit={isEdit} addItem={addItem}></BudForm>
        <div className="budGrid__items">
            {items.map((item, index) => <BudItem item={item} index={index} key={index} onDelete={deleteItem} onEdit={edit}></BudItem>)}
        </div>
        <button className='budGrid__clearBtn' onClick={() => clearItem()}>Clear Item</button>
    </div>
  )
}

export default BudGrid