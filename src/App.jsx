
import './App.css'
import Pricecard1 from'./Pricecard1'
import Pricecard2 from'./pricecard2'
import Pricecard3 from'./pricecard3'

function App() {
  return (
    <div>
    <h1 className='heading'>React Price Card Task</h1>
    <div className='app'> 
    <Pricecard1/>
    <Pricecard2/>
    <Pricecard3/>
    </div> 
    </div>
  )
}

export default App
