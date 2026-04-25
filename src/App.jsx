import './App.css'

function App() {
  // Load the local static site directly (no iframe).
  if (typeof window !== 'undefined') {
    window.location.replace('/site/index.html')
  }
  return null
}

export default App
