import Link from "next/link";
import Image from "@/components/image";
import Gif from "@/components/gif";
import Pill from "./pill";
import { m } from "framer-motion"
import { reveal } from "@/helpers/transitions";
import { useState } from "react";
import { SplitText } from "./splitText";
// import PixelatedImage from "./pixelated-image";

export default function Teaser({ images, hoverImages, slug, title, projectCode, noCaption, matchHeight, leftAlign }) {
  const [shouldTransition, setShouldTransition] = useState(false);

  function handleHover() {
    setShouldTransition(true);
  }

  function handleHoverOut() {
    setShouldTransition(false);
  }

  return images.length == 1 ? (
    <Link href={`${slug}`}>
      <a className={`flex flex-wrap w-full group relative group ${noCaption ? '' : 'pb-6 md:pb-10'}`} onMouseEnter={handleHover} 
      onMouseLeave={handleHoverOut}>
        {hoverImages && (
          <div className={`absolute inset-0 z-10 opacity-0 md:group-hover:opacity-100`}>
            <Image
              image={hoverImages[0]}
              focalPoint={hoverImages[0].asset.hotspot}
              layout="responsive"
              sizes="(min-width: 768px) 80vw, 100vw"
              className="w-full"
            />
          </div>
        )}

        <div className="w-full">
          <Image
            image={images[0]}
            focalPoint={images[0].asset.hotspot}
            layout="responsive"
            sizes="(min-width: 768px) 80vw, 100vw"
            className="w-full"
          />
        </div>
        
        {/* <PixelatedImage
          image={`${images[0].asset.url}?q=1&w=${images[0].asset.metadata.dimensions.width/2}&fit=clip&auto=format`}
          sanityImage={images[0]}
          width={images[0].asset.metadata.dimensions.width/4}
          height={images[0].asset.metadata.dimensions.height/4}
        /> */}

        <div className={`${noCaption ? 'block md:hidden' : 'h-full flex flex-wrap' } ${leftAlign ? 'text-left' : 'md:text-center'} w-full`}>
          <div className="py-4 md:py-5 w-full">
            <div className={`overflow-hidden relative text-lg md:text-lg xl:text-xl leading-none md:leading-none xl:leading-none uppercase font-display mb-1 md:mb-2 flex flex-wrap ${leftAlign ? 'max-w-[85%] md:max-w-[90%]' : 'w-full md:px-6 justify-center' }`}>
              <SplitText
                initial={{ y: '100%' }}
                animate="enter"
                exit="exit"
                transition={{ delay: 0, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                variants={{
                  enter: i => ({
                    y: 0,
                  }),
                  exit: i => ({
                    y: '100%',
                  })
                }}
              >
                {title}
              </SplitText>
            </div>
            <div className="overflow-hidden relative">
              <m.span variants={reveal} className="font-serif text-lg leading-none block">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</m.span>
            </div>
          </div>

          <div className="mb-2 md:mb-0 w-full absolute bottom-0 left-0 right-0 hidden md:block">
            <Pill label="Explore Project" mouseOverride={true} shouldTransitionOverride={shouldTransition} parentHover={true} />
          </div>
        </div>
      </a>
    </Link>
  ) : (
    <Link href={`${slug}`}>
      <a className="block">
        <Gif images={images} />
        
        <div className="relative overflow-hidden">
          <m.span variants={reveal} className="mt-[6px] block text-base md:text-lg xl:text-2xl leading-none md:leading-none xl:leading-none">{title}</m.span>
        </div>
        <span className="font-serif text-sm md:text-base xl:text-lg leading-none hidden md:block">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</span>
      </a>
    </Link>
  )
}