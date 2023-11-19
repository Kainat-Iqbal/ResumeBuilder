import { Button, VStack,Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    
    <VStack marginBottom={9} alignContent={'center'}>
      <Text fontStyle={'oblique'} fontSize={'1cm'}>easyResume
      Online Resume Builder.</Text>
      <Text fontSize={'.75cm'}>
"Resume Crafting is headache???"</Text>
      <Text fontWeight={'bold'}>Not now, here you can easily create your resume.</Text>
      <Image margin={'4% 0'} h={'5cm'} src='https://pngimg.com/d/cv_PNG41.png'/>
      <Link to={'/template'}>
      <Button bg={'#5A5A5A'} color={'white'}>Create my Resume Now</Button>
      </Link>
    </VStack>
    
  )
}

export default Home
