import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// If we’re already on the static site, don’t boot React.
if (window.location.pathname.startsWith('/site/mastersunion.org/')) {
  // The static HTML page will take over.
} else {
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
}
