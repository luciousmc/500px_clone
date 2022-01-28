import Image from 'next/image'

function HeroSection() {
  return (
    <section>
      <div className="relative flex h-[85vh] w-screen items-center">
        <Image src="/images/HeroImage.jpg" layout="fill" objectFit="cover" />
        <div className="absolute left-28 w-[600px] space-y-5">
          <h1 className="text-5xl font-semibold">
            Discover and Share the World's Best Photos
          </h1>
          <p>
            Get inspired with incredible photos from diverse styles and genres
            around the world. We're not guided by fads—just great photography.
          </p>
          <button className="rounded-full bg-white py-4 px-10 text-xl font-bold">
            Sign up
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
