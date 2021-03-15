import React,{useState} from 'react'
import {Wrap,Box,CheckIcon,Text} from './style'
 
function Checkbox(props) {
  return (
    <Wrap onClick={props.onChange}>
      <Box>
        {
          props.checkboxObject.checked && (
            <CheckIcon className="fas fa-check"></CheckIcon>
          )
        }
      </Box>
      <Text>{props.checkboxObject.name}</Text>
    </Wrap>
  )
}
export default Checkbox