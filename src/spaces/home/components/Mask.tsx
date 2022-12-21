import { ReactNode, useEffect } from 'react'
import { debounce } from '../../../utils/animations'
import gsap from 'gsap'

interface MaskProps {
  children: (listener: () => void) => ReactNode
}

const Mask: React.FC<MaskProps> = (props) => {
  const { children } = props
  const listener = debounce((ev: MouseEvent) => {
    const { clientX, clientY } = ev

    gsap.to('.mask', {
      '--x': `${clientX}px`,
      '--y': `${clientY}px`,
    })
  }, 0)

  useEffect(() => {
    window.addEventListener('mousemove', listener)
    return () => window.removeEventListener('mousemove', listener)
  }, [])

  return <div className='mask'>{children(listener)}</div>
}

export default Mask
