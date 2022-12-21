import gsap from 'gsap'
import { HotAndCold, Mask } from './components'
import './Home.scss'

const Home = () => {
  gsap.to('html', { background: 'black' })

  return (
    <>
      {/* https://studiorotate.com/ */}
      <section id='Home'>
        <Mask>{(listener) => <HotAndCold listener={listener} />}</Mask>
      </section>
    </>
  )
}

export default Home
