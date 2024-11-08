import { HTMLMotionProps, motion } from 'framer-motion'

export default function MeIllustrateTop({ ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div {...props}>
      <svg width="186" height="174" viewBox="0 0 186 174" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <path
          d="M185.311 3.70936C185.311 5.75869 150.319 7.4187 107.155 7.4187C63.9907 7.4187 29 5.75869 29 3.70936C29 1.66136 63.9907 4.92703e-05 107.155 4.92703e-05C150.319 4.92703e-05 185.311 1.66136 185.311 3.70936Z"
          fill="#B8711C"
        />
      </svg>
    </motion.div>
  )
}
