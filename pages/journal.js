import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import { useState } from 'react'

export default function Journal() {
  const [current, setCurrent] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  function updateCurrent(e) {
    setCurrent(e)
    setIsHovering(true)
  }

  function removeCurrent() {
    setCurrent(null)
    setIsHovering(false)
  }

  return (
    <Layout>
      <NextSeo title="Journal" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article>
            {/* Fixed Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-[29.75vw] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 border-l border-black px-3 hidden md:flex flex-wrap">
              <div className="w-full mt-auto py-3">
                { current !== null && (
                  <>
                    <span className="font-serif mb-3 block text-lg">( Info )</span>

                    <div className="content text-lg indent-[10%] w-[95%] mb-3">
                      <p>We're delighted to be working with Portland &amp; LA design studio West of West on a complete overhaul of their website. Working with clients all over the world, from Nike to Eastbound, it's an excited opportunity to push their visual direction.</p>
                    </div>

                    <div className="w-full h-[25vw] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="https://placedog.net/600/983" alt="CHANGE ME" />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-7 pt-32 md:pt-[20vh] xl:pt-[30vh] relative">
                <svg className="mx-3 w-3 absolute top-0 left-0 mb-3 pt-[10vh] hidden md:block" viewBox="0 0 10 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64 28c-.907-1.893-2.347-3.653-4.32-5.28v-1.4c.853.4 1.6.8 2.24 1.2.64.373 1.173.747 1.6 1.12V.32h1.68v23.32c.453-.373 1-.747 1.64-1.12.64-.4 1.373-.8 2.2-1.2v1.4C7.733 24.347 6.293 26.107 5.36 28h-.72Z" fill="#242B2D"/></svg>

                <a href="#" onMouseEnter={()=> updateCurrent(0)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 0 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">ShiftWalk to work with STUDY architects on brand refresh</h2>
                  </div>
                </a>

                <a href="#" onMouseEnter={()=> updateCurrent(1)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 1 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">New brand &amp; site launched for Palmar Agency</h2>
                  </div>
                </a>

                <a href="#" onMouseEnter={()=> updateCurrent(2)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 2 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">A new home for ShiftWalk as we move to Arc Studio</h2>
                  </div>
                </a>

                <a href="#" onMouseEnter={()=> updateCurrent(3)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 3 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">West of West x ShiftWalk, a collaborative experiment</h2>
                  </div>
                </a>

                <a href="#" onMouseEnter={()=> updateCurrent(4)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 4 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">We launch our new website and brand ident</h2>
                  </div>
                </a>

                <a href="#" onMouseEnter={()=> updateCurrent(5)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 5 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">ShiftWalk to work with Jason Bailey Studio this spring</h2>
                  </div>
                </a>

                <a href="#" onMouseEnter={()=> updateCurrent(6)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 6 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">Our interactive music project up for Site of the Year award</h2>
                  </div>
                </a>

                <a href="#" onMouseEnter={()=> updateCurrent(7)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == 7 || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                  <div className="flex pb-1">
                    <span className="font-serif mb-2 block text-base leading-none">( SW.054 )</span>
                    <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( 05.04.22 )</span>
                  </div>
                  <div className="border-t border-black pt-4">
                    <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">Announcing ShiftWalk, a new creative design studio</h2>
                  </div>
                </a>
              
                <div className="col-span-10 md:col-span-7">
                  <div className="mb-[13vw] md:mb-[8.5vw] mt-[15vw] px-3">
                    <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                  </div>
                </div>
                <Footer />
              </div>
            </Grid>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
