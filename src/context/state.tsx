import useDebounce from 'hooks/use-debounce'
import useFirstRender from 'hooks/use-is-first-render'
import { Dispatch, SetStateAction, createContext, useMemo, useState, useEffect, useRef } from 'react'

export const breakPoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
export interface StateType {
  isSplashShow?: boolean
  menuShow?: boolean
  lenisOptions?: any
  isSmallDevice?: boolean
  breakpoint?: keyof typeof breakPoints
  transitionAvailable?: boolean
}

export interface ContextType {
  state?: StateType
  setState?: Dispatch<SetStateAction<StateType>>
  defaultLenisOptions?: any
  isFirstRender?: boolean
}

function easeInOutCubicScroll(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
}

export const StateContext = createContext<ContextType>({})

const defaultLenisOptions = { easing: easeInOutCubicScroll, wheelMultiplier: 1.3, smoothWheel: true, lerp: 0.1 }
const StateProvider = ({ children }: any) => {
  const mobileBreakPoint = breakPoints.md

  const prevWidthRef = useRef<any>()
  const [state, setState] = useState<StateType>({
    isSplashShow: true,
    lenisOptions: defaultLenisOptions
  })

  const isFirstRender = useFirstRender()

  const handleReload = useDebounce(() => {
    window.location.reload()
  }, 1000)

  const getBP = () => {
    const currWidth = window.outerWidth
    const bp = Object.values(breakPoints).filter((el) => typeof el === 'number')
    const getWidth = bp.find((el) => Number(el) >= currWidth) || breakPoints['2xl']
    const breakP = Object.keys(breakPoints).find((key) => breakPoints[key as keyof typeof breakPoints] === getWidth)
    return {
      width: getWidth,
      breakPoint: breakP as keyof typeof breakPoints
    }
  }

  useEffect(() => {
    const getBreakPoint = getBP()

    setState((prev) => ({ ...prev, isSmallDevice: getBreakPoint.width <= mobileBreakPoint, breakpoint: getBreakPoint.breakPoint }))
    prevWidthRef.current = getBreakPoint.width <= mobileBreakPoint

    window.addEventListener('resize', () => {
      const getBreakPoint = getBP()

      setState((prev) => ({ ...prev, breakpoint: getBreakPoint.breakPoint }))

      if (getBreakPoint.width <= mobileBreakPoint !== prevWidthRef.current) {
        handleReload()
      }
    })
    return () => {
      window.removeEventListener('resize', getBP)
    }
  }, [])

  const value = useMemo(() => ({ state, setState, defaultLenisOptions, isFirstRender }), [state])

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

export default StateProvider
