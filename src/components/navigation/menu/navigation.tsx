import SlideUpText from 'components/effect/slide-up-text'
import { StateContext } from 'context/state'
import { useEffect, useRef, useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Magnet from 'components/effect/magnet'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { easeDefault, randomNum, routes } from 'lib/utils'
import About from 'pages/about'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { DiReact } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'
import RoundedText from 'components/common/rounded-text'
import Works from 'pages/works'
import Home from 'pages/home'
import { BLUR_HOVER_LINK, CONTAINER_MENU } from '.'

const navigationVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function ArrowAnimation({ hover }: { hover?: boolean }) {
  return (
    <AnimatePresence>
      {hover && (
        <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0 }} transition={{ duration: 0.3, ease: easeDefault }}>
          <Magnet strength={10}>
            <motion.div
              animate={{ width: '60px' }}
              initial={{ width: 0 }}
              transition={{ duration: 1, ease: easeDefault }}
              className="flex h-[50px] items-center justify-center bg-yellow-300"
            >
              <Magnet>
                <AiOutlineArrowRight className="text-5xl" />
              </Magnet>
            </motion.div>
          </Magnet>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function TechStamp() {
  const techStackIcon = [BiLogoJavascript, BiLogoTypescript, DiReact, SiNextdotjs]
  const [random] = useState(randomNum(techStackIcon.length))

  const Icon = techStackIcon[random]

  return (
    <motion.div className="z-30" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2, duration: 0.7 }}>
      <RoundedText
        text="take a look!"
        className="absolute right-0 scale-150 border-2 border-solid border-yellow-400"
        textClassName="font-display !text-yellow-400 font-semibold capitalize"
        size="60px"
        space={20}
      >
        <div className="flex h-[55%] w-[55%] items-center justify-center rounded-full border-2 border-solid border-yellow-400">
          <Icon className="text-5xl text-yellow-400 opacity-70" />
        </div>
      </RoundedText>
    </motion.div>
  )
}

function NavigationLink({ onClose, linkTo, text, preview }: { onClose: any; linkTo: string; text: string; preview: JSX.Element }) {
  const hoverLinkEffect = ['blur', 'opacity-80']
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLAnchorElement | null>(null)

  const activeHandler = () => setActive(true)
  const inActiveHandler = () => setActive(false)

  useEffect(() => {
    const containerMenu = document.querySelector(`#${CONTAINER_MENU}`)
    containerMenu?.querySelectorAll(`.${BLUR_HOVER_LINK}`)?.forEach((element) => {
      if (active) {
        if (element === ref.current) return
        element?.classList?.add(...hoverLinkEffect)
        return
      }
      element?.classList?.remove(...hoverLinkEffect)
    })
  }, [active])

  return (
    <>
      <Link
        ref={ref}
        to={linkTo}
        className={`flex w-fit items-center ${BLUR_HOVER_LINK}`}
        onClick={onClose}
        onFocus={activeHandler}
        onBlur={inActiveHandler}
        onMouseOver={activeHandler}
        onMouseLeave={inActiveHandler}
      >
        <motion.div className="w-fit" initial="hidden" whileInView="visible" variants={navigationVariants} viewport={{ amount: 'all' }}>
          <SlideUpText text={text} type="paragraph" className="font-poppins text-5xl font-light" />
        </motion.div>
        <ArrowAnimation hover={active} />
      </Link>
      <AnimatePresence>
        {active && (
          <motion.div
            animate={{ opacity: 1, y: 0, position: 'fixed', top: 0, left: 0 }}
            initial={{ opacity: 0, y: 50, position: 'fixed', top: 0, left: 0 }}
            exit={{ opacity: 0, y: -50, position: 'fixed', top: 0, left: 0 }}
            transition={{ duration: 0.5, ease: easeDefault }}
            className="pointer-events-none z-10"
          >
            <div className="h-screen w-screen translate-x-[10vw] scale-[0.6]">
              <TechStamp />
              {preview}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function MenuNavigation() {
  const { setState } = useContext(StateContext)
  const location = useLocation()
  const navigate = useNavigate()

  const closeMenu = () => {
    if (setState) {
      setState((prev) => ({ ...prev, menuShow: false }))
    }
  }

  const onClickLink = (to: string) => {
    return (e: any) => {
      e.preventDefault()
      closeMenu()
      setTimeout(() => {
        navigate(to)
      }, 1000)
    }
  }

  const allRoutes = [
    {
      linkTo: routes.index,
      text: 'HOME',
      preview: <Home asPreview />
    },
    {
      linkTo: routes.about,
      text: 'ABOUT',
      preview: <About asPreview />
    },
    {
      linkTo: routes.works,
      text: 'WORKS',
      preview: <Works asPreview />
    }
  ]

  const availableRoutes = allRoutes.filter((route) => route.linkTo !== location.pathname)

  return (
    <div className="flex flex-col gap-4">
      {availableRoutes.map((link) => (
        <NavigationLink {...link} key={link.text} onClose={onClickLink(link.linkTo)} />
      ))}
    </div>
  )
}
