import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='40px'/>
        <Text>Navigation</Text>
    </HStack>
  )
}

export default NavBar