import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrap = styled.div`
  background: #344150;
  width: 260px;
  height: 1100px;
  min-width: 260px;
`
export const List = styled.ul`
  
`
export const ListItem = styled(Link)`
  display: flex;
    padding: 14px 24px;
    align-items:center;
    cursor: pointer;
    border-right: ${props=>props.active ? '5px solid rgba(0,220,220,0.8)' : '5px solid transparent'};
    background:  ${props=>props.active ? '#293643' : 'transparent'};
    &:hover{
      background:#293643;
    }
`
export const ListItemIcon = styled.div`
  width: 14px;
  color: rgba(255,255,255,0.5);
`
export const ListItemText = styled.div`
  margin-left: 15px;
  color: rgba(255,255,255,0.5);
`
