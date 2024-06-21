import Header from './assets/compomenents/header/Header'
import HomePage from './assets/compomenents/pages/homePage/HomePage'
import Index from './assets/compomenents/pages/index/Index'
import Show from './assets/compomenents/pages/show/Show'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Lista" element={<Index />} />
          <Route path="/Lista/:slug" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
