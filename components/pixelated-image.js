import { useEffect, useRef, useState } from "react";
import { ImagePixelated } from "react-pixelate"
import { useInView } from "framer-motion"
import Image from "./image";

export default function PixelatedImage({ image, sanityImage, width, height }) {
  const [pixelated, setPixelated] = useState(true);
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setPixelated(false)
      }, 500);
    } else (
      setPixelated(true)
    )
  },[pixelated, isInView]);

  return (
    <div className="pixelated-image relative" ref={ref}>
      {sanityImage && (
        <div className="w-full relative z-0">
          <Image
            image={sanityImage}
            layout="responsive"
            sizes="(min-width: 768px) 80vw, 100vw"
            className={`w-full ${pixelated ? 'opacity-0' : '' }`}
          />
        </div>
      )}
      
      <div className={`absolute inset-0 scale-[1.005] z-20 ${(pixelated && sanityImage) ? 'opacity-100' : 'opacity-0' }`}>
        <ImagePixelated
          pixelSize={45}
          src={image}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}