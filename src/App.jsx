import About from './About';
import './App.css'
import Header from './Header'
import { BrowserRouter, Routes, Route } from "react-router";
import HomeLayout from './HomeLayout';
import Contacts from './Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
