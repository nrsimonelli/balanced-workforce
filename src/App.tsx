import { Routes, Route } from 'react-router-dom'
import { Vote } from './pages/vote'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { Survey } from './pages/matchup-survey'
import { Results } from './pages/results'

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'/survey'} element={<Survey />} />
        <Route path={'/vote'} element={<Vote />} />
        <Route path={'/results'} element={<Results />} />
      </Route>
    </Routes>
  )
}
