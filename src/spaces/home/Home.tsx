import gsap from 'gsap'
import React, { useState, useEffect } from 'react'
import { debounce } from '../../utils/animations'
import './Home.scss'

const Home = () => {
  const listener = debounce((ev: MouseEvent) => {
    const { clientX, clientY } = ev
    console.log(clientX, clientY)

    gsap.to('.mask', {
      '--x': `${clientX}px`,
      '--y': `${clientY}px`,
    })
  }, 0)

  useEffect(() => {
    window.addEventListener('mousemove', listener)
    return () => window.removeEventListener('mousemove', listener)
  }, [])
  return (
    <>
      <section id='Home'>
        <div className='mask'>
          <p>Welcome</p>
          <button
            onClick={() => {
              gsap.to('.mask', {
                '--size': '200%',
                duration: 1.5,
              })
              gsap.to('button', { opacity: 0, display: 'none', duration: 0.5 })
              gsap.to('#Home', { cursor: 'default' })

              window.removeEventListener('mousemove', listener)
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          >
            Click here to exit
          </button>
        </div>
      </section>
    </>
  )
}

export default Home
