import styled from 'styled-components'

export const Wrap = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 25px;
`
export const RoundMark = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  background: ${props=>props.active ? 'rgba(0,150,230,1)' : 'transparent'};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
export const Round = styled.div`
  position: relative;
  width: 18px;
  height:18px;
  border: 1px solid #777;
  border-radius: 50%;
  margin-right: 8px;
  
`
export const Text = styled.div`
  
`
