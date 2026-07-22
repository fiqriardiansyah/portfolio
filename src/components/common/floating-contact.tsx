import Cursor from 'components/common/cursor'
import WithCursorElement from 'components/common/with-cursor-element'
import Magnet from 'components/effect/magnet'
import CursorProvider from 'context/cursor'
import { StateContext } from 'context/state'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'lib/translations'
import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function FloatingContact() {
  const { state } = useContext(StateContext)
  const { t } = useTranslation()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [0, 1])

  const sayHiCursor = {
    element: (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.4 }}
        className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-primary"
      >
        <p className="m-0 font-poppins text-sm font-medium text-secondary">{t('home_contact_say_hi')} 👋</p>
      </motion.div>
    ),
    key: 'sayHi',
    type: 'hover'
  }

  if (state?.menuShow || state?.isSplashShow) return null

  return (
    <motion.div style={{ opacity }} className="fixed bottom-6 left-6 z-[70] md:bottom-10 md:left-10">
      <CursorProvider>
        <Cursor />
        <WithCursorElement
          state={{ element: sayHiCursor as any }}
          fallbackState={{ element: { element: null, type: 'hover', key: new Date().getTime() } }}
        >
          <Magnet strength={30}>
            <a
              href="mailto:fiqriardian92@gmail.com"
              aria-label="Say hi / contact"
              className="group flex h-[60px] w-[60px] items-center justify-center rounded-full bg-yellow-400 text-primary shadow-lg transition-transform hover:scale-105 md:h-[80px] md:w-[80px]"
            >
              <AiOutlineArrowRight className="-rotate-45 text-2xl transition-transform duration-300 group-hover:rotate-0 md:text-3xl" />
            </a>
          </Magnet>
        </WithCursorElement>
      </CursorProvider>
    </motion.div>
  )
}
