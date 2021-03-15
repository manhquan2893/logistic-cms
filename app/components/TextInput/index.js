import React,{useState} from 'react'
import {Wrap} from './style'
 
function TextInput(props) {
  return (
    <Wrap defaultValue={props.defaultValue} onChange={props.onChange}>
      
    </Wrap>
  )
}
export default TextInput