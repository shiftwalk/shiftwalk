import Link from 'next/link'
import { useState } from 'react';
import Pill from './pill';

export default function ListLink( {slug, title, projectCode} ) {
  const [shouldTransition, setShouldTransition] = useState(false);

  function handleHover() {
    setShouldTransition(true);
  }

  function handleHoverOut() {
    setShouldTransition(false);
  }
  return (
    <Link href={`${slug}`}>
      <a className="w-full group block text-base md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none uppercase pt-3 pb-2 border-b border-black md:flex md:flex-wrap md:items-center group" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
        <span className="font-serif font-normal text-sm md:text-base xl:text-lg leading-none inline-block md:block mr-1">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</span>
        <span className="inline-block md:inline-block font-display">{title}</span>
        <div className="md:w-[225px] xl:w-[290px] ml-auto hidden md:block">
          <Pill label={'View Project'} mouseOverride={true} shouldTransitionOverride={shouldTransition} parentHover={true} />
        </div>
      </a>
    </Link>
  )
}