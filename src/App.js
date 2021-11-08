import logo from './logo.svg';
//import './App.css';
import SearchMovie from './components/SearchMovie';
import EditMovie from './components/EditMovie';
import AddMovie from './components/AddMovie';
import ViewMovie from './components/ViewMovie';
import MovieApp from './components/MovieApp';
import Header from './components/Header';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import DeleteMov from './components/DeleteMov';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
   
   <Header />
  {/* <MovieApp /> */}
  <Routes>
  <Route path='/' exact element={<SearchMovie/>} />
  <Route path='/add' exact element={<AddMovie />} />
  <Route path='/view' exact element={<ViewMovie />} />
  <Route path='delete' exact element={<DeleteMov />} />
  <Route path='/update' exact element={<EditMovie />} />
  

  </Routes>
  

   
   </BrowserRouter>
   

   
    </div>
  );
}

export default App;
