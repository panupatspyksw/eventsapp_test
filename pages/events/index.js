import Link from 'next/link'

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Event Page</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <img src={ev.image} width={300} height={300} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories,
    },
  }
}