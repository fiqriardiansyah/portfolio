import KasigoImg from 'assets/images/kasigo-summary.png'
import HopesyImg from 'assets/images/hopesy-summary.png'
import IncitImg from 'assets/images/incit-summary.png'
import MonaproImg from 'assets/images/monapro-summary.png'
import Magnet from 'components/effect/magnet'
import { motion } from 'framer-motion'
import { easeDefault, routes } from 'lib/utils'
import { useTranslation } from 'lib/translations'
import ExperienceRow, { ExperienceRowProps } from 'module/about/experience-row'
import LetterSpacingTitle from 'module/about/letter-spacing-title'
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const projects: ExperienceRowProps[] = [
  {
    text1: 'Kasigo',
    text2: '2025 - Present',
    text3: 'Full-Stack Developer / Builder',
    color: '#2E9E6C',
    image: KasigoImg,
    link: 'https://kasigo.id'
  },
  {
    text1: 'HOPESY',
    text2: '2025 - Present',
    text3: 'Full-Stack / Frontend Developer',
    color: '#A3195B',
    image: HopesyImg,
    link: 'https://hopesy.co.id'
  },
  {
    text1: 'INCIT',
    text2: '2024 - Present',
    text3: 'Fullstack Engineer (Singapore)',
    color: 'rgba(158,107,184,0.996078)',
    image: IncitImg,
    link: 'https://incit.org'
  },
  { text1: 'Telkom Indonesia', text2: '2022 - 2023', text3: 'Fullstack Developer', color: '#411719', image: MonaproImg }
]

export default function SectionProjects() {
  const { t } = useTranslation()

  return (
    <section id="section-projects" className="relative z-10 w-full bg-primary py-10">
      <div className="CONTAINER">
        <Magnet strength={10} className="z-[-10] mt-4 w-fit">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, ease: easeDefault as any }}
            className="flex h-[100px] items-center justify-center bg-yellow-300"
          >
            <Magnet>
              <AiOutlineArrowDown className="text-8xl" />
            </Magnet>
          </motion.div>
        </Magnet>
        <LetterSpacingTitle>{t('home_selected_work')}</LetterSpacingTitle>
        <p className="mb-10 mt-[-10vh] max-w-xl font-poppins text-base text-secondary opacity-70 md:text-xl">{t('home_selected_work_lead')}</p>
      </div>
      <div className="MENU-CHANGE-Y-100-STAGGER">
        {projects.map((project, i) => (
          <ExperienceRow {...project} key={i} />
        ))}
      </div>
      <div className="CONTAINER flex justify-center pt-14 md:justify-end">
        <Magnet strength={15}>
          <Link
            to={routes.about}
            className="group flex items-center gap-3 font-poppins text-lg text-secondary opacity-80 transition-opacity hover:opacity-100"
          >
            {t('home_selected_work_more')}
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-secondary transition-colors group-hover:bg-yellow-400 group-hover:text-primary">
              <AiOutlineArrowRight className="-rotate-45" />
            </span>
          </Link>
        </Magnet>
      </div>
    </section>
  )
}
