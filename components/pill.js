export default function Pill( {label, className, hiddenLabel} ) {
  return (
    <div className={`px-6 py-2 uppercase text-xs leading-none border border-black rounded-full block w-full group-hover:bg-black group-hover:text-white transition ease-in-out duration-300 text-center ${className}`}>
      <span className={`block ${hiddenLabel && 'opacity-0'}`}>{label}</span>
    </div>
  )
}