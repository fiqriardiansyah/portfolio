import { CursorContext } from 'context/cursor'
import { AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'

const Cursor = () => {
  const { state } = useContext(CursorContext)
  const cursorRef = useRef<any>()

  useEffect(() => {
    if (!cursorRef.current) return

    let mouseX = -100
    let mouseY = -100

    let ballX = -100
    let ballY = -100

    const speed = 0.1

    function animate() {
      const distX = mouseX - ballX
      const distY = mouseY - ballY

      ballX = ballX + distX * speed
      ballY = ballY + distY * speed

      cursorRef.current!.style.left = ballX + 'px'
      cursorRef.current!.style.top = ballY + 'px'

      requestAnimationFrame(animate)
    }
    animate()

    const eventListener = (event: any) => {
      mouseX = event.pageX
      mouseY = event.pageY
      cursorRef.current?.classList.add('opacity-1')
      cursorRef.current?.classList.remove('opacity-0')
    }

    document.addEventListener('mousemove', eventListener)
    document.addEventListener('mouseout', () => {
      cursorRef.current?.classList.add('opacity-0')
      cursorRef.current?.classList.remove('opacity-1')
    })
    document.addEventListener('mouseover', () => {
      cursorRef.current?.classList.add('opacity-1')
      cursorRef.current?.classList.remove('opacity-0')
    })

    return () => {
      document.removeEventListener('mousemove', eventListener)
    }
  }, [])

  const classes = clsx(state?.className, state?.bgColor, 'opacity-0')

  return (
    <div className={classes} ref={cursorRef}>
      <AnimatePresence mode="wait">{state?.element?.element}</AnimatePresence>
    </div>
  )
}

export default Cursor
