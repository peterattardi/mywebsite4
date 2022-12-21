import gsap from 'gsap'
import { useState } from 'react'
import { shuffle } from '../../utils/arrays'
import { HotAndCold, Mask, RotatingText } from './components'
import './Home.scss'
import { greetings } from './utils/greetings'

const Home = () => {
  const greetingsList = shuffle(greetings)

  return (
    <>
      {/* https://studiorotate.com/ */}
      <section id='Home'>
        <Mask>
          {(unmusk, unmusked) => (
            <>
              {!unmusked && <HotAndCold onFinish={unmusk} />}
              {unmusked && (
                <div className='hero'>
                  <RotatingText words={greetingsList} />
                </div>
              )}
            </>
          )}
        </Mask>
      </section>
    </>
  )
}

export default Home
