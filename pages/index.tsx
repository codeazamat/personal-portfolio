import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Azamat&apos;s Personal Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <Skills />
      <Qualification />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
