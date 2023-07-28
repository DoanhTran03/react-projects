import moment from "moment"

interface Props {
    id: number,
    title: string,
    date: any,
    length: number,
    snippet: string
}

const InfoCard = ({title,date,length,snippet} : Props) => {
  

  return (
    <div className='infoCard'>
        <h3>{title}</h3>
        <p>{`${moment(date).format('dddd Do, YYYY')} ${length} minutes ago`}</p>
        <p>{snippet}</p>
    </div>
  )
}

export default InfoCard