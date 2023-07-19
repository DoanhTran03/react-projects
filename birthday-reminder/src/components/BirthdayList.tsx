import { Birthday } from './BirthdayContainer'
import BirthdayItem from './BirthdayItem'
interface Props {
    birthdays: Birthday[],
}

const BirthdayList = ({birthdays}: Props) => {
  return (
    <div className='birthdayList'>
        {birthdays.map(birthday => <BirthdayItem key={birthday.id} birthday={birthday}></BirthdayItem>)}
    </div>
  )
}

export default BirthdayList