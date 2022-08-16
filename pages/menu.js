import Layout from '@/components/layout'
import Header from '@/components/header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import Link from 'next/link'

export default function Menu() {

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
            <div className="fixed top-0 right-0 bottom-0 w-[29.75vw] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 border-l border-grey px-3 hidden md:flex flex-wrap bg-blue text-grey">
              <div className="w-full mt-auto py-3">
                <span className="font-serif mb-2 block text-lg text-right">( Note )</span>
                <div className="content w-[85%] md:w-[90%]0 max-w-[360px] text-right text-lg ml-auto">
                  <p>If you’d like to collaborate with us on a project, please reach out on any of the methods opposite and we will be in touch.</p>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-7 pt-[55px] md:pt-[65px] xl:pt-[70px] min-h-screen flex flex-wrap items-center px-3 pb-3 bg-blue text-grey">
                <div className="w-full mb-8 md:mb-0 mt-auto">

                  <span className="font-display text-[12vw] md:text-[8.2vw] xl:text-[8.25vw] leading-none mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] block">
                    <Link href="/"><a className="inline-block">Studio,&nbsp;</a></Link>
                    <Link href="/projects"><a className="inline-block">Projects,&nbsp;</a></Link>
                    <Link href="/journal"><a className="inline-block">Journal,&nbsp;</a></Link>
                    <a href="mailto:hello@shiftwalk.studio" className="inline-block">Email</a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 mt-auto">
                  <a href="mailto:hello@shiftwalk.studio" className="inline-block underline text-xl md:text-2xl xl:text-3xl leading-none md:leading-none xl:leading-none a11y-focus">hello@shiftwalk.studio</a>

                  <span className="block text-base md:text-lg xl:text-xl leading-none md:leading-none xl:leading-none">&bull;</span>
                  
                  <a href="https://www.instagram.com/_shiftwalk.studio/" rel="noreferrer noopener" target="_blank" className="inline-block underline text-xl md:text-2xl xl:text-3xl leading-none md:leading-none xl:leading-none a11y-focus">Instagram</a>
                </div>

              </div>
            </Grid>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
