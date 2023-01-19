export default function Pill( {label, className} ) {
  return (
    <div className={`px-6 py-2 uppercase text-xs leading-none border border-black rounded-full block w-full group-hover:bg-black group-hover:text-white text-center ${className}`}>
      {label}
    </div>
  )
}