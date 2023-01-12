import Layout from '@/components/layout'
import Header from '@/components/header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import { useContext, useEffect } from 'react'

export default function Menu() {
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo title="Menu" />

      <Header textColor="grey" bgColor="blue" />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="bg-blue"
        >
          <m.article>
            {/* Fixed Sidebar */}
            <div className="fixed lg:top-0 right-0 bottom-0 w-full lg:w-[28vw] xl:w-[22vw] lg:max-w-[360px] lg:h-screen col-span-3 col-start-8 lg:border-l border-grey flex flex-wrap lg:items-end text-grey">
              <div className="flex flex-wrap items-end w-full lg:pb-16">
                
                <div className="w-full px-5 pt-5">
                  <span className="flex items-center mb-3 lg:mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( A )</span>
                    <span className="block leading-none">New Business</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-6 lg:mb-12 content tracking-tight">
                    <p className="hidden lg:block">If you'd like to work with us on your next project, please feel free to drop us a line at the address below — we will typically respond within 48 hours. Since we're a small studio with limited availability, our usual lead time to start is 4-6 weeks.</p>

                    <p className="leading-none underline">hello@shiftwalk.studio</p>
                  </div>

                  <span className="flex items-center mb-3 lg:mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( B )</span>
                    <span className="block leading-none">Social</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-6 lg:mb-12 content tracking-tight">
                    <p className="hidden lg:block">We're not the most active at social media, but we do occasionally post updates over at Instagram. Drop by.</p>

                    <p className="leading-none underline">@_shiftwalk.studio</p>
                  </div>

                  <span className="hidden lg:flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( C )</span>
                    <span className="block leading-none">Jobs</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] content tracking-tight hidden lg:block">
                    <p>Whilst we're not actively hiring right now, we're always on the look out for talented freelance photographers, motion designers, 3D designers, and creative developers to help with work in the studio. Please reach out if this describes you — we'd love to chat.</p>
                  </div>
                </div>

                <div className="p-5 py-4 border-t border-grey w-full ml-5 lg:ml-0 mr-5 lg:hidden">
                </div>
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-10 pt-[55px] md:pt-[65px] xl:pt-[70px] min-h-screen flex flex-wrap lg:items-center bg-blue text-grey">
                <div className="w-full px-5 lg:mt-auto mb-[5vw] md:w-[80%]">
                  <span className="font-display text-[16.5vw] md:text-[8vw] xl:text-[8vw] leading-none mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] block">
                    <Link href="/"><a className="inline-block hover:text-white focus:text-white">Studio,&nbsp;</a></Link>
                    <Link href="/projects"><a className="inline-block hover:text-white focus:text-white">Projects,&nbsp;</a></Link>
                    <Link href="/journal"><a className="inline-block hover:text-white focus:text-white">Journal,&nbsp;</a></Link>
                    <a href="mailto:hello@shiftwalk.studio" className="inline-block hover:text-white focus:text-white">Email</a>
                  </span>
                </div>

                <div className="p-5 bg-blue border-t border-grey w-full mt-auto ml-5 mr-5 lg:mr-0 hidden lg:block">
                </div>
              </div>
            </Grid>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
