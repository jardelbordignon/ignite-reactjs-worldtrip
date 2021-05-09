import { Flex, Image, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/core'

import { DestinationLink } from '../components/DestinationLink'
import { Header } from '../components/Header'

import { continents } from '../data.json'

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination])

export default function Home() {
  const isMdVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex direction="column">
      <Header />

      <Image src="/images/banner.svg" alt="Banner" />

      <SimpleGrid 
        w="100%" maxWidth={1000} minChildWidth='170px' columns={5} spacingY='40px' spacingX='0px'
        mx="auto" mt="10">
        <DestinationLink title="vida noturna" icon="vida-noturna.svg" link="/" />
        <DestinationLink title="praia" icon="praia.svg" link="/" />
        <DestinationLink title="moderno" icon="moderno.svg" link="/" />
        <DestinationLink title="classico" icon="classico.svg" link="/" />
        <DestinationLink title="e mais..." icon="mundo.svg" link="/" />
      </SimpleGrid>

      <Flex mx="auto" my="12" w={90} h={1} bg="gray" />

      <Text fontSize={isMdVersion ? 36 : 20} textAlign="center">
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Flex h={isMdVersion ? 450 : 250} w='100%' maxWidth={1240} mx='auto' my='12'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper">

            {
              continents.map(continent => (
                <SwiperSlide>
                  <Link href={`/continent/europa`} passHref>
                    <a>
                      <Text fontSize={isMdVersion ? 48 : 24}>
                        {continent.label}
                      </Text>
                      <Text fontSize={isMdVersion ? 24 : 14}>
                        {continent.description}
                      </Text>
                    </a>
                  </Link>
                  <Image src={continent.image} alt={continent.name} />
                </SwiperSlide>
              ))
            }

        </Swiper>
      </Flex>
    </Flex>
  );
}
