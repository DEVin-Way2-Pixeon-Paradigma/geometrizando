import PropTypes from 'prop-types'

import Square from '../Square'
import Triangle from '../Triangle'
import Circle from '../Circle'
import Rectangle from '../Rectangle'
import CapsLock from '../CapsLock'

const Figure = ({ 
  type,  
  title,
  bg
}) => {

  return (
    <>
      <CapsLock>{title}</CapsLock>
      
      {type === 'triangle' && (
        <Triangle 
          background={bg} />
      )}

    {type === 'square' && (
        <Square 
          background={bg} />
      )}

    {type === 'circle' && <Circle background={bg} /> }
    
    {type === 'rectangle' && <Rectangle background={bg} /> }
      
    </>
  )

}

Figure.propTypes = {
  type: PropTypes.oneOf(['triangle', 'square', 'circle', 'rectangle']),
  title: PropTypes.string.isRequired,
  bg: PropTypes.string
}

export default Figure