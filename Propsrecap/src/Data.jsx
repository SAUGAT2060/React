
import React from 'react'
import PropTypes from 'prop-types'
function Data(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age:{props.age}</p>
      <p>Goal:{props.goal}</p>
    </div>
  )
}
Data.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  goal:PropTypes.string


}
Data.defaultProps={
  name:"Guest",
  age:0,
  goal:"We will see where life takes me "

}
export default Data