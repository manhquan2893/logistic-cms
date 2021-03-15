import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
`
export const SelectSection = styled.div`
  height: 30px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  padding: 4px 11px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
    height: auto;
`
export const SelectItem = styled.div`
  height:22px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  cursor:pointer;
  margin-bottom: 5px;
`
export const SelectItemText = styled.div`
  margin-right: 10px;
`
export const SelectItemCloseIcon = styled.i`
  
`
export const OptionList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0px 2px 6px 0px rgba(9,78,130,0.2);
  z-index: 2;
`
export const OptionItem = styled.div`
  padding: 4px 11px;
  background: ${props=>props.active ? '#ededed' : '#fff'};
  display:flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover{
    background: #ededed;
  }
`
export const OptionItemText = styled.div`
  
`
export const OptionItemCheckIcon = styled.i`
  color: #777;
  font-size: 12px;
`
export const VirtualInput = styled.input`
  border: none;
  outline: none;
  color: #777;
  flex: 1;
`