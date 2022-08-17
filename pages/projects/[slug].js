import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'

const query = `{
  "project": *[_type == "projects" && slug.current == $slug][0]{
    title,
    projectCode,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function ProjectSlug(initialData) {
  const { data: { project } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title={project.title} />

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
                <span className="font-serif mb-2 block text-lg">( Design + Build Studio )</span>
                <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                  <img className="w-full h-full object-cover object-center absolute inset-0" src="https://placedog.net/600/983" alt="CHANGE ME" />
                </div>
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-7 pt-32 md:pt-[20vh] xl:pt-[30vh] relative">
                <Link href="/projects">
                  <a>
                    <svg className="mx-3 w-7 absolute top-0 left-0 mb-3 pt-[60px] md:pt-[74px] xl:pt-[80px]" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.64C1.893 3.733 3.653 2.293 5.28.32h1.4c-.4.853-.8 1.6-1.2 2.24a10.37 10.37 0 0 1-1.12 1.6h23.32v1.68H4.36c.373.453.747 1 1.12 1.64.4.64.8 1.373 1.2 2.2h-1.4C3.653 7.733 1.893 6.293 0 5.36v-.72Z" fill="#242B2D"/></svg>
                  </a>
                </Link>

                <div className="px-3">
                  <div className="w-full mb-8 md:mb-0">
                    <span className="font-serif mb-2 block text-lg">( {project.projectCode } )</span>
                    <h1 className="font-display text-[9vw] md:text-[4.8vw] xl:text-[4.25vw] leading-none  mb-6 md:mb-8 max-w-[95%] md:max-w-[95%]">{project.title}</h1>
                  </div>
                </div>
              </div>

              <div className="col-span-10 md:col-span-7">
                <div className="p-3">
                  Content
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

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('projects')
  return {
    paths: paths,
    fallback: false,
  };
}