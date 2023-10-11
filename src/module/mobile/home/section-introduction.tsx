import StaggerSlideElementHome from 'module/home/stagger-slide-element'

export default function SectionIntroductionMobile() {
  return (
    <div className="CONTAINER">
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <StaggerSlideElementHome
          className="text-center font-display text-6xl leading-[1.3] text-secondary md:text-8xl xl:text-9xl 2xl:text-[10rem]"
          perLetter={false}
          tag="h1"
        >
          Let Me Introduce My Self As Developer
        </StaggerSlideElementHome>
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <StaggerSlideElementHome
          className="text-center font-display text-6xl leading-[1.3] text-secondary md:text-8xl xl:text-9xl 2xl:text-[10rem]"
          perLetter={false}
          tag="h1"
        >
          Creative Developer Based In Indonesia
        </StaggerSlideElementHome>
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <StaggerSlideElementHome
          className="text-center font-display text-6xl leading-[1.3] text-secondary md:text-8xl xl:text-9xl 2xl:text-[10rem]"
          perLetter={false}
          tag="h1"
        >
          Specializing In Web Front-end Development
        </StaggerSlideElementHome>
      </div>
    </div>
  )
}
