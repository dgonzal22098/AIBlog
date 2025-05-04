import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import styled from 'styled-components'

const CenteredCont = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CenteredCont>
      <App />
    </CenteredCont>
  </StrictMode>,
)
