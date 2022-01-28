import Head from 'next/head'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>500 Px</title>
      </Head>

      <Header />
      <HeroSection />
    </div>
  )
}
