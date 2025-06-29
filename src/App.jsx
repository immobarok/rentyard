import { Routes, Route, Outlet } from "react-router";
import Navbar from './shared/Navbar'
import Onboarding from './Pages/Onboarding'
import CondominiumsPage from './Pages/CondominiumPage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/condominiums" element={<CondominiumsPage />} />
      </Routes>
      <Outlet />
    </div>
  )
}

export default App
