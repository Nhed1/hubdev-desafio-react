import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components of all app
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Contato from './components/Contato';
import Footer from './components/Footer';
// Components for other components
// button and cards
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Contato></Contato>
      <Footer></Footer>
    </div>
  );
}
export default App;
