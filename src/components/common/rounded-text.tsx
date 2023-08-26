import { useEffect } from 'react'
import '../../styles/rounded-text.css'

type Props = {
  text?: string
  space?: number
  textClassName?: string
  className?: string
  children?: any
  size?: any
}

const RoundedText = ({ text, space = 10, textClassName, children, className, size = '100px' }: Props) => {
  const tText = text
    ?.split('')
    ?.map((char, i) => `<span style="transform:rotate(${i * space}deg)">${char}</span>`)
    .join('')

  useEffect(() => {
    if (!size) return
    const root = document.querySelector(':root') as any
    root?.style?.setProperty('--radius-rt', size)
  }, [size])

  return (
    <div className={`circle ${className}`}>
      {children}
      <div className="text">
        <p dangerouslySetInnerHTML={{ __html: tText as string }} className={textClassName} />
      </div>
    </div>
  )
}

export default RoundedText
