import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Layouts/Navbar/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import PAndS from "./Pages/ProjectAndSkills"
import Contact from "./Pages/Contact"
import ProjectDetails from "./Layouts/ProjectSection/ProjectDetails"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<PAndS />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/feedback" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
