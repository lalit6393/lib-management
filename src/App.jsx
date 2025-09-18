import './App.css'
import Books from './components/books/Books'
import Students from './components/students/Students'

function App() {
  return (
    <div className='container-fluid p-3'>
      <div className='row row-cols-md-2 gy-3'>
        <Books />
        <Students />
      </div>
    </div>
  )
}

export default App
