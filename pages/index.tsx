import Head from 'next/head'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection'
import QualitiesSection from '../components/QualitiesSection/QualitiesSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>500 Px</title>
      </Head>

      <Header />
      <HeroSection />
      <QualitiesSection />
    </>
  )
}
