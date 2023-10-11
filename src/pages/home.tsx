import withTransition, { PageProps } from 'components/common/with-transition'
import { routes } from 'lib/utils'
import React from 'react'
import useMenuChange from 'hooks/use-menu-change'
import Footer from 'module/footer'
import SectionFA from 'module/home/sections/section-fa'
import SectionFrontendDev from 'module/home/sections/section-frontend'
import SectionInteractive from 'module/home/sections/section-interactive'
import SectionIntroduction from 'module/home/sections/section-introduction'

const Home = ({ asPreview }: PageProps) => {
  const scopeComponentWhenMenuChange = useMenuChange({ asPreview })

  return (
    <div ref={scopeComponentWhenMenuChange} className="z-10 bg-secondary">
      <SectionIntroduction asPreview={asPreview} />
      {!asPreview && (
        <>
          <SectionFA />
          <SectionInteractive />
          <SectionFrontendDev />
          <Footer linkTitle="ABOUT" linkTo={routes.about} title="What's next?" colorMode="light" />
        </>
      )}
    </div>
  )
}

export default React.memo(Home)
export const HomeTransition = React.memo(withTransition(Home))
