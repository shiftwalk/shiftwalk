import Img from 'next/image'
import sanity from '@/services/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { useEffect, useState } from 'react';

export default function Image({ image, layout, widthOverride, heightOverride, focalPoint, className, priority, noCaption, noBg, sizes, nonRelative, introDelay, deepGrain, quality }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)


  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(quality ? quality : 75)
      .fit('clip')
  };
  
  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};

  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (layout) { attributes.layout = layout } else { attributes.layout = 'responsive' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }
  if (sizes) { attributes.sizes = sizes }

	return (image.videoOverride || image.overrideVimeoVideo) ? (
    <div className={`image bg-grey bg-opacity-30 relative overflow-hidden ${className} w-full ${layout == 'fill' && 'cover-image' }`}>

      <div className={`absolute inset-0 w-full h-full z-[20] transition-opacity ease-[cubic-bezier(0.65,0,0.35,1)] duration-[500ms] ${introDelay ? 'delay-[500ms]' : '' } ${imageIsLoaded ? 'opacity-0' : 'opacity-100' } ${priority ? 'opacity-0' : '' }`}>
        <Img src={image.asset.metadata.lqip} alt="" layout="fill" role="presentation" className="w-full h-full object-cover absolute inset-0" />
      </div>

      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 z-[10] transition ease-[cubic-bezier(0.65,0,0.35,1)] duration-[500ms] motion-safe:block hidden ${imageIsLoaded ? 'opacity-100' : 'opacity-0' }`}>
        <source src={ image.overrideVimeoVideo ? image.overrideVimeoVideo : image.videoOverride.asset.url } type="video/mp4" />

        Sorry. Your browser does not support the video tag.
      </video>
      
      <div className={`z-[10] ${imageIsLoaded ? 'opacity-100' : 'opacity-0' } ${priority ? 'opacity-0' : 'transition-opacity ease-[cubic-bezier(0.65,0,0.35,1)] duration-[500ms]' }`}>
        <Img
          {...imageProps}
          {...attributes}
          {...(priority ? {
            priority: true} : {}
          )}
          onLoad={event => {
            const target = event.target;
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
            }
          }}
        />
      </div>
    </div>
	) : (
    <figure className={`image relative bg-grey bg-opacity-30 overflow-hidden ${className} ${layout == 'fill' && 'cover-image' }`}>
      {!priority && (
        <div className={`absolute inset-0 w-full h-full z-[20] ${priority ? 'opacity-0' : 'transition-opacity ease-[cubic-bezier(0.65,0,0.35,1)] duration-[500ms]' } ${introDelay ? 'delay-[500ms]' : '' } ${(imageIsLoaded && !priority) ? 'opacity-0' : 'opacity-100' }`}>
          <Img src={image.asset.metadata.lqip} alt="" layout="fill" role="presentation" className="w-full h-full object-cover absolute inset-0" />
        </div>
      )}

      <div className={`z-[10]`}>
		    <Img
          {...imageProps}
          {...attributes}
          {...(priority ? {
            priority: true} : {}
          )}
          onLoad={event => {
            const target = event.target;
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
            }
          }}
        />
      </div>
    </figure>
  )
}