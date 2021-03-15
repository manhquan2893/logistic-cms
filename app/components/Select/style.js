import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  width: ${props=>props.width || '100%'};
`
export const ChevronDownIcon = styled.i`
  position: absolute;
  top: 9px;
  right: 10px;
  font-size: 12px;
`
export const SelectItem = styled.div`
  
  height: 30px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  padding: 4px 11px;
  cursor: pointer;
  display: flex;
  align-items:center;
`
export const OptionList = styled.div`
      display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    box-shadow: 0px 2px 6px 0px rgba(9,78,130,0.2);
    z-index: 2;
`
export const OptionItem = styled.div`
  padding: 4px 11px;
  cursor:pointer;
  background: #fff;
  &:hover{
    background: #ebebeb;
  }
  background: ${props=>props.active ? '#ebebeb' : '#fff'};
  position: relative;
`
export const CheckIcon = styled.i`
  position: absolute;
  top: 7px;
  right: 10px;
  font-size: 12px;
`