import gsap from 'gsap'
import { useEffect } from 'react'
import { range } from '../../../utils/arrays'
interface RotatingTextProps {
  words: string[]
}
const RotatingText = (props: RotatingTextProps) => {
  const { words } = props

  useEffect(() => {
    const t = gsap.timeline()

    range(words.length).forEach((_, index) => {
      t.to(`#word-${index}`, {
        opacity: 1,
        display: 'inline-block',
        duration: 0,
        delay: 0.75,
      })
      t.to(`#word-${index}`, { rotateX: '-90 deg', duration: 0, stagger: 0 })
      t.to(`#word-${index}`, { rotateX: '0 deg', duration: 0.38, stagger: 0.1 })
      t.to(`#word-${index}`, {
        rotateX: '90 deg',
        duration: 0.18,
        stagger: 0.1,
      })
      t.to(`#word-${index}`, { display: 'none', duration: 0, stagger: 0 })
    })

    t.play()
  }, [])

  return (
    <div>
      {words.map((word, i) =>
        word.split('').map((letter, j) => (
          <span key={`${i}${j}`} className='letter' id={`word-${i}`}>
            {letter}
          </span>
        )),
      )}
    </div>
  )
}

export default RotatingText
