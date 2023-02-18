const EventPage = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt={data.title} width={300} height={300} />
      <h1>{data.title}</h1>
      <h2>at {data.city}</h2>
      <p>{data.description}</p>
    </div>
  )
}

export default EventPage

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json')
  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        cat: ev.city,
        id: ev.id,
      },
    }
  })
  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json')
  const id = context?.params.id
  const data = allEvents.find((ev) => ev.id === id)
  console.log(data)
  return {
    props: {
      data,
      pageName: id[0].toUpperCase() + id.slice(1),
      fallback: false,
    },
  }
}
