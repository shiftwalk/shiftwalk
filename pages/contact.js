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
            <div className="fixed md:top-0 right-0 bottom-0 w-full md:w-[35%] lg:w-[25%] md:h-screen col-span-3 col-start-8 md:border-l border-black flex flex-wrap pt-[45px] md:pt-[53px] xl:pt-[57px] z-10">
              <div className="flex flex-wrap w-full pb-[35px] md:pb-16">
                
                <div className="w-full px-5 pt-5 max-w-[480px]">
                  <span className="flex items-center mb-3 md:mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( A )</span>
                    <span className="block leading-none">New Business</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-6 md:mb-12 content tracking-tight">
                    <p className="hidden md:block">If you'd like to work with us on your next project, please feel free to drop us a line at the address below — we will typically respond within 48 hours. Since we're a small studio with limited availability, our usual lead time to start is 4-6 weeks.</p>

                    <p className="leading-none underline">hello@shiftwalk.studio</p>
                  </div>

                  <span className="flex items-center mb-3 md:mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( B )</span>
                    <span className="block leading-none">Social</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-6 md:mb-12 content tracking-tight">
                    <p className="hidden md:block">We're not the most active at social media, but we do occasionally post updates over at Instagram. Drop by.</p>

                    <p className="leading-none underline">@_shiftwalk.studio</p>
                  </div>

                  <span className="hidden md:flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( C )</span>
                    <span className="block leading-none">Jobs</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] content tracking-tight hidden md:block">
                    <p>Whilst we're not actively hiring right now, we're always on the look out for talented freelance photographers, motion designers, 3D designers, and creative developers to help with work in the studio. Please reach out if this describes you — we'd love to chat.</p>
                  </div>
                </div>

                <div className="p-5 py-4 border-t border-grey w-full ml-5 md:ml-0 mr-5 md:hidden">
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="w-full md:w-[65%] lg:w-[75%] pt-[55px] md:pt-[65px] xl:pt-[70px] min-h-screen flex flex-wrap md:items-center fixed top-0 left-0 bottom-0">
              <div className="w-full px-5 md:mt-auto pb-[45px] md:pb-[56px] xl:pb-[63px]">
                <div className="mt-[4vw] mb-[13vw] md:mb-[8.5vw] hidden md:block">
                  <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                </div>
                <h1 className="font-display text-[9vw] md:text-[4vw] leading-none indent-[8vw] mb-6 md:mb-8 max-w-[85%] md:max-w-[90%] lg:max-w-[80%]">Please reach out if you would like to talk to us about an upcoming project.</h1>
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
