import './App.css'
import Button1 from './Components/UI/Buttons/Button1'
import ButtonShowcase from './Showcases/ButtonShowcase'

function App() {
  return (
    <>
      <h1>Explore Components</h1>
      <ButtonShowcase Button={Button1}>Button1</ButtonShowcase>
    </>
  )
}

export default App
