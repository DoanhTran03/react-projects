interface Props {
    message: string;
    flag: string;
}
const Alert = ({message, flag}: Props ) => {
  return (
    <div className={"alert alert--" + flag}>
        <p>{message}</p>
    </div>
  )
}

export default Alert