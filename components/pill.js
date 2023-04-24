import { reveal } from '@/helpers/transitions'
import { m } from 'framer-motion'
import { useState } from 'react';
export default function Pill( {label, className, hiddenLabel, shouldTransitionOverride, mouseOverride, parentHover, white} ) {
  const [shouldTransition, setShouldTransition] = useState(false);

  function handleHover() {
    setShouldTransition(true);
  }

  function handleHoverOut() {
    setShouldTransition(false);
  }

  return (
    <div
      className={`px-6 py-2 uppercase text-xs leading-none border rounded-full relative overflow-hidden block w-full text-center ${className} tracking-[-0.01em] group-focus-visible:text-white ${white ? 'border-white' : 'border-black'}`} 
      onMouseEnter={mouseOverride ? null : handleHover } 
      onMouseLeave={mouseOverride ? null : handleHoverOut } 
    >
      <div className="relative overflow-hidden">
        { parentHover ? (
          <m.span variants={reveal} className={`block relative z-10 ${ shouldTransitionOverride && 'pill-text-hover' } ${hiddenLabel && 'opacity-0'}`}>
            {label}
          </m.span>
        ) : (
          <m.span variants={reveal} className={`block relative z-10 ${ shouldTransition && 'pill-text-hover' } ${hiddenLabel && 'opacity-0'}`}>
            {label}
          </m.span>
        )}
      </div>
      {!white && (
        <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-black group-hover:md:h-full group-focus-visible:md:h-full"></div>
      )}
    </div>
  )
}