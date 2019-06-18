import React from 'react';
import './App.css';
import {Navigation} from './components/Navbar';
import Footer from './components/stateless/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
      <Navigation/>
      <Footer/>
      </div>
    );
  }
}

export default App;
