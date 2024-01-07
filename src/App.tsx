import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<div>hello</div>} />
        <Route path={'/vote'} element={<div>vote</div>} />
        <Route path={'/results'} element={<div>results</div>} />
        <Route path={'/survey'} element={<div>survey</div>} />
      </Route>
    </Routes>
  )
}
