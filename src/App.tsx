import { Routes, Route } from 'react-router-dom'
import { Vote } from './pages/vote'
import { Layout } from './components/layout'
import { Home } from './pages/home'
// import { Survey } from './pages/matchup-survey'
import { Results } from './pages/results'
import { NotFound } from './pages/not-found'

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path={'/survey'} element={<Survey />} /> */}
        <Route path={'/vote'} element={<Vote />} />
        <Route path={'/results'} element={<Results />} />
        {/* 404 route */}
        <Route path={'*'} element={<NotFound />} />
      </Route>
    </Routes>
  )
}
