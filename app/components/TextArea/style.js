import styled from 'styled-components'

export const Wrap = styled.textarea`
  height: 85px;
  width: ${props=>props.width || '100%'};
  border: 1px solid #cdcdcd;
  padding: 4px 11px;
  outline: none;
`