import { useEffect } from 'react'
import { range } from '../../../utils/arrays'
import { euclideanDistance } from '../../../utils/math'
import gsap from 'gsap'

interface HotAndColdProps {
  listener: () => void
}

const HotAndCold: React.FC<HotAndColdProps> = (props) => {
  const { listener } = props
  const randomPoints = range(100).map(() => ({
    x: Math.random(),
    y: Math.random(),
  }))

  const onTreasureClick = () => {
    gsap.to('.mask', {
      '--size': '200%',
      duration: 1.5,
    })
    gsap.to('.random-point', { opacity: 0, display: 'none', duration: 0.5 })
    gsap.to('#Home', { cursor: 'default' })
    gsap.to('html', { background: 'white' })

    window.removeEventListener('mousemove', listener)
  }

  useEffect(() => {
    randomPoints.forEach(({ x, y }, i) => {
      const domElement = document.getElementById(`random-point-${i}`)
      if (domElement) {
        const distance = euclideanDistance(
          x,
          y,
          randomPoints[99].x,
          randomPoints[99].y,
        )

        domElement.style.color =
          distance < 0.2
            ? 'red'
            : distance < 0.4
            ? 'orange'
            : distance < 0.6
            ? 'blue'
            : 'purple'

        domElement.innerText =
          distance < 0.2
            ? 'hot'
            : distance < 0.4
            ? 'warm'
            : distance < 0.6
            ? 'cold'
            : 'colder'
      }
    })

    return () => window.removeEventListener('mousemove', listener)
  }, [])

  return (
    <>
      <button
        onClick={onTreasureClick}
        className='random-point'
        style={{
          position: 'absolute',
          left: `${randomPoints[99].x * 90}vw`,
          top: `${randomPoints[99].y * 90}vh`,
        }}
      >
        Click here to exit
      </button>

      {randomPoints.map(
        ({ x, y }, i) =>
          i !== 99 && (
            <h6
              key={i}
              className='random-point'
              id={`random-point-${i}`}
              style={{
                position: 'absolute',
                left: `${x * 90}vw`,
                top: `${y * 90}vh`,
              }}
            >
              .
            </h6>
          ),
      )}
    </>
  )
}

export default HotAndCold
