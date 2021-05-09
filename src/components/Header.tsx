import { Flex, Box, Image, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { asPath } = useRouter()

  return (
    <Flex
      as='header'
      w='100%'
      minHeight={100}
      maxWidth={1440}
      align='center'
      justify='center'
    >

      <Flex
        h='100%'
        w='100%'
        maxWidth={1160}
        align='center'
        justify='space-between'
      >

        <Box w={8}>
          { (isWideVersion && asPath !== '/') &&
            <Link href='/' passHref>
              <a>
                <Image src='/images/arrow-back.svg' alt='Back button' />
              </a>
            </Link>
          }
        </Box>
        
        <Image src='/images/logo.svg' alt='World Trip' />
        <Box w={8} />

      </Flex>


    </Flex>
  )
}
