import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import { useState } from 'react'
import Link from 'next/link'
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home } } = pageService.getPreviewHook(initialData)()
  const [current, setCurrent] = useState(null);

  return (
    <Layout>
      <NextSeo title="Design + Build Studio" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article>
            {/* Fixed Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-[29.75vw] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 border-l border-black px-5 hidden md:flex flex-wrap">
              <div className="w-full mt-auto py-5">
                { current == 'sam' && (
                  <>
                    <span className="mb-2 block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none">Creative Development</span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="/images/sam.jpg" alt="CHANGE ME" />
                    </div>
                  </>
                )}
                { current == 'isaac' && (
                  <>
                    <span className="mb-2 block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none">Interaction, Brand, Art Direction</span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="/images/isaac.jpg" alt="CHANGE ME" />
                    </div>
                  </>
                )}
                { current == 'projects' && (
                  <>
                    <span className="mb-2 block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none">Selected Projects</span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="https://placedog.net/600/960" alt="CHANGE ME" />
                    </div>
                  </>
                )}
                { current == null && (
                  <>
                    <span className="block mb-2 lg:flex items-center text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none">
                      <svg className="w-[28px] mb-1 lg:mb-0 lg:mr-2 block" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.72 14.428c2.273-1.495 3.5-3.436 3.5-5.428s-1.227-3.933-3.5-5.428c-2.263-1.49-5.456-2.447-9.04-2.447-3.584 0-6.777.958-9.04 2.447C2.366 5.067 1.14 7.008 1.14 9s1.227 3.933 3.5 5.428c2.263 1.49 5.456 2.447 9.04 2.447 3.584 0 6.777-.958 9.04-2.447ZM13.68 18c7.555 0 13.68-4.03 13.68-9s-6.125-9-13.68-9S0 4.03 0 9s6.125 9 13.68 9Z" fill="#202020"/><path fillRule="evenodd" clipRule="evenodd" d="M13.68 16.875c3.161 0 6.093-3.296 6.093-7.875 0-4.579-2.932-7.875-6.092-7.875-3.161 0-6.093 3.296-6.093 7.875 0 4.579 2.932 7.875 6.093 7.875Zm0 1.125c3.977 0 7.2-4.03 7.2-9s-3.223-9-7.2-9c-3.976 0-7.2 4.03-7.2 9s3.224 9 7.2 9Z" fill="#202020"/><path fillRule="evenodd" clipRule="evenodd" d="M26.64 9.362H.72v-1.44h25.92v1.44Z" fill="#242B2D"/><path fillRule="evenodd" clipRule="evenodd" d="M12.96 17.999V.719h1.44v17.28h-1.44Z" fill="#242B2D"/></svg>

                      <span className="block">Nottingham, Worldwide</span>
                    </span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="images/studio.jpg" alt="CHANGE ME" />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-7 pt-[63px] md:pt-[78px] xl:pt-[80px] min-h-screen flex flex-wrap px-5">
                <div className="w-full mb-8 md:mb-0">
                  <h1 className="font-display text-[9vw] md:text-[4.8vw] xl:text-[4vw] leading-none indent-[8vw] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%]">A design-led studio building thoughtful brands + websites for our partners around the world. We feel at home creating work in the architectural, sustainability, and creative arts spaces.</h1>
                  
                  <Link href="/projects">
                    <a className="inline-block underline text-lg md:text-xl xl:text-2xl leading-none a11y-focus" onMouseEnter={()=> setCurrent('projects')} onMouseLeave={()=> setCurrent(null)}>Selected Projects</a>
                  </Link>
                </div>

                <div className="w-full mt-auto pb-5">
                  <div className="mt-[4vw] mb-[13vw] md:mb-[8.5vw]">
                    <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                  </div>

                  <Grid className="pb-12 md:pb-16 xl:pb-[7vw] border-b border-black relative">
                    <svg className="w-2 md:w-3 absolute bottom-0 left-0 mb-3 xl:mb-6" viewBox="0 0 10 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64 28c-.907-1.893-2.347-3.653-4.32-5.28v-1.4c.853.4 1.6.8 2.24 1.2.64.373 1.173.747 1.6 1.12V.32h1.68v23.32c.453-.373 1-.747 1.64-1.12.64-.4 1.373-.8 2.2-1.2v1.4C7.733 24.347 6.293 26.107 5.36 28h-.72Z" fill="#242B2D"/></svg>
                  </Grid>
                </div>
              </div>

              <div className="col-span-10 md:col-span-7 -mt-5">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-[70%] p-5 flex flex-wrap">
                    <div className="w-full">
                      <h2 className="font-display text-[9vw] md:text-[4.8vw] xl:text-[4vw] leading-none md:leading-none xl:leading-none mb-10 lg:mb-8 max-w-[90%] md:max-w-[95%]">Information</h2>
                    </div>

                    <div className="mt-auto">
                      <span className="flex items-center mb-6 text-sm">
                        <span className="font-serif leading-none text-xs block mr-[6px]">( A )</span>
                        <span className="block leading-none">Background</span>
                      </span>

                      <div className="content w-[85%] md:w-[85%] max-w-[1000px] text-lg md:text-xl 2xl:text-2xl leading-tight md:leading-tight 2xl:leading-tight">
                        <p>We're a multidisciplinary creative studio who believe that great design is rooted in concept, and honed by understanding. To that end, we see ourselves as curious collaborators for foward-thinking and brave brands, always looking to find novel ways to meet each brief and challenge the expected.</p>
                        
                        <p>Whilst our design work is often known for its attention to detail, and interesting moments of surprise, we also pride ourselves on the build quality of our output. Our websites always aim to be fast, performant, and accessible. Our brand collateral should be meaningful, and crafted for real world use. To us these traits are non-negotiable and ingrained in our approach.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-[30%] lg:border-l lg:border-black p-5 pt-12 lg:pt-32 xl:pt-40">
                    <span className="flex items-center mb-6 text-sm">
                      <span className="font-serif leading-none text-xs block mr-[6px]">( B )</span>
                      <span className="block leading-none">People</span>
                    </span>

                    <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                      <p>ShiftWalk is led by founders <button className="underline a11y-focus" onMouseEnter={()=> setCurrent('sam')} onMouseLeave={()=> setCurrent(null)}>Sam Goddard</button> + <button className="underline a11y-focus" onMouseEnter={()=> setCurrent('isaac')} onMouseLeave={()=> setCurrent(null)}>Isaac Powell</button>, who have over a decade of experience in design + web technology. Whilst awards don’t affect our judgement during a project, we are proud to have been recognised for our work in numerous sites + publications, including Awwwards, SiteInspire, Klikkentheke, The Brand Identity, and Typewolf.</p>
                    </div>

                    <span className="flex items-center mb-6 text-sm">
                      <span className="font-serif leading-none text-xs block mr-[6px]">( C )</span>
                      <span className="block leading-none">Expertise</span>
                    </span>

                    <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                      <ul>
                        <li>Creative Direction</li>
                        <li>Brand Identity</li>
                        <li>Interaction Design</li>
                        <li>Backend Architecture</li>
                        <li>Web Development</li>
                        <li>E-commerce</li>
                        <li>Accessibility</li>
                      </ul>
                    </div>

                    <span className="flex items-center mb-6 text-sm">
                      <span className="font-serif leading-none text-xs block mr-[6px]">( D )</span>
                      <span className="block leading-none">Partners</span>
                    </span>

                    <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                      <ul>
                        <li>Ragged Edge</li>
                        <li>Paul Smith</li>
                        <li>Pitch</li>
                        <li>Alpacka</li>
                        <li>Jason Bailey Studio</li>
                        <li>CUSP</li>
                        <li>Ingamana</li>
                      </ul>
                    </div>
                    
                    <span className="flex items-center mb-6 text-sm">
                      <span className="font-serif leading-none text-xs block mr-[6px]">( E )</span>
                      <span className="block leading-none">Contact</span>
                    </span>

                    <div className="text-sm leading-snug w-[85%]">
                      <ul>
                        <li>hello@shiftwalk.studio</li>
                        <li>@_shiftwalk.studio</li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              
                <Footer noRightPad />
              </div>
            </Grid>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}