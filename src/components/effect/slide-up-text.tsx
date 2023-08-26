import { motion } from 'framer-motion'

const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2'
}

const variants = {
  hidden: {
    y: '200%',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  }
}

const Wrapper = ({ children }: { children: any }) => {
  return <span className="whitespace-nowrap">{children}</span>
}

type Props = { text: string; type: keyof typeof tagMap; variantsItem?: any; className?: string }

const SlideUpText = ({ text, type, className, variantsItem = variants }: Props) => {
  const splitWords = text.split(' ')
  const words: any[] = []

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''))
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push('\u00A0')
  })

  const Tag = tagMap[type] as any
  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element: any, index: number) => {
              return (
                <span key={index} className="inline-block overflow-hidden">
                  <motion.span className={`inline-block ${className}`} variants={variantsItem}>
                    {element}
                  </motion.span>
                </span>
              )
            })}
          </Wrapper>
        )
      })}
    </Tag>
  )
}

export default SlideUpText
