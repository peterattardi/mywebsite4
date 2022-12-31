import { shuffle } from '../../utils/arrays'
import { Mask, RotatingText } from './components'
import './Home.scss'
import { greetings } from './utils/greetings'

const Home = () => {
  const greetingsList = [
    'Hello',
    ...shuffle(Object.values(greetings)),
    'Wow you stayed until the end!',
  ]

  return (
    <>
      {/* https://studiorotate.com/ */}
      <section id='Home'>
        <Mask>
          {(unmusked) => (
            <>
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
