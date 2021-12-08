const circle = ({ background, titulo }) => {

  return (
    <div>
      <span>{titulo}</span>
      <div 
        style={{background: background}}
        className="circle"></div>
    </div>
    
  )
}

export default circle