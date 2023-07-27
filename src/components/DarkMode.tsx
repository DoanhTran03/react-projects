import React from 'react'
import comments from "../data/data"
import InfoCard from './InfoCard'

const DarkMode = () => {
  return (
    <div className='darkMode'>
        <div className='darkMode__heading'>
            <h1>Dark Mode Project</h1>
            <button>Toggle</button>
        </div>
        <div className="darkMode__content">
            {comments.map(comment => <InfoCard></InfoCard>)}
        </div>
    </div>
  )
}

export default DarkMode