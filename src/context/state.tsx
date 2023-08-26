import { Dispatch, SetStateAction, createContext, useMemo, useState } from 'react'

export interface StateType {
  isSplashShow?: boolean
  menuShow?: boolean
}

export interface ContextType {
  state?: StateType
  setState?: Dispatch<SetStateAction<StateType>>
}

export const StateContext = createContext<ContextType>({})

const StateProvider = ({ children }: any) => {
  const [state, setState] = useState<StateType>({ isSplashShow: false })

  const value = useMemo(() => ({ state, setState }), [state])

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

export default StateProvider
