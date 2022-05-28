import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Landing } from '../components/Landing'
import { NavBar } from '../components/NavBar'
import { Features } from '../components/Features'
import { Container } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Pricing } from '../components/Pricing'

export default function Home() {
  return (
    <>
    <Head>
      <title>Red Herring</title>
    </Head>
      <NavBar />
      <Landing />
      <Container maxW='container.xl' p={15}>
        <Features />

        <Pricing />
      </Container>
      <Footer />
    </>
  )
}
