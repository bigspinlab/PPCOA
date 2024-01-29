import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row">
      <ul>
        <li>
          <Link href="/about">
            Sobre
          </Link>
        </li>

        <li>
          <Link href="/team">
            Equipa
          </Link>
        </li>

        <li>
          <Link href="/contact">
            Contactos
          </Link>
        </li>
      </ul>
    </nav>
  )
}