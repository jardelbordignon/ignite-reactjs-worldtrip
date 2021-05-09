//import { ElementType } from 'react'
import { Image, Flex, Text, useBreakpointValue, Box } from '@chakra-ui/react'
import Link from 'next/link'

interface DestinationTypeProps {
  icon: string
  title: string
  link: string
}

export function DestinationLink({icon, title, link}: DestinationTypeProps) {
  const isMdVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Link href='/'>
      <a>
        <Flex
          direction={isMdVersion ? 'column' : 'row'}
          align='center'
          justify='center'
        >
          
          { isMdVersion
            ? <Image src={`/images/${icon}`} alt={ title } />
            : <Box bg='#FFBA08' w={2} h={2} borderRadius='50%' mr='2' />
          }

          <Text
            fontFamily='Poppins'
            fontWeight='semibold'
            fontSize={isMdVersion ? 24 : 18}
          >
            { title }
          </Text>

        </Flex>
      </a>
    </Link>
  )
}
