import React, { useState } from 'react'
import SingleColor from './SingleColor'
import BasicColors from './BasicColors'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#dc143c').all(10))

  const handleSubmit = e => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10) //tint and shade 100% divided by 10
      setList(colors)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className='container'>
        <h3 className='container'>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          {/* Input value will change color state value */}
          <input
            type='text'
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder='#000000'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <h4 className='basic-color'>Basic Colors:</h4>
      <BasicColors />
      <section className='colors'>
        {list.map((color, index) => {
          {
            /* Spread operator will pass all rest properties*/
          }
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    </>
  )
}

export default App
