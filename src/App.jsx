import './App.css'

function App() {
  // Load the local static site directly (no iframe).
  if (typeof window !== 'undefined') {
    window.location.replace('/site/mastersunion.org/index.html')
  }
  return null
}

export default App
