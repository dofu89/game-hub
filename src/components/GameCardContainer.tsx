import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface Props {
  children: ReactElement
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  )
}

export default GameCardContainer
