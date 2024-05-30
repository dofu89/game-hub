import { HStack, Switch, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  console.log(colorMode)

  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text>{colorMode} mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
