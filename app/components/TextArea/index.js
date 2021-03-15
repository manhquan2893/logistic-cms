import React,{useState} from 'react'
import {Wrap} from './style'
 
function TextArea(props) {
  return (
    <Wrap defaultValue={props.defaultValue} onChange={props.onChange}>
      
    </Wrap>
  )
}
export default TextArea