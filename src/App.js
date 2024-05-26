import { Route, Routes, Link } from 'react-router-dom';

function Home(){
  return(
    <>
      <h1>Home Page</h1>
      <Link to="/about" >Go to the <strong>about</strong> page</Link>
    </>
  )
}

function AboutUs(){
  return(
    <>
      <h1>About Us Page</h1>
      <Link to="/" >Go to the <strong>Home</strong> page</Link>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  );
}
// 23 minutes
export default App;
