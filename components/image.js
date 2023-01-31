import Img from 'next/image'
import sanity from '@/services/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { useEffect, useState } from 'react';

export default function Image({ image, layout, widthOverride, heightOverride, focalPoint, className, priority, noCaption, noBg, sizes, nonRelative }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)


  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      // .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      // .quality(90)
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
    <div className={`image bg-grey bg-opacity-30 relative ${className} w-full ${layout == 'fill' && 'cover-image' }`}>
      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 z-[10] transition ease-in-out duration-[750ms] ${imageIsLoaded ? 'opacity-100' : 'opacity-0' }`}>
        <source src={ image.overrideVimeoVideo ? image.overrideVimeoVideo : image.videoOverride.asset.url } type="video/mp4" />

        Sorry. Your browser does not support the video tag.
      </video>
      
      <div className={`z-[10] transition-opacity ease-in-out duration-[750ms] ${imageIsLoaded ? 'opacity-100' : 'opacity-0' }`}>
        <Img
          {...imageProps}
          {...attributes}
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
    <figure className={`image relative bg-grey bg-opacity-30 ${className} ${layout == 'fill' && 'cover-image' }`}>
      <div className={`z-[10] transition-opacity ease-in-out duration-[750ms] ${imageIsLoaded ? 'opacity-100' : 'opacity-0' }`}>
		    <Img
          {...imageProps}
          {...attributes}
          
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