import React, { useEffect, useState } from 'react'
import comments from "../data/data"
import InfoCard from './InfoCard'

const getLocalTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme) return theme;
    else return "light-theme"
}

const DarkMode = () => {
    const [theme, setTheme] = useState(getLocalTheme);
    useEffect(()=>{
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    },[theme])
  return (
    <div className='darkMode'>
        <div className='darkMode__heading'>
            <h1>Dark Mode Project</h1>
            <button onClick={() => {theme == "light-theme" ? setTheme("dark-theme") : setTheme("light-theme")}}>Toggle</button>
        </div>
        <div className="darkMode__content">
            {comments.map(comment => <InfoCard key={comment.id} id={comment.id} title={comment.title} date={comment.date} length={comment.length} snippet={comment.snippet}></InfoCard>)}
        </div>
    </div>
  )
}

export default DarkMode