import { reveal } from '@/helpers/transitions'
import { m } from 'framer-motion'
export default function Pill( {label, className, hiddenLabel} ) {
  return (
    <div className={`px-6 py-2 uppercase text-xs leading-none border border-black rounded-full block w-full group-hover:bg-black group-hover:text-white transition ease-[cubic-bezier(0.65,0,0.35,1)] duration-300 text-center ${className}`}>
      <div className="relative overflow-hidden">
        <m.span variants={reveal} className={`block ${hiddenLabel && 'opacity-0'}`}>{label}</m.span>
      </div>
    </div>
  )
}