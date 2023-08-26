import withTransition, { PageProps } from 'components/common/with-transition'
import FiqriArdiansyahFollower from 'components/cursor-follower/fiqriardiansyah'
import { CursorContext } from 'context/cursor'
import { StateContext } from 'context/state'
import { useContext, useEffect } from 'react'

const Works = ({ asPreview }: PageProps) => {
  const { setState: cursorSetState } = useContext(CursorContext)
  const { state } = useContext(StateContext)

  useEffect(() => {
    if (asPreview) return
    if (!state?.isSplashShow && cursorSetState && !state?.menuShow) {
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
  }, [state?.isSplashShow, state?.menuShow])

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-primary">
      <h1 className="text-white">Works</h1>
    </div>
  )
}

export default withTransition(Works)
