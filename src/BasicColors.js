import React from 'react'

const BasicColors = () => {
  return (
    <>
      <section className='basic-colors'>
        <div className='black' style={{ backgroundColor: '#000000' }}>
          <p style={{ color: '#ffffff' }}>#000000</p>
        </div>
        <div className='white' style={{ backgroundColor: '#ffffff' }}>
          <p>#ffffff</p>
        </div>
        <div className='red' style={{ backgroundColor: '#ff0000' }}>
          <p style={{ color: '#ffffff' }}>#ff0000</p>
        </div>
        <div className='lime' style={{ backgroundColor: '#00ff00' }}>
          <p>#00ff00</p>
        </div>
        <div className='blue' style={{ backgroundColor: '#0000ff' }}>
          <p style={{ color: '#ffffff' }}>#0000ff</p>
        </div>
        <div className='yellow' style={{ backgroundColor: '#fff000' }}>
          <p>#fff000</p>
        </div>
        <div className='cyan' style={{ backgroundColor: '#00ffff' }}>
          <p>#00ffff</p>
        </div>
        <div className='magenta' style={{ backgroundColor: '#ff00ff' }}>
          <p style={{ color: '#ffffff' }}>#ff00ff</p>
        </div>
      </section>
    </>
  )
}

export default BasicColors
