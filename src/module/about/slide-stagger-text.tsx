import StaggerElement from 'components/effect/stagger-element'
import { stagger, useAnimate } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { useEffect } from 'react'

export default function SlideStaggerText() {
  const [scope, animate] = useAnimate()
  const startAnimate = () => {
    animate('.stagger-item', { y: 0 }, { duration: 0.6, delay: stagger(0.06), ease: easeDefault as any })
  }

  useEffect(() => {
    startAnimate()
  }, [])

  return (
    <StaggerElement className="text-4xl capitalize text-white" ref={scope} initial={{ y: '-150%' }}>
      fiqri ardiansyah wkwkw mantapppppp bener r
    </StaggerElement>
  )
}
