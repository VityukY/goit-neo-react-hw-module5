import {Routes, Route} from 'react-router-dom'
import HomePage from './page/HomePage/HomePage'
import MoviesPage from './page/MoviesPage/MoviePage'
import NotFound from './page/NotFoundPage/NotFoundPage'
import Navigation from './components/Navigation/Navigation'
import MovieDetailsPage from './page/MovieDetailsPage/MovieDetailsPage'
import './App.css'

function App() {


  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
