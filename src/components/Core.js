import styled from 'styled-components'
import {Card as OriginalCard, Input as OriginalInput} from 'reactstrap'

export const Header = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 60px;
  background-color: #2DB495;
  box-shadow: 1px 1px 15px rgba(0,0,0,0.5);
`

export const Input = styled(OriginalInput)`
  background-color: rgba(255,255,255,0.5);
  border-width: 0;
  &:focus{
    background-color: rgba(255,255,255,0.5);
    color: #fff;
  }
  &&::placeholder{
    color: #fff;
  }
`

export const Card = styled(OriginalCard)`
  display: flex;
  min-height: 60px;
  margin-top: 5px;
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  color: #666;
  padding: 10px;
  padding-left: 20px;
  cursor: pointer;
`

export const Body = styled('div')`
  background-color: #7DE0E0;
  padding: 10px;
  min-height: 100vh;
`

export const Action = styled('span')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80px;

`
export const CenteredAlert = styled('div')`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items:center;
  font-size:30px;
  font-weight: bold;
  color: #fff;
`
