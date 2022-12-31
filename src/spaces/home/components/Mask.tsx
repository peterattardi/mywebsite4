import { ReactNode, useEffect, useState } from 'react'
import { dom } from '../../../utils/animations'
import { euclideanDistance } from '../../../utils/math'

interface MaskProps {
  children: (unmusked: boolean) => ReactNode
}

let _clientX = 0
let _clientY = 0
let _request: number | null = null
const randomPoint = {
  x: Math.random(),
  y: Math.random(),
}

const Mask: React.FC<MaskProps> = (props) => {
  const [unmusked, setUnmusked] = useState(false)
  dom('html').style.background = 'black'
  const { children } = props

  const mouseListener = (ev: MouseEvent) => {
    const { clientX, clientY } = ev
    _clientX = clientX
    _clientY = clientY
  }

  const keyListener = (ev: KeyboardEvent) => {
    if (ev.key === 'q') unmask()
  }

  const unmask = () => {
    window.removeEventListener('mousemove', mouseListener)
    cancelAnimationFrame(_request!)

    dom('#Home').style.cursor = 'default'
    dom('html').style.background = 'white'

    dom('.mask').style.cssText = `
    transition: clip-path 1s ease-out;
    background: white;
    --size: 200%;
    `

    dom('.random-point').style.opacity = '0'

    setTimeout(() => {
      dom('.random-point').style.display = 'none'
    }, 500)

    setUnmusked(true)
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseListener)
    window.addEventListener('keydown', keyListener)
    window.onkeydown
    const mask = dom('.mask')

    const animate = () => {
      const distance = euclideanDistance(
        randomPoint.x,
        randomPoint.y,
        _clientX / window.innerWidth,
        _clientY / window.innerHeight,
      )

      mask.style.cssText = `
      --x: ${_clientX}px;
      --y: ${_clientY}px;
      background-color: hsl(${distance * 281}, 100%, 50%);
    `
      _request = requestAnimationFrame(animate)
    }

    _request = requestAnimationFrame(animate)

    return () => unmask()
  }, [])

  return (
    <>
      <span id='skip'>Press 'q' to skip</span>
      <div className='mask'>
        <>
          <button
            className='random-point'
            onClick={unmask}
            style={{
              position: 'absolute',
              left: `${randomPoint.x * 90}vw`,
              top: `${randomPoint.y * 90}vh`,
            }}
          >
            Click here to exit
          </button>
          {children(unmusked)}
        </>
      </div>
    </>
  )
}

export default Mask
