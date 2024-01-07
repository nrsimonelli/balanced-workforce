import { App } from './App'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
