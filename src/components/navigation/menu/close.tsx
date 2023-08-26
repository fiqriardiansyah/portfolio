import WithCursorElement from 'components/common/with-cursor-element'
import Close from 'components/cursor-hover/close'
import Magnet from 'components/effect/magnet'
import { StateContext } from 'context/state'
import { useContext } from 'react'
import { BLUR_HOVER_LINK } from '.'

const menuCursor = {
  in: {
    key: Close.key,
    type: Close.type,
    element: <Close />
  },
  out: null
}

export default function MenuClose() {
  const { setState } = useContext(StateContext)

  const onClose = () => {
    if (setState) {
      setState((prev) => ({ ...prev, menuShow: false }))
    }
  }
  return (
    <WithCursorElement state={{ element: menuCursor.in as any }} fallbackState={{ element: menuCursor.out }}>
      <Magnet className={`absolute right-14 top-5 ${BLUR_HOVER_LINK}`}>
        <button tabIndex={0} onClick={onClose}>
          CLOSE
        </button>
      </Magnet>
    </WithCursorElement>
  )
}
