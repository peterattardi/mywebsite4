import { ReactNode, useEffect, useState } from 'react'
import { debounce } from '../../../utils/animations'
import gsap from 'gsap'

interface MaskProps {
  children: (unmask: () => void, unmusked: boolean) => ReactNode
}

const Mask: React.FC<MaskProps> = (props) => {
  const [unmusked, setUnmusked] = useState(false)
  gsap.to('html', { background: 'black' })
  const { children } = props
  const listener = debounce((ev: MouseEvent) => {
    const { clientX, clientY } = ev

    gsap.to('.mask', {
      '--x': `${clientX}px`,
      '--y': `${clientY}px`,
    })
  }, 0)

  const unmusk = () => {
    window.removeEventListener('mousemove', listener)
    gsap.to('#Home', { cursor: 'default' })
    gsap.to('html', { background: 'white' })

    const t = gsap.timeline()
    t.to('.mask', {
      '--size': '200%',
      duration: 1.5,
    })

    t.then(() => setUnmusked(true))

    t.play()
  }

  useEffect(() => {
    window.addEventListener('mousemove', listener)

    return () => unmusk()
  }, [])

  return <div className='mask'>{children(unmusk, unmusked)}</div>
}

export default Mask
