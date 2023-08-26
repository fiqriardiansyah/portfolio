// import WithCursorElement from 'components/common/with-cursor-element'
import { StateContext } from 'context/state'
import { AnimatePresence, motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { useContext, useRef } from 'react'
import MenuClose from './close'
import MenuFooter from './footer'
import MenuNavigation from './navigation'

export const BLUR_HOVER_LINK = 'blur-hover-link'
export const CONTAINER_MENU = 'container-menu'

export default function Menu() {
  const { state } = useContext(StateContext)
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatePresence mode="wait">
      {state?.menuShow && (
        <motion.div
          id={CONTAINER_MENU}
          ref={containerRef}
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '100vh' }}
          transition={{ duration: 1, ease: easeDefault }}
          className="absolute left-0 top-0 z-[90] h-screen w-screen bg-white p-14"
        >
          <MenuClose />
          <p className={`font-spartan ${BLUR_HOVER_LINK} `}>Read more here</p>
          <div className="flex h-full w-full flex-col justify-between ">
            <MenuNavigation />
            <MenuFooter />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
