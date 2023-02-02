export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
	}
}