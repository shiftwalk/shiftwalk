export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.25, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '-100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-100%',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}