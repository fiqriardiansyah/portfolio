import FloatingContact from 'components/common/floating-contact'
import withTransition, { PageProps } from 'components/common/with-transition'
import { routes } from 'lib/utils'
import { useTranslation } from 'lib/translations'
import React from 'react'
import useMenuChange from 'hooks/use-menu-change'
import Footer from 'module/footer'
import SectionFA from 'module/home/sections/section-fa'
import SectionFrontendDev from 'module/home/sections/section-frontend'
import SectionInteractive from 'module/home/sections/section-interactive'
import SectionIntroduction from 'module/home/sections/section-introduction'
import SectionProjects from 'module/home/sections/section-projects'
import SectionStats from 'module/home/sections/section-stats'
import SectionTechStack from 'module/home/sections/section-tech-stack'

const Home = ({ asPreview }: PageProps) => {
  const scopeComponentWhenMenuChange = useMenuChange({ asPreview })
  const { t } = useTranslation()

  return (
    <div ref={scopeComponentWhenMenuChange} className="z-10 bg-secondary">
      <SectionIntroduction asPreview={asPreview} />
      {!asPreview && (
        <>
          <SectionFA />
          <SectionInteractive />
          <SectionStats />
          <SectionProjects />
          <SectionTechStack />
          <SectionFrontendDev />
          <div className="relative z-50">
            <Footer linkTitle={t('nav_about')} linkTo={routes.about} title={t('footer_title_home')} colorMode="light" />
          </div>
          <FloatingContact />
        </>
      )}
    </div>
  )
}

export default React.memo(Home)
export const HomeTransition = React.memo(withTransition(Home))
