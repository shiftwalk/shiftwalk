import Layout from '@/components/layout'
import Header from '@/components/header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import { useContext, useEffect } from 'react'
import Footer from '@/components/footer'

export default function Contact() {
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo title="Contact" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article>
            {/* Fixed Sidebar */}
            <div className="fixed md:top-0 left-0 bottom-0 w-full md:w-[25%] lg:w-[20%] md:h-screen col-span-3 col-start-8 md:border-r border-black flex flex-wrap pt-[45px] md:pt-[53px] xl:pt-[57px] z-10">
            </div>

            {/* Main Section */}
            <div className="w-full md:w-[75%] lg:w-[80%] pt-[55px] md:pt-[65px] xl:pt-[70px] min-h-screen flex flex-wrap fixed top-0 right-0 bottom-0">
              <div className="w-full px-5 pb-[45px] md:pb-[56px] xl:pb-[63px]">
                <h1 className="font-display text-[9vw] md:text-[5.5vw] lg:text-[5vw] xl:text-[4.4vw] leading-none mb-6 md:mb-8 max-w-[85%] md:max-w-[85%] lg:max-w-[75%]">Please reach out to talk to us about an upcoming project.</h1>                
              </div>

              <div className="pb-[45px] md:pb-[53px] xl:pb-[57px] mt-auto w-full px-5">
                <div className="w-full border-t border-black">
                  <div className="w-full py-5 pb-8 max-w-[600px]">
                    <div className="text-sm leading-snug w-[85%] mb-6 md:mb-12 content tracking-tight">
                      <p className="block">If you'd like to work with us on your next project, please feel free to drop us a line at the address below — we will typically respond within 48 hours. Since we're a small studio with limited availability, our usual lead time to start is 4-6 weeks.</p>

                      <a className="inline-block text-lg md:text-xl xl:text-xl leading-[1.5] md:leading-[1.5] xl:leading-[1.5] a11y-focus relative font-display mt-3">
                        hello@shiftwalk.studio
                        <span className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-black"></span>
                      </a>
                    </div>

                    <div className="text-sm leading-snug w-[85%] content tracking-tight">
                      <p className="block">We're not the most active at social media, but we do occasionally post updates over at Instagram. Drop by.</p>

                      <a className="inline-block text-lg md:text-xl xl:text-xl leading-[1.5] md:leading-[1.5] xl:leading-[1.5] a11y-focus relative font-display mt-3">
                        Instagram
                        <span className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-black"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full fixed bottom-0 left-0 right-0 z-20">
              <Footer noRightPad noTop />
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
