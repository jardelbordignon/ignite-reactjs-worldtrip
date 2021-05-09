import { Flex, Text, Image, Box, SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Header } from '../../components/Header'

import { continents } from '../../data.json'

export default function Continent() {
  const router = useRouter()
  const { continent } = router.query

  if (!continent) return <Text>Carregando...</Text>

  const continentData = continents.find(c => c.name === continent)
  const { description, image, label, name, text, info, cities } = continentData

  return (
    <Flex direction='column' h='100vh' mb='10'>
      <Header />
      
      <Flex w='100%' maxWidth={1440} h={500} mx='auto' mb='20'>
        <Image src={image} alt={label} w='100%' />
      </Flex>

      <Flex w='100%' maxWidth={1160} mx='auto' direction='column'>

        <Flex w='100%' justify='space-between'>
          <Box width='100%' maxWidth={600}>
            <Text align='justify' fontSize={24}>{ text }</Text>
          </Box>

          <Flex width='100%' maxWidth={490} justify='space-between' align='center'>
            {
              info.map(data => (
                <Box align='center' key={data.label}>
                  <Text
                    as='h1'
                    color='#FFBA08'
                    fontSize={48}
                    fontWeight='semibold'
                  >
                    {data.number}
                  </Text>
                  <Text
                    as='span'
                    fontSize={24}
                    fontWeight='semibold'
                  >
                    {data.label}
                  </Text>
                </Box>
              ))
            }
          </Flex>
        </Flex>

        <Flex w='100%' justify='space-between' mt='20' mb='10' direction='column'>

          <Text fontSize={36} mb='10'>Cidades +100</Text>
          
          <SimpleGrid minChildWidth="256px" columns={4} spacingY='40px' spacingX='10px'>

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
