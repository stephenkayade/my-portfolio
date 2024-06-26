import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './helpers/Loader';

const Home = React.lazy(() => import('./pages/home'))
const About = React.lazy(() => import('./pages/about'))
const Projects = React.lazy(() => import('./pages/projects'))
const Contact = React.lazy(() => import('./pages/contact'))
const Resume = React.lazy(() => import('./pages/resume'))
const App = () => {
  return (
    <Router>
      <Suspense fallback={Loader()}>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
