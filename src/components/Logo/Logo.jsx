import React from 'react'
import { Link } from './styled'

const Logo = ({ source, to, title }) => {
  return (
    <Link href={to}>
      <img src={source} alt={title} />
    </Link>
  )
}

export default Logo

