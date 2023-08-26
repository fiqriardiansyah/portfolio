import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'

export interface PageProps {
  asPreview?: boolean
}

const withTransition = (Component: React.ComponentType<PageProps>) => {
  const NewComp = (props: PageProps) => {
    return (
      <>
        <Component {...props} />
        <motion.div
          className="slide-in z-[100] flex items-center justify-center"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: easeDefault }}
        >
          <h1 className="text-white">fiqri ardiansyah</h1>
        </motion.div>
        <motion.div
          className="slide-out z-[100] flex items-center justify-center"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: easeDefault }}
        >
          <h1 className="text-white">fiqri ardiansyah</h1>
        </motion.div>
      </>
    )
  }
  return NewComp
}

export default withTransition
