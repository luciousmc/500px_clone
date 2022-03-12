import { qualities } from '../../info/qualities'
import QualitiesCard from './QualitiesCard'

function QualitiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-10 lg:px-0">
      <h1 className="my-5 text-center text-3xl font-bold">
        What Makes Us Different
      </h1>

      <div className="mt-10 flex flex-wrap justify-center gap-5">
        {qualities.map(({ title, description, imgSrc }, i) => (
          <QualitiesCard
            imgSrc={imgSrc}
            cardTitle={title}
            cardDescription={description}
          />
        ))}
      </div>
    </section>
  )
}

export default QualitiesSection
