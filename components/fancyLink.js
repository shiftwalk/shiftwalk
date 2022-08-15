import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`hover:text-gray-500 focus:text-gray-500 ${className}`}>
        {label}
      </a>
    </Link>
  )
}