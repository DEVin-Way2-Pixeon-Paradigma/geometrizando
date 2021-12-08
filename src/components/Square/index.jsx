import CapsLock from '../CapsLock'

function Square(props) {
  const titulo = `${props.titulo} DevInHouse`
  
  return (
    <div>
      <CapsLock texto={titulo}/>
      <div 
        style={{background: props.background, 
          width: props.largura }}
        className="square"></div>
    </div>
  )
}

export default Square