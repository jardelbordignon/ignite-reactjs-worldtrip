//import { ElementType } from 'react'
import { Image, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface DestinationTypeProps {
  icon: string
  title: string
  link: string
}

export function DestinationLink({icon, title, link}: DestinationTypeProps) {
  return (
    <Link href='/'>
      <a>
        <Flex
          direction='column'
          align='center'
          justify='center'
        >
          
          <Image src={`/images/${icon}`} alt={ title } />
          <Text
            fontFamily='Poppins'
            fontWeight='semibold'
            fontSize='24'
          >
            { title }
          </Text>

        </Flex>
      </a>
    </Link>
  )
}
