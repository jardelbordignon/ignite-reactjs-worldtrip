import { Flex, Text, Image, Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Header } from '../../components/Header'

import { continents } from '../../data.json'

export default function Continent() {
  const router = useRouter()
  const { continent } = router.query

  const isLgVersion = useBreakpointValue({ base: false, lg: true })
  const isMdVersion = useBreakpointValue({ base: false, md: true })

  if (!continent) return <Text>Carregando...</Text>

  const continentData = continents.find(c => c.name === continent)
  const { image, label, text, info, cities } = continentData

  return (
    <Flex direction='column' h='100vh' mb='10'>
      <Header />
      
      <Flex w='100%' maxWidth={1440} h={500} mx='auto' mb='20'>
        <Image src={image} alt={label} w='100%' />
      </Flex>

      <Flex w='100%' maxWidth={1160} mx='auto' direction='column'>

        <Flex
          w='100%'
          align='center'
          justify={isLgVersion ? 'space-between' : 'center'}
          direction={isLgVersion ? 'row' : 'column'}
          p='2'
        >
          <Box width='100%' maxWidth={600} px='2'>
            <Text align='justify' fontSize={24}>{ text }</Text>
          </Box>

          <Flex width='100%' maxWidth={490} justify='space-between' align='center'
            px='2'
            mt={isLgVersion ? 0 : 3}
          >
            {
              info.map(data => (
                <Box align='center' key={data.label}>
                  <Text
                    as='h1'
                    color='#FFBA08'
                    fontSize={isMdVersion ? 48 : 24}
                    fontWeight='semibold'
                  >
                    {data.number}
                  </Text>
                  <Text
                    as='span'
                    fontSize={isMdVersion ? 24 : 18}
                    fontWeight='semibold'
                  >
                    {data.label}
                  </Text>
                </Box>
              ))
            }
          </Flex>
        </Flex>

        <Flex w='100%' mt='20' mb='10' direction='column' p='4'>

          <Text fontSize={36} mb='10'>Cidades +100</Text>
          
          <SimpleGrid minChildWidth="256px" 
            columns={4} spacingY='40px' spacingX='10px'
            mx={isMdVersion ? '' : 'auto'}>

            {
              cities.map(city => (
                <Box w={256}>
                  <Image src={city.image} w={256} h={173} borderTopRadius={4} />

                  <Flex
                    align='center'
                    justify='space-between'
                    p='5'
                    pt='4'
                    borderWidth={1}
                    borderTop={0}
                    borderColor='#FFBA08'
                    borderBottomRadius={4}
                    bg='#FFBA0820'
                  >
                    
                    <Box>
                      <Text fontWeight='semibold' fontSize={25} mb='2'>
                        { city.name }
                      </Text>

                      <Text color='#999'>
                        { city.country }
                      </Text>
                    </Box>

                    <Image src={`/images/flags/${city.country_flag}`} alt='United Kingdom' />
                  </Flex>
                </Box>
              ))
            }

          </SimpleGrid>
        </Flex>
      </Flex>
      
    </Flex>
  )
}
