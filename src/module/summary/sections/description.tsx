/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { useTranslation } from 'lib/translations'
import StaggerElementFooter from 'module/footer/stagger-element'
import React from 'react'

const Description = () => {
  const [hover, setHover] = React.useState(false)
  const { t, lang } = useTranslation()

  return (
    <div className="CONTAINER min-h-screen">
      <h1 className="MENU-CHANGE-SCALE-125 font-display text-6xl font-semibold text-secondary underline lg:text-8xl">{t('summary_title')}</h1>
      <div className="h-[20vh]"></div>
      <div className="flex flex-col">
        <h2 className=" MENU-CHANGE-Y-100 font-poppins text-6xl font-semibold text-white lg:text-9xl">Fiqri ardiansyah</h2>
        <p className="MENU-CHANGE-Y-100 mt-4 font-poppins text-2xl text-secondary lg:text-3xl">{t('summary_role_line')}</p>
        <p className="MENU-CHANGE-Y-200 mt-10 text-justify font-poppins text-lg text-secondary lg:text-left lg:text-xl">
          {lang === 'id' ? (
            <>
              <span className="font-semibold text-white">Halo!</span> 👋 Selamat datang di profil saya. Senang bertemu denganmu! Nama saya Fiqri,
              seorang Full-Stack Developer dengan pengalaman 5 tahun membangun aplikasi web yang scalable di lingkungan domestik maupun internasional,
              mulai dari platform enterprise, sistem e-commerce, hingga solusi ERP. Saat ini bekerja di{' '}
              <span className="text-yellow-300">International Centre for Industrial Transformation</span> (INCIT), merancang platform analitik terpadu
              untuk 5+ produk enterprise menggunakan React, Next.js, Node.js, dan Go. Juga aktif sebagai pengajar teknis, telah membimbing dan menilai
              1000+ peserta di berbagai program developer nasional.
              <br />
              <br />
              Ayo buat sesuatu yang indah dengan kode! 🎉🎉🎉
            </>
          ) : (
            <>
              <span className="font-semibold text-white">Hi there!</span> 👋 Welcome to my profile. Nice to meet you! My name is Fiqri, a Full-Stack
              Developer with 5 years of experience delivering scalable web applications across domestic and international environments, including
              enterprise platforms, e-commerce systems, and ERP solutions. Currently at{' '}
              <span className="text-yellow-300">International Centre for Industrial Transformation</span> (INCIT), architecting a unified analytics
              platform across 5+ enterprise products with React, Next.js, Node.js, and Go. Also active as a technical educator, having mentored and
              reviewed 1000+ students across national developer programs.
              <br />
              <br />
              Let's make something beautiful with code! 🎉🎉🎉
            </>
          )}
        </p>
        <a
          href="/fiqri_ardiansyah_cv.pdf"
          target="_blank"
          download
          title={t('summary_download_cv_title')}
          className="MENU-CHANGE-Y-200 mt-10 w-fit"
          rel="noreferrer"
        >
          <motion.div
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className="relative rounded border border-white px-5 py-2 font-poppins capitalize text-white"
          >
            <span className="text-xl opacity-0">{t('summary_download_cv_title')}</span>
            <StaggerElementFooter
              aria-hidden
              to="0"
              triger={hover}
              from="-130%"
              perLetter
              tag="h2"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 m-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-xl font-medium leading-[1.3] text-white"
            >
              {t('summary_download_cv')}
            </StaggerElementFooter>
            <StaggerElementFooter
              aria-hidden
              to="130%"
              from="0"
              triger={hover}
              perLetter
              tag="h2"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 m-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-xl font-medium leading-[1.3] text-white"
            >
              {t('summary_download_cv')}
            </StaggerElementFooter>
          </motion.div>
        </a>
      </div>
    </div>
  )
}

export default React.memo(Description)
