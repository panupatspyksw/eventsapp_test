import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <img />
        <Link href='/'>Home</Link>
        <Link href='/events'>Events</Link>
        <Link href='/about-us'>About us</Link>
      </nav>
    </header>
  )
}
export default Header
