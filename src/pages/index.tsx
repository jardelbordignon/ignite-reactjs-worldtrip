import { Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/core'

import { DestinationLink } from '../components/DestinationLink'
import { Header } from '../components/Header'

import { continents } from '../data.json'

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination])

export default function Home() {
  return (
    <Flex direction="column">
      <Header />

      <Link href="/continent" passHref>
        <a>
          <Image src="/images/banner.svg" alt="Banner" />
        </a>
      </Link>

      <Flex w="100%" maxWidth={1000} justify="space-between" mx="auto" mt="10">
        <DestinationLink title="vida noturna" icon="vida-noturna.svg" link="/" />
        <DestinationLink title="praia" icon="praia.svg" link="/" />
        <DestinationLink title="moderno" icon="moderno.svg" link="/" />
        <DestinationLink title="classico" icon="classico.svg" link="/" />
        <DestinationLink title="e mais..." icon="mundo.svg" link="/" />
      </Flex>

      <Flex mx="auto" my="12" w={90} h={1} bg="gray" />

      <Text fontSize="36" textAlign="center">
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Flex h={450} w='100%' maxWidth={1240} mx='auto' my='12'>
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
                      <h1>{continent.label}</h1>
                      <span>{continent.description}</span>
                    </a>
                  </Link>
                  <img src={continent.image} alt={continent.name} />
                </SwiperSlide>
              ))
            }

        </Swiper>
      </Flex>
    </Flex>
  );
}
