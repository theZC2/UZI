import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//pages
import Index from '../pages/Index.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
