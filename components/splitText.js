import React from 'react'
import { m } from 'framer-motion'

export function SplitText({ children, display, text, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
      className="leading-none"
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <m.span
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          className={display ? 'translate-y-[-10vw]' : '' }
          custom={i}
        >
          <span className={`block mb-0 pb-0 pr-[1px] ${display ? 'translate-y-[-1vw] md:translate-y-[-0.55vw] xl:translate-y-[-0.55vw]' : '' } ${text ? 'translate-y-[-2px] md:translate-y-[-3px] xl:translate-y-[-3px]' : '' }`}>
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </span>
        </m.span>
      </span>
    )
  })
}