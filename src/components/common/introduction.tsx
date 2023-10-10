import ArrowAnimation from 'assets/animation/arrow.json'
import MercusuarAnimation from 'assets/animation/mercusuar.json'
import NyanCatAnimation from 'assets/animation/nyancat.json'
import RocketAnimation from 'assets/animation/rocket.json'
import Morty from 'assets/images/morty.gif'
import WithCursorElement from 'components/common/with-cursor-element'
import { CursorContext } from 'context/cursor'
import { StateContext } from 'context/state'
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'

const waitingToStart = 1500
const percentCount = 100
const animationDuration = 5

let percentAnimate: any = null
let titleTextAnimate: any = null

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 30 : -30,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 30 : -30,
      opacity: 0
    }
  }
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const paragraph = [
  <div className="flex items-center" key="front-enddeveloper">
    front-end developer
    <Lottie
      options={{ ...defaultOptions, animationData: RocketAnimation }}
      height={100}
      width={100}
      isClickToPauseDisabled
      style={{ cursor: 'default' }}
    />
  </div>,
  <div className="flex items-center" key="laughinglayouts">
    laughing @layouts!
    <Lottie
      options={{ ...defaultOptions, animationData: NyanCatAnimation }}
      height={50}
      width={50}
      isClickToPauseDisabled
      style={{ marginLeft: '1rem', cursor: 'default' }}
    />
  </div>,
  <div className="flex items-center" key="designingdreams">
    designing dreams
    <Lottie
      options={{ ...defaultOptions, animationData: MercusuarAnimation }}
      height={80}
      width={80}
      isClickToPauseDisabled
      style={{ marginLeft: '1rem', cursor: 'default', marginBottom: '2rem' }}
    />
  </div>,
  <div className="flex items-center" key="fiqriardiansyah">
    fiqri ardiansyah
    <Lottie
      options={{ ...defaultOptions, animationData: ArrowAnimation }}
      height={50}
      width={100}
      isClickToPauseDisabled
      style={{ marginLeft: '1rem', cursor: 'default', marginTop: '2rem' }}
    />
  </div>
]

export default function Introduction() {
  const { setState } = useContext(StateContext)
  const { setState: setStateCursor } = useContext(CursorContext)

  const [currParagraph, setCurrParagraph] = useState(0)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const currentPr = useMotionValue(0)

  const count = useMotionValue(0)
  const rounded = useTransform(count, (value) => Math.round(value))

  const startPercentAnimate = () => {
    percentAnimate = animate(count, percentCount, {
      duration: animationDuration,
      onUpdate(latest) {
        if (progressRef.current) {
          progressRef.current.style.width = latest + '%'
        }
      },
      onComplete() {
        if (progressRef.current) {
          progressRef.current.style.display = 'none'
        }
      }
    })
  }

  const startTitleTextAnimate = () => {
    titleTextAnimate = animate(currentPr, paragraph.length - 1, {
      duration: animationDuration,
      delay: waitingToStart / 1000,
      onUpdate(latest) {
        const round = Math.round(latest)
        if (currParagraph !== round) {
          setCurrParagraph(round)
        }
      },
      async onComplete() {
        if (setState) setState((prev) => ({ ...prev, isSplashShow: false }))
        if (setStateCursor)
          setStateCursor((prev) => ({
            ...prev,
            element: null
          }))
      }
    })
  }

  useEffect(() => {
    setTimeout(() => {
      startPercentAnimate()
    }, waitingToStart)

    setTimeout(() => {
      startTitleTextAnimate()
    }, waitingToStart * 2)

    return () => {
      percentAnimate?.stop()
      titleTextAnimate?.stop()
    }
  }, [])

  const mortyCursor = {
    element: (
      <motion.img
        animate={{ opacity: 0.7, scale: 1 }}
        initial={{ opacity: 0, scale: 0.2 }}
        exit={{ opacity: 0, scale: 0.2 }}
        src={Morty}
        alt="going to be great"
        className="h-full w-full object-cover"
      />
    ),
    key: 'goingtobegreat',
    type: 'hover'
  }

  return (
    <div className="fixed left-0 top-0 z-[92] flex h-screen w-full flex-col items-center justify-center bg-white">
      <div className="absolute left-0 top-0 h-[3px] w-[0%] bg-primary" ref={progressRef} />
      <WithCursorElement state={{ element: mortyCursor as any }}>
        <motion.div
          initial={{ y: '4vh', opacity: 0, display: 'flex', scale: 0.9 }}
          animate={{ y: 0, opacity: 1, display: 'flex', scale: 1 }}
          transition={{ duration: waitingToStart / 1000 }}
          className="flex min-w-[300px] items-center"
        >
          <h1 className="m-0 font-spartan text-xl font-light text-primary md:text-3xl">I Am</h1>
          <AnimatePresence custom={currParagraph}>
            <motion.div
              className="absolute left-10 m-0 whitespace-nowrap font-spartan text-xl font-light capitalize text-primary md:left-16 md:text-3xl"
              key={currParagraph}
              custom={currParagraph}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              {paragraph[currParagraph]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </WithCursorElement>
      {currParagraph !== paragraph.length - 1 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, display: 'flex' }}
          animate={{ opacity: 1, scale: 1, display: 'flex' }}
          transition={{ delay: waitingToStart / 1000, duration: 1 }}
          className="absolute bottom-10 flex items-center font-spartan text-4xl font-light"
        >
          <motion.h1 className="">{rounded}</motion.h1>%
        </motion.div>
      ) : null}
    </div>
  )
}
