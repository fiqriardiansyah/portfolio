/* eslint-disable react/no-unescaped-entities */
import Magnet from 'components/effect/magnet'
import { useTranslation } from 'lib/translations'
import LetterSpacingTitle from 'module/about/letter-spacing-title'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function SectionStory() {
  const { t, lang } = useTranslation()

  return (
    <section id="section-story-about" className="CONTAINER">
      <div className="h-[10vh] md:h-[15vh] lg:h-[30vh]"></div>
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="MENU-CHANGE-OPACITY-0 flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>{t('about_story_title')}</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-200-STAGGER flex max-w-3xl flex-col gap-6 pb-[10vh]">
        {lang === 'id' ? (
          <>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Saya kuliah Teknik Informatika di Universitas Mikroskil, tapi sebagian besar yang benar-benar saya pakai sekarang datang dari proses
              mengirim produk nyata — deadline nyata, pengguna nyata.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Saya mulai dari frontend, mengejar antarmuka yang presisi sampai ke piksel. Seiring waktu itu berkembang jadi tanggung jawab penuh —
              API, database, infrastruktur, seluruh jalur dari ide sampai produksi, sekarang mencakup tim di Indonesia dan Singapura.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              Yang membuat saya bertahan adalah sisi mengajarnya, sama besar dengan sisi membangunnya — mereview kode dan membimbing tim capstone di
              Dicoding Indonesia, memfasilitasi acara developer nasional. Menjelaskan sebuah keputusan dengan lantang biasanya cara tercepat untuk
              tahu apakah keputusan itu benar.
            </p>
          </>
        ) : (
          <>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              I studied Informatics Engineering at Universitas Mikroskil, but most of what I actually use came from shipping — real products, real
              deadlines, real users.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              I started on the frontend, chasing pixel-perfect interfaces. Over time that grew into full ownership — APIs, databases, infrastructure,
              the whole path from idea to production, now spanning teams in Indonesia and Singapore.
            </p>
            <p className="CHILD-STAGGER font-poppins text-lg text-secondary lg:text-2xl">
              What keeps me around is the teaching side as much as the building side — reviewing code and mentoring capstone teams at Dicoding
              Indonesia, facilitating national developer events. Explaining a decision out loud is usually the fastest way to know if it was the right
              one.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
