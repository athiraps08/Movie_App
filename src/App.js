import logo from './logo.svg';
//import './App.css';
import SearchMovie from './components/SearchMovie';
import EditMovie from './components/EditMovie';
import AddMovie from './components/AddMovie';
import ViewMovie from './components/ViewMovie';
import MovieApp from './components/MovieApp';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
   
   <Header />
  <MovieApp />
   
   
   
   
    </div>
  );
}

export default App;
