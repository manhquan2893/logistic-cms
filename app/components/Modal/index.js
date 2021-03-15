import React,{useState} from 'react'
import {Wrap,Overlay,Content,ButtonClose,CloseIcon} from './style'
 
function Modal(props) {
  return (
    <Wrap>
      <Overlay onClick={props.onCancel}></Overlay>
      <Content>
        {props.children}
        <ButtonClose onClick={props.onCancel}>
          <CloseIcon className="fas fa-times"></CloseIcon>
        </ButtonClose>
      </Content>
    </Wrap>
  )
}
export default Modal