import gsap from 'gsap'
import { useEffect } from 'react'
import { range } from '../../../utils/arrays'
interface RotatingTextProps {
  words: string[]
}
const RotatingText = (props: RotatingTextProps) => {
  const { words } = props

  const animate = () => {
    const t = gsap.timeline()

    range(words.length).forEach((_, index) => {
      t.to(`#word-${index}`, {
        opacity: 1,
        display: 'inline-block',
        duration: 0,
        delay: 0.75,
      })
      t.to(`#word-${index}`, { rotateX: '-90 deg', duration: 0.2, stagger: 0 })
      t.to(`#word-${index}`, { rotateX: '0 deg', duration: 0.75, stagger: 0.1 })

      if (index < words.length - 1) {
        t.to(`#word-${index}`, {
          rotateX: '90 deg',
          duration: 0.15,
          stagger: 0.1,
        })
        t.to(`#word-${index}`, { display: 'none', duration: 0, stagger: 0 })
      }
    })

    t.play()
  }

  useEffect(() => {
    animate()
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
