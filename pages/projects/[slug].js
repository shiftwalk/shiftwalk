import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import BodyRenderer from '@/components/body-renderer'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import Pill from '@/components/pill'

const query = `{
  "project": *[_type == "projects" && slug.current == $slug][0]{
    title,
    projectCode,
    overview,
    services[],
    liveUrl,
    additionalLinks[] {
      linkText,
      linkUrl,
    },
    imageBlocks[] {
      ...,
      image {
        asset-> {
          ...
        },
        videoOverride {
          asset-> {
            ...
          }
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      images[] {
        asset-> {
          ...
        },
        videoOverride {
          asset-> {
            ...
          }
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      }
    },
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
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  function updateIsInfoOpen() {
    setIsInfoOpen(prevIsInfoOpen => !prevIsInfoOpen)
  }

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
            <div className={`fixed top-0 right-0 bottom-0 h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] border-l border-black hidden lg:flex flex-wrap ${ isInfoOpen ? 'w-[30%] 2xl:w-[500px]' : 'w-[95px] xl:w-[105px]' }`}>
              <div className="w-full py-5 pt-8 relative">
                <button className="text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none absolute bottom-0 pb-5 pt-5 px-5 right-0 border-t border-black w-full text-right" onClick={()=> updateIsInfoOpen() }>
                  + {isInfoOpen ? 'Hide Info' : 'Info' }
                </button>

                <div className={`px-5 ${isInfoOpen ? '' : 'hidden' }`}>
                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( A )</span>
                    <span className="block leading-none">Overview</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-6 lg:mb-12 content tracking-tight">
                    <p>{project.overview}</p>
                  </div>

                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( B )</span>
                    <span className="block leading-none">Services</span>
                  </span>

                  <div className={`text-sm leading-snug w-[85%] content tracking-tight ${(project.additionalLinks?.length > 0 || project.liveUrl) ? ' mb-6 lg:mb-12' : '' }`}>
                    <ul>
                      {project.services.map((e, i) => {
                        return (
                          <li key={i}>{e}</li>
                        )
                      })}
                    </ul>
                  </div>
                  
                    
                  {(project.additionalLinks?.length > 0 || project.liveUrl) && (
                    <>
                      <span className="flex items-center mb-6 text-sm">
                        <span className="font-serif leading-none text-xs block mr-[6px]">( C )</span>
                        <span className="block leading-none">Links</span>
                      </span>

                      <div className="text-sm leading-snug w-full content tracking-tight">
                        {project.liveUrl && (<div>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full group mb-2">
                            <Pill label="Visit Live Site" />
                          </a>
                        </div>)}
                        
                        {project.additionalLinks && (
                          <>
                            {project.additionalLinks.map((e, i) => {
                              return (
                                <div key={i}>
                                  <a href={e.linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full group mb-2">
                                    <Pill label={e.linkText} />
                                  </a>
                                </div>
                              )
                            })}
                          </>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div>
              <div className={`pt-32 md:pt-[20vh] xl:pt-[30vh] relative ${ isInfoOpen ? 'w-full lg:w-[70%] 2xl:w-[calc(100%-500px)]' : 'w-full lg:w-[calc(100%-95px)] xl:w-[calc(100%-105px)]' }`}>
                <Link href="/projects">
                  <a>
                    <svg className="mx-5 w-6 absolute top-0 left-0 mb-3 pt-[60px] md:pt-[74px] xl:pt-[80px]" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.64C1.893 3.733 3.653 2.293 5.28.32h1.4c-.4.853-.8 1.6-1.2 2.24a10.37 10.37 0 0 1-1.12 1.6h23.32v1.68H4.36c.373.453.747 1 1.12 1.64.4.64.8 1.373 1.2 2.2h-1.4C3.653 7.733 1.893 6.293 0 5.36v-.72Z" fill="#242B2D"/></svg>
                  </a>
                </Link>

                <div className="px-5">
                  <div className="w-full border-b border-black relative">
                    <span className="font-serif mb-2 block text-lg">( {project.projectCode } )</span>
                    <h1 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none md:leading-none xl:leading-none mb-3 max-w-[70%] md:max-w-[75%]">{project.title}</h1>
                  </div>
                </div>
              </div>

              <div className={`${ isInfoOpen ? 'w-full lg:w-[70%] 2xl:w-[calc(100%-500px)]' : 'w-full lg:w-[calc(100%-95px)] xl:w-[calc(100%-105px)]' }`}>
                <div className="p-5 pb-0">
                  <BodyRenderer body={project.imageBlocks} />
                </div>
                <Footer />
              </div>
            </div>
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