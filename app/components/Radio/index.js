import React,{useState} from 'react'
import {Wrap,RoundMark,Round,Text} from './style'
 
function Radio(props) {
  const onClick = () => {
    props.onChange(props.radio.id)
  }
  return (
    <Wrap onClick={onClick}>
      <Round>
        <RoundMark active={props.radio.checked}></RoundMark>
      </Round>
      <Text>{props.radio.name}</Text>
    </Wrap>
  )
}
export default Radio