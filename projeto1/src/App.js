import './App.css';
/*
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Form from './components/Form';
import Evento from './components/Evento';
import Condicional from './components/Condicional';
import List2 from './components/List2';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import Saudacao from './components/Saudacao';
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {

  //const meusItens = ['React', 'Vue', 'Angular'];

  //const [nome, setNome] = useState();
  return (
    <div className="App">
      {/*
      <HelloWorld/>
      <List/>
      <Form/>
      <p>paragrafo do app</p>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Condicional/>
      <List2 itens={meusItens} />
      <SeuNome setNome={setNome} />
      {nome}
      <Saudacao nome={nome} />
      */}
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/empresa' element={<Empresa />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
