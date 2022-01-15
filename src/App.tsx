import React from 'react';
import './styles/App.css';

// Components of all app
import Navigation from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components for other components
// button and cards
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
export default App;
