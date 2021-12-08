import './App.css'
import Square from './components/Square'
import Circle from './components/Circle'

function App() {

  return (
    <>
      <Square titulo="Quadrado" />
      <Square 
        background="gray" 
        titulo="Quadrado cinza"/>
      <Square 
        titulo="Quadrado com largura"
        largura={100}
        />
      <Circle titulo="Circulo"/>  

      {/* <CapsLock texto="Me deixe em Caps Lock" /> */}

    </>
  ) 
}

export default App
