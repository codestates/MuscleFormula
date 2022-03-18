import { useMediaQuery } from 'react-responsive'

const PC = ({children})=> {
  const isPC = useMediaQuery({minWidth: 768})
  return isPC ? children : null
}

const Mobile = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: 767})
  return isMobile ? children : null
}

export {PC, Mobile};

