import WithCursorElement from 'components/common/with-cursor-element'
import FiqriArdiansyahFollower from 'components/cursor-follower/fiqriardiansyah'
import ClickToOpen from 'components/cursor-hover/click-to-open'
import EnglishHover from 'components/cursor-hover/english'
import FiqriArdiansyahHover from 'components/cursor-hover/fiqriardiansyah'
import IndonesiaHover from 'components/cursor-hover/indonesia'
import Magnet from 'components/effect/magnet'
import { StateContext } from 'context/state'
import { useContext, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { easeDefault } from 'lib/utils'

const TopNav = () => {
  const { setState, state } = useContext(StateContext)
  const [scope, animate] = useAnimate()
  const linkClass = 'font-spartan text-secondary text-2xl'

  useEffect(() => {
    ;(async () => {
      if (state?.menuShow) {
        await animate(scope.current, { y: 100, opacity: 0 }, { duration: 1, ease: [0.79, 0.14, 0.15, 0.86] })
        animate(scope.current, { y: 0, opacity: 1 })
      }
    })()
  }, [state?.menuShow])

  const out = {
    element: <FiqriArdiansyahFollower />,
    key: FiqriArdiansyahFollower.key,
    type: FiqriArdiansyahFollower.type
  }

  const nameCursor = {
    in: {
      key: FiqriArdiansyahHover.key,
      type: FiqriArdiansyahHover.type,
      element: <FiqriArdiansyahHover />
    },
    out
  }

  const langInCursor = {
    in: {
      key: IndonesiaHover.key,
      type: IndonesiaHover.type,
      element: <IndonesiaHover />
    },
    out
  }

  const langEnCursor = {
    in: {
      key: EnglishHover.key,
      type: EnglishHover.type,
      element: <EnglishHover />
    },
    out
  }

  const menuCursor = {
    in: {
      key: ClickToOpen.key,
      type: ClickToOpen.type,
      element: <ClickToOpen />
    },
    out
  }

  const menuClick = () => {
    if (setState) {
      setState((prev) => ({ ...prev, menuShow: true }))
    }
  }

  if (state?.isSplashShow) return null
  return (
    <motion.header
      ref={scope}
      exit={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: easeDefault }}
      className="fixed left-0 top-0 z-10 w-screen"
    >
      <nav className="container mx-auto flex w-full items-center justify-between px-4 py-6">
        <WithCursorElement state={{ element: nameCursor.in as any }} fallbackState={{ element: nameCursor.out as any }}>
          <Link to="/">
            <Magnet>
              <span className={linkClass}>FA - 23 ©️</span>
            </Magnet>
          </Link>
        </WithCursorElement>
        <div className="flex items-center gap-4">
          <WithCursorElement state={{ element: langInCursor.in as any }} fallbackState={{ element: langInCursor.out as any }}>
            <Link to="/">
              <span className={linkClass}>IN</span>
            </Link>
          </WithCursorElement>
          <WithCursorElement state={{ element: langEnCursor.in as any }} fallbackState={{ element: langEnCursor.out as any }}>
            <Link to="/about">
              <span className={linkClass}>EN</span>
            </Link>
          </WithCursorElement>
        </div>
        <WithCursorElement
          interupFallback={state?.menuShow}
          state={{ element: menuCursor.in as any }}
          fallbackState={{ element: menuCursor.out as any }}
        >
          <Magnet>
            <button onClick={menuClick} className={linkClass + ' cursor-pointer'}>
              MENU
            </button>
          </Magnet>
        </WithCursorElement>
      </nav>
    </motion.header>
  )
}

export default TopNav
