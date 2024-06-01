import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';
import { useState } from 'react';

function App() {
  const [caller, setCaller] = useState("\'Home\'")
  const [current, setCurrent] = useState("\'Home\'")

  return (
    <Routes>
      <Route path='/'
        element={<Navbar setCaller={setCaller} current={current} />}
      >
        <Route exact path='/'
          element={
            <Home caller={caller} setCurrent={setCurrent} />
          }
        />
        <Route path='/about'
          element={
            <AboutUs caller={caller} setCurrent={setCurrent} />
          }
        />
        <Route path='/users/:username' element={<UserProfile />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
export default App;
