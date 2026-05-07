import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cases from './pages/Cases'
import CaseDetail from './pages/CaseDetail'
import Productions from './pages/Productions'
import ProductionDetail from './pages/ProductionDetail'
import About from './pages/About'
import './index.css'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/cases"        element={<Cases />} />
        <Route path="/cases/:slug"  element={<CaseDetail />} />
        <Route path="/productions"      element={<Productions />} />
        <Route path="/productions/:id"  element={<ProductionDetail />} />
        <Route path="/about"            element={<About />} />
        {/* legacy redirects */}
        <Route path="/work"         element={<Navigate to="/productions" replace />} />
        <Route path="/work/:id"     element={<Navigate to="/cases" replace />} />
        <Route path="/code"         element={<Navigate to="/cases" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
