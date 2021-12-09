import './App.css'
import Figure from './components/Figure'

function App() {

  return (
    <>
      <Figure type="square" title="Quadrado" 
        />

      <Figure type="triangle" title="Triangulo"
        bg="red"/>

      <Figure type="circle" title="Circulo"
        bg="blue"/>
      
      <Figure type="rectangle" title="Retangulo"
        bg="black"/>  
    </>
  ) 
}

export default App
