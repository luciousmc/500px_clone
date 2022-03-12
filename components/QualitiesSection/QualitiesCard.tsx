type QualitiesCardProps = {
  cardTitle: string
  imgSrc: string
  cardDescription: string
}

function QualitiesCard({
  cardTitle,
  imgSrc,
  cardDescription,
}: QualitiesCardProps) {
  return (
    <div className="w-64 md:w-80">
      <div>
        <img className="w-10" src={imgSrc} alt={cardTitle} />
      </div>
      <h1 className="py-3 text-2xl font-bold">{cardTitle}</h1>
      <p className=" text-sm">{cardDescription}</p>
    </div>
  )
}

export default QualitiesCard
