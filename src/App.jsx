import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import {Discuss} from 'react-loader-spinner'
import './App.css'
import {lazy,  Suspense } from 'react'

function App() {
  const HomePage = lazy(()=> import('./page/HomePage/HomePage'))
  const MoviesPage = lazy(() => import('./page/MoviesPage/MoviePage'))
  const MovieDetailsPage = lazy(() => import('./page/MovieDetailsPage/MovieDetailsPage'))
  const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
  const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
  const NotFound = lazy(() => import('./page/NotFoundPage/NotFoundPage'))
  
  return (
    <>
      <Navigation/>
      <Suspense fallback={<Discuss/>}>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} >
            <Route path='/movies/:id/cast' element={<MovieCast />}/>
            <Route path='/movies/:id/reviews' element={<MovieReviews />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
