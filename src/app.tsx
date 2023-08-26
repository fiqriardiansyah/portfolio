import Cursor from 'components/common/cursor'
// import OpeningText from 'components/common/opening-text'
import Menu from 'components/navigation/menu'
import TopNav from 'components/navigation/top-nav'
import CursorProvider from 'context/cursor'
import StateProvider from 'context/state'
import { AnimatePresence } from 'framer-motion'
import { routes } from 'lib/utils'
import About from 'pages/about'
import Works from 'pages/works'
import Home from 'pages/home'
import { Route, Routes, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()

  return (
    <>
      <StateProvider>
        <CursorProvider>
          <Cursor />
          {/* <OpeningText /> */}
          <Menu />
          <AnimatePresence mode="wait">
            <div className="min-h-screen" key={location.pathname}>
              <TopNav />
              <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path={routes.about} element={<About />} />
                <Route path={routes.works} element={<Works />} />
              </Routes>
            </div>
          </AnimatePresence>
        </CursorProvider>
      </StateProvider>
    </>
  )
}

export default App
