import { FaEdit, FaTrash } from 'react-icons/fa';
interface Props {
  item: string;
}
const BudItem = ({item}: Props) => {
  return (
    <div className='budItem'>
        <p className='budItem__name'>{item}</p>
        <div className="budItem__buttons">
            <button className="edit"><FaEdit></FaEdit></button>
            <button className="trash"><FaTrash></FaTrash></button>
        </div>
    </div>
  )
}

export default BudItem