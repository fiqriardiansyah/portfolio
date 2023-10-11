/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import StaggerElementFooter from 'module/footer/stagger-element'
import React from 'react'

const Description = () => {
  const [hover, setHover] = React.useState(false)

  return (
    <div className="CONTAINER min-h-screen">
      <h1 className="font-display text-6xl font-semibold text-secondary underline lg:text-8xl">Summary</h1>
      <div className="h-[20vh]"></div>
      <div className="flex flex-col">
        <h2 className=" font-poppins text-6xl font-semibold text-white lg:text-9xl">Fiqri ardiansyah</h2>
        <p className="mt-4 font-poppins text-2xl text-secondary lg:text-3xl">- Frontend Developer At Crealoka | External Dicoding Code Reviewer -</p>
        <p className="mt-10 text-justify font-poppins text-lg text-secondary lg:text-left lg:text-xl ">
          <span className="font-semibold text-white">Hi there!</span> 👋 Welcome to my profile. Nice to meet you! My name is Fiqri, I'm a Frontend
          developer with 2+ years of experience. Have worked in startups before and am now an internal programmer at a company in Jakarta, Indonesia.
          will continue to expand knowledge especially in the field of front end and maybe another field.
          <br />
          <br />
          Let's make something beautiful with code! 🎉🎉🎉
        </p>
        <a href="/fiqriardiansyah_cv.pdf" target="_blank" download title="download cv" className="mt-10 w-fit" rel="noreferrer">
          <motion.div
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className="relative rounded border border-white px-5 py-2 font-poppins capitalize text-white"
          >
            <span className="text-xl opacity-0">download cv</span>
            <StaggerElementFooter
              aria-hidden
              to="0"
              triger={hover}
              from="-130%"
              perLetter
              tag="h2"
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 m-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-xl font-medium leading-[1.3] text-white"
            >
              Download CV
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
              Download CV
            </StaggerElementFooter>
          </motion.div>
        </a>
      </div>
    </div>
  )
}

export default React.memo(Description)
