// import WithCursorElement from 'components/common/with-cursor-element'
import Magnet from 'components/effect/magnet'
import SlideUpText from 'components/effect/slide-up-text'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BLUR_HOVER_LINK } from '.'

const nameVariants = {
  visible: {
    transition: {
      staggerChildren: 0.02
    }
  }
}

export default function MenuFooter() {
  return (
    <div className={`relative w-full ${BLUR_HOVER_LINK}`}>
      <motion.div
        whileInView={{ width: '100%' }}
        initial={{ width: 0 }}
        transition={{ delay: 0.6, ease: easeDefault, duration: 1 }}
        viewport={{ amount: 'all' }}
        className="h-[6px] bg-primary"
      />
      <motion.div className="w-fit" initial="hidden" whileInView="visible" variants={nameVariants} viewport={{ amount: 'all' }}>
        <SlideUpText text="FIQRI ARDIANSYAH" type="heading1" className="font-display text-7xl font-semibold leading-[1.2]" />
      </motion.div>
      <motion.div
        viewport={{ amount: 'all' }}
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0', opacity: 1 }}
        transition={{ duration: 1, ease: easeDefault }}
        className="mt-5 flex w-fit origin-bottom items-center gap-x-10 bg-primary p-3"
      >
        <Link to="https://www.linkedin.com/in/fiqri-ardiansyah-a48651190/" target="_blank" className="flex items-center">
          <GrLinkedin className="text-xl !text-white" />
          <motion.p className="m-0 ml-2 font-spartan text-white">Linkedin</motion.p>
        </Link>
        <Link to="https://github.com/fiqriardiansyah" target="_blank" className="flex items-center">
          <GrGithub className="text-xl !text-white" />
          <motion.p className="m-0 ml-2 font-spartan text-white">Github</motion.p>
        </Link>
        <Link to="mailto:fiqriardian92@gmail.com" className="flex items-center">
          <MdEmail className="text-xl !text-white" />
          <motion.p className="m-0 ml-2 font-spartan text-white">fiqriardian92@gmail</motion.p>
        </Link>
      </motion.div>
      <Magnet className="absolute bottom-0 right-0" strength={10}>
        <motion.div
          whileInView={{ width: '100px' }}
          viewport={{ amount: 'all' }}
          initial={{ width: 0 }}
          transition={{ duration: 1, ease: easeDefault }}
          className="flex h-[100px] items-center justify-center bg-secondary"
        >
          <Magnet>
            <AiOutlineArrowRight className="text-9xl text-primary" />
          </Magnet>
        </motion.div>
      </Magnet>
    </div>
  )
}
