import { RefObject, useRef } from "react"

interface Props {
  isEdit: boolean;
  addItem: (taskRef:RefObject<HTMLInputElement>) => void;
  editItem: (taskRef:RefObject<HTMLInputElement>) => void;
}

const BudForm = ({addItem, isEdit, editItem}: Props) => {
  const taskRef = useRef<HTMLInputElement>(null);
  return (
    <form className="budForm" action="" onSubmit={(event) => {
      event.preventDefault();
      isEdit ? editItem(taskRef) : addItem(taskRef) 
    }}>
        <input id='input' ref={taskRef} className="budForm__input" type="text" name="" placeholder={isEdit? "input changing value here..." : "e.g. go to school"}/>
        <button className="budForm__btn">{isEdit ? "Edit" : "Submit"}</button>
    </form>
  )
}

export default BudForm