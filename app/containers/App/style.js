import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
`
export const MainContent = styled.div`
  padding: 24px;
  width: 100%;
`
export const Page = styled.div`
  
`

export const PageTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 25px;
  font-weight: 500;
`
export const Row = styled.div`
  display: flex;
  
`
export const Button = styled.div`
  cursor:pointer;
  display: flex;
  justify-content:center;
  align-items: center;
  padding: 4px 11px;
background: ${props=>props.bgColor || 'rgba(0,150,230,1)'};
color: ${props=>props.color || '#fff'};
font-size: 15px;
font-weight: 500;

`
