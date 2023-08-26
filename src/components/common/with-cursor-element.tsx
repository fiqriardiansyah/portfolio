import { CursorContext, State as CursorState } from 'context/cursor'
import { cleanObject } from 'lib/utils'
import { useContext, useRef } from 'react'

type Props = React.HTMLProps<HTMLDivElement> & { children: any; fallbackState?: CursorState; state?: CursorState; interupFallback?: boolean }

const WithCursorElement = ({ children, fallbackState, state, interupFallback, className, ...props }: Props) => {
  const { setState } = useContext(CursorContext)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const mouseEnter = () => {
    const st = cleanObject(state)
    if (setState)
      setState((prev) => ({
        ...prev,
        ...st
      }))
  }

  const mouseLeave = () => {
    if (interupFallback) {
      if (setState) setState((prev) => ({ ...prev, element: null }))
      return
    }
    const fallback = cleanObject(fallbackState)
    if (setState) setState((prev) => ({ ...prev, element: fallbackState?.element || null, ...fallback }))
  }

  return (
    <span ref={containerRef} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`z-[92] inline w-fit ${className}`} {...props}>
      {children}
    </span>
  )
}

export default WithCursorElement
