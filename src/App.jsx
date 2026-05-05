import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cases from './pages/Cases'
import CaseDetail from './pages/CaseDetail'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import Code from './pages/Code'
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
        <Route path="/work"         element={<Work />} />
        <Route path="/work/:id"     element={<ProjectDetail />} />
        <Route path="/code"         element={<Code />} />
        <Route path="/about"        element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
