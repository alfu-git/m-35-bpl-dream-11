import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <>
      <header>
        <section className='mb-6 py-4 container mx-auto px-5'>
          <NavBar />
        </section>
      </header>

      <main>
        <section className='mb-22 container mx-auto px-5'>
          <Banner />
        </section>
      </main>
    </>
  )
}

export default App
