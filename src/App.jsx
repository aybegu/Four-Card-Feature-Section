import { useState } from 'react'
import Card from './Components/Card'
import data from './data'


function App() {

  const cardElements = data.map(card => {
    return (
      <Card
        // title={card.title}
        // text={card.text}
        // image={card.image}
        key = {card.id}
        {...card}
      />
    )
  })

  return (
    <div className='container'>
      <main className='main'>
        <h1 className='main--title'>Reliable, efficient delivery</h1>
        <h1 className='main--title'>Powered by Technology</h1>
        <p className='main--text'>
          Our Artificial Intelligence powered tools use millions of project data points
          to ensure that your project is successful
        </p>
        <div className='main--card'>{cardElements}</div>
      </main>
      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/aybegu">Ayca Berfin Gurler</a>.
        </p>
      </footer>
    </div>
  )
}

export default App
