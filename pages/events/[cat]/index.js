import Link from 'next/link'

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
          <img src={ev.image} width={300} height={300} alt={ev.title} />
          <h2>{ev.title}</h2>
          <h2>{ev.description}</h2>
        </Link>
      ))}
    </div>
  )
}

export default EventsCatPage

export async function getStaticPaths({ data }) {
  const { events_categories } = await import('/data/data.json')
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id,
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
  const id = context?.params.cat
  const data = allEvents.filter((ev) => ev.city === id)
  return {
    props: {
      data,
      pageName: id[0].toUpperCase() + id.slice(1),
      fallback: false,
    },
  }
}
