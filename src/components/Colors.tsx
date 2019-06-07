import * as React from "react";
import styled from '@emotion/styled'

interface Props {
    foo?: boolean
}

const Colors = styled.div<Props>`
  border: 1px solid ${props => props.foo ? 'red' : 'yellow'}
`

/** @component */
export default Colors
