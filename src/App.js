import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import MovieList from './components/movieList/MovieList';
import Home from './components/pages/home/Home';
import MovieDetail from './components/pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/imdb' element={<Home />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path='movies/:type' element={<MovieList />} />
        <Route path='/*' element={<h1><a href="/imdb">Error Page Back To Home</a></h1>} />
      </Routes>
    </div>
  );
}

export default App;
