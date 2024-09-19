import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? Cores.verde : 'transparent'};
  color: ${Cores.branco};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? Cores.verde : Cores.branco)};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${Cores.branco};
  border: 2px solid ${Cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
