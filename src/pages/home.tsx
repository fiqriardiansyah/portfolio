import WithCursorElement from 'components/common/with-cursor-element'
import withTransition, { PageProps } from 'components/common/with-transition'
import FiqriArdiansyahFollower from 'components/cursor-follower/fiqriardiansyah'
import { CursorContext } from 'context/cursor'
import { StateContext } from 'context/state'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { useContext, useEffect } from 'react'
import GoodStuff from 'assets/images/good-stuff.gif'
import IndonesiaCoy from 'assets/images/indonesia-coy.png'

const Home = ({ asPreview }: PageProps) => {
  const { setState: cursorSetState } = useContext(CursorContext)
  const { state } = useContext(StateContext)

  const animateWhileMenuOpen = state?.menuShow && !asPreview

  useEffect(() => {
    if (asPreview) return
    if (!state?.isSplashShow && cursorSetState) {
      cursorSetState((prev) => ({
        ...prev,
        bgColor: 'bg-transparent',
        element: {
          element: <FiqriArdiansyahFollower />,
          key: FiqriArdiansyahFollower.key,
          type: FiqriArdiansyahFollower.type
        }
      }))
    }
  }, [state?.isSplashShow])

  const stuffCursor = {
    element: <motion.img src={GoodStuff} className="z-0 w-[200px]" animate={{ opacity: 1 }} initial={{ opacity: 0 }} />,
    type: 'hover',
    key: 'stuffhover'
  }

  const indonesiaCursor = {
    element: <motion.img src={IndonesiaCoy} className="z-0 w-[100px]" animate={{ opacity: 1 }} initial={{ opacity: 0 }} />,
    type: 'hover',
    key: 'indonesiahover'
  }

  return (
    <div className="min-h-screen overflow-hidden bg-primary">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={animateWhileMenuOpen ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeDefault }}
          className="font-display text-9xl text-secondary"
        >
          I BUILD THINGS AND{' '}
          <WithCursorElement state={{ element: stuffCursor as any }} className="relative">
            <span className="w-fit transition-opacity duration-150 hover:opacity-50">STUFF</span>
          </WithCursorElement>
        </motion.div>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={animateWhileMenuOpen ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeDefault }}
          className="mt-5 font-spartan text-xl font-light text-white"
        >
          FIQRI ARDIANSYAH . Creative Frontend Developer From{' '}
          <WithCursorElement state={{ element: indonesiaCursor as any }} className="relative">
            <span className="transition-opacity duration-150 hover:opacity-50">Indonesia</span>
          </WithCursorElement>
        </motion.p>
      </div>
    </div>
  )
}

export default withTransition(Home)
