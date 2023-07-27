interface Props {
    id: number,
    title: string,
    date: any,
    length: number,
    snippet: string
}

const InfoCard = () => {
  return (
    <div className='infoCard'>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, non!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, facere?</p>
    </div>
  )
}

export default InfoCard