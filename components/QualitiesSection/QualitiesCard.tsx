interface QualitiesCardProps {
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
    <div>
      <div>
        <img src={imgSrc} alt={cardTitle} />
      </div>
      <h1>{cardTitle}</h1>
      <p>{cardDescription}</p>
    </div>
  )
}

export default QualitiesCard
