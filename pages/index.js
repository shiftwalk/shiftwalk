import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade}>
            {/* Fixed Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-[30vw] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 border-l border-black px-3 hidden md:flex flex-wrap">
              <div className="w-full mt-auto py-3">
                <span className="font-serif mb-2 block text-lg">( Design + Build Studio )</span>
                <img src="https://placedog.net/700/915" alt="CHANGE ME" />
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-7 pt-[55px] md:pt-[65px] xl:pt-[70px] min-h-screen flex flex-wrap px-3 mb-5 md:mb-8 xl:mb-12">
                <div className="w-full mb-8 md:mb-0">
                  <h1 className="font-display text-[9vw] md:text-[4.8vw] xl:text-[4.25vw] leading-none indent-[12vw] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%]">A design-led studio building thoughtful brands + websites for our partners around the world. We feel at home creating work in the architectural, sustainability, and creative arts spaces.</h1>
                  
                  <FancyLink className="underline text-lg md:text-xl xl:text-2xl leading-none" destination="/about" a11yText="Navigate to Selected Projects" label="Selected Projects" />
                </div>

                <div className="w-full mt-auto">
                  <div className="mb-20 md:mb-32">
                    <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                  </div>

                  <Grid className="pb-3 mb-3 border-b border-black relative">
                    <svg className="w-2 absolute bottom-0 left-0 mb-3" viewBox="0 0 10 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64 28c-.907-1.893-2.347-3.653-4.32-5.28v-1.4c.853.4 1.6.8 2.24 1.2.64.373 1.173.747 1.6 1.12V.32h1.68v23.32c.453-.373 1-.747 1.64-1.12.64-.4 1.373-.8 2.2-1.2v1.4C7.733 24.347 6.293 26.107 5.36 28h-.72Z" fill="#242B2D"/></svg>

                    <div className="col-span-9 md:col-span-5 xl:col-span-4 col-start-2 md:col-start-6 xl:col-start-7 text-right">
                      <span className="block font-serif mb-5 text-lg leading-none">( Clients )</span>
                      <p className="leading-tight text-lg">Palmar, Jason Bailey Studio, Player Roberts Bell, Reform, Mat Hayward, Fat Free, West of West, Britt Rose, STUDY Architects, Paul Smith, Pitch, Jason O’Rear, BHLD, Ragged Edge, Outpost, CUSP, ThoughtLab, Jess Bright.</p>
                    </div>
                  </Grid>
                </div>
              </div>

              <div className="col-span-10 md:col-span-7">
                <div className="p-3">
                  <h2 className="font-display text-[7vw] md:text-[4.8vw] xl:text-[4.25vw] leading-none md:leading-none xl:leading-none mb-6 md:mb-8 max-w-[90%] md:max-w-[95%]">Info</h2>

                  <span className="block font-serif mb-3 text-lg">( Values )</span>

                  <ul className="border-t border-black mb-12 md:mb-20">
                    <li className="border-b border-black flex items-center space-x-4 py-2">
                      <span className="w-12 h-8 bg-black rounded-full flex items-center justify-center text-white leading-none text-xs">
                        <span className="block pt-[2px]">A</span>
                      </span>
                      <span className="block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none pt-1">Collaborate with trust + mutual respect</span>
                    </li>

                    <li className="border-b border-black flex items-center space-x-4 py-2">
                      <span className="w-12 h-8 bg-black rounded-full flex items-center justify-center text-white leading-none text-xs">
                        <span className="block pt-[2px]">B</span>
                      </span>
                      <span className="block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none pt-1">Create bold, interesting design with meaning + intent</span>
                    </li>

                    <li className="border-b border-black flex items-center space-x-4 py-2">
                      <span className="w-12 h-8 bg-black rounded-full flex items-center justify-center text-white leading-none text-xs">
                        <span className="block pt-[2px]">C</span>
                      </span>
                      <span className="block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none pt-1">Build sites with performance + accessibility in mind</span>
                    </li>
                  </ul>

                  <span className="block font-serif mb-3 text-lg">( About )</span>

                  <div className="content w-[85%] md:w-[60%] max-w-[550px] mb-12 md:mb-20 text-lg">
                    <p>We’re a multidisciplinary creative studio who believe that great design is rooted in concept, and honed by understanding. To that end, we see ourselves as curious collaborators for foward-thinking and brave brands, always looking to find novel ways to meet each brief and challenge the expected.</p>
                  </div>

                  <span className="block font-serif mb-3 text-lg">( People )</span>

                  <div className="content w-[85%] md:w-[60%] max-w-[550px] mb-12 md:mb-20 text-lg">
                    <p>ShiftWalk is led by founders <a href="#">Sam Goddard</a> + <a href="#">Isaac Powell</a>, who have over a decade of experience in design + web technology. Whilst awards don’t affect our judgement during a project, we are proud to have been recognised for our work in numerous sites + publications, including Awwwards, SiteInspire, Klikkentheke, The Brand Identity, and Typewolf.</p>
                  </div>

                  <span className="block font-serif mb-3 text-lg">( Services )</span>

                  <div className="content w-[85%] md:w-[60%] max-w-[550px] mb-12 md:mb-20 text-lg">
                    <ul>
                      <li>Strategy</li>
                      <li>Brand Identity</li>
                      <li>Visual Direction</li>
                      <li>Digital Design</li>
                      <li>Interaction</li>
                      <li>Web Development</li>
                    </ul>
                  </div>
                </div>
              
                <div className="col-span-10 md:col-span-7">
                  <div className="mb-20 md:mb-32 px-3">
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
