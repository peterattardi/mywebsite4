import { ReactNode, useEffect, useState } from 'react'
import { dom } from '../../../utils/animations'

interface MaskProps {
  children: (unmask: () => void, unmusked: boolean) => ReactNode
}

const Mask: React.FC<MaskProps> = (props) => {
  let _clientX = 0
  let _clientY = 0
  let _request: number | null = null
  const [unmusked, setUnmusked] = useState(false)
  dom('html').style.background = 'black'
  const { children } = props

  const listener = (ev: MouseEvent) => {
    const { clientX, clientY } = ev
    _clientX = clientX
    _clientY = clientY
  }

  const unmusk = () => {
    window.removeEventListener('mousemove', listener)

    dom('#Home').style.cursor = 'default'
    dom('html').style.background = 'white'

    cancelAnimationFrame(_request!)

    dom('.mask').style.cssText = `
    transition: clip-path 1s ease-out;
    --size: 200%;
    `

    console.log(dom('.mask'))

    setUnmusked(true)
  }

  useEffect(() => {
    window.addEventListener('mousemove', listener)
    const mask = dom('.mask')

    const animate = () => {
      mask.style.cssText = `
      --x: ${_clientX}px;
      --y: ${_clientY}px;
    `
      _request = requestAnimationFrame(animate)
    }

    _request = requestAnimationFrame(animate)

    return () => unmusk()
  }, [])

  return <div className='mask'>{children(unmusk, unmusked)}</div>
}

export default Mask
