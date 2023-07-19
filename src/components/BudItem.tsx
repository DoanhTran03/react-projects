import { FaEdit, FaTrash } from 'react-icons/fa';
interface Props {
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  item: string;
  index: number;
}

const BudItem = ({item, index, onDelete, onEdit}: Props) => {
  return (
    <div className='budItem'>
        <p className='budItem__name'>{item}</p>
        <div className="budItem__buttons">
            <button onClick={() => onEdit(index)} className="edit"><FaEdit></FaEdit></button>
            <button onClick={()=>onDelete(index)} className="trash"><FaTrash></FaTrash></button>
        </div>
    </div>
  )
}

export default BudItem