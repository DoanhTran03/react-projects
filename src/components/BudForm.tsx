import { RefObject, useRef } from "react"

interface Props {
  addItem: (taskRef:RefObject<HTMLInputElement>) => void;
}

const BudForm = ({addItem}: Props) => {
  const taskRef = useRef<HTMLInputElement>(null);
  return (
    <form className="budForm" action="" onSubmit={(event) => {
      event.preventDefault();
      addItem(taskRef);
    }}>
        <input id='input' ref={taskRef} className="budForm__input" type="text" name="" placeholder="e.g. go to school"/>
        <button className="budForm__btn">Submit</button>
    </form>
  )
}

export default BudForm