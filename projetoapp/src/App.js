import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header"></header>*/}
      <Router>
        <NavBar />
        <Container customClass="minHeight">
          <Routes>
            <Route path='/' exact='true' element={<Home />}></Route>
            <Route path='/company' element={<Company />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/newproject' element={<NewProject />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/project/:id' element={<Project />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
