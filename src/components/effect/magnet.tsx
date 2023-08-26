import { TweenMax, Power4 } from 'gsap'
import { moveMagnet } from 'lib/utils'
import { useEffect, useRef } from 'react'

type Props = React.HTMLProps<HTMLDivElement> & {
  children: any
  strength?: number
}

export default function Magnet({ children, strength = 50, ...props }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    ref.current?.addEventListener('mousemove', (e) => moveMagnet(e, strength))
    ref.current?.addEventListener('mouseout', function (event) {
      TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
    })
  }, [])

  return (
    <div {...props}>
      <div className="magnetic" ref={ref}>
        {children}
      </div>
    </div>
  )
}
