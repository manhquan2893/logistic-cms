import styled from 'styled-components'

export const Wrap = styled.div`
  
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 4;
`
export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  z-index:5;
  min-width: 450px;
  min-height: 100px;
  padding: 16px 24px;
`
export const ButtonClose = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
  display: flex;
  background: #fff;
  border-radius:50%;
  width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    cursor:pointer;
`
export const CloseIcon = styled.i`
  color: #777;
  font-size: 20px;
`