import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Books from './components/books/Books'
import Students from './components/students/Students'
import Home from './components/home/Home'
import Details from './components/students/details/Details'
import NotFound from './components/NotFound'
import NewBook from './components/books/addBook/NewBook'

function App() {
  return (
    <div className='container p-3'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/new' element={<NewBook />} />
        <Route path='/all-students' element={<Navigate to="/students" replace />} />
        <Route path='/students' element={<Students />} >
          <Route path='details/:id' element={<Details />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
