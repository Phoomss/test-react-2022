import React from 'react'

const ClassCard = (props) => {
  return (
    <div style={divStyle}>
        <p style={textStyle}>
            <strong>Price</strong>
        </p>
        <p style={textStyle}>Duration: {props.name}</p>
        <p style={textStyle}>Price for 1 person: {props.price.priceone}</p>
        <p style={textStyle}>Price for 2 person: {props.price.pricetwo}</p>
    </div>
  )
}
const divStyle={
    border: '1px solid black',
    borderRadius:5,
    padding:20,
    marginLeft:'20%',
    marginRight:'20%',
    marginBottom:15,
    fontWeight:'bold',
    fontFamily:'courier',
}
const textStyle={
    marginBottom:10,
}
const img={
    with:35,
}
export default ClassCard