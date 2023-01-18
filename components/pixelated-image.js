import { useEffect, useRef, useState } from "react";
import { ImagePixelated } from "react-pixelate"
import { useInView } from "framer-motion"
import Image from "./image";

export default function PixelatedImage({ image, sanityImage, width, height }) {
  const [currentIndex, setCurrentIndex] = useState(80);
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    let speed = 50

    const i_id = setInterval(() => {
      if (currentIndex == 0) {
      } else {
        if (isInView) {
          setCurrentIndex(currentIndex => currentIndex-10)
        }
      }
    }, speed);

    return () => {
      clearInterval(i_id);
      
      if (!isInView) {
        setCurrentIndex(80)
      }
    }
  },[currentIndex, isInView]);

  return (
    <div ref={ref} className="pixelated-image relative">
      {sanityImage && (
        <Image
          image={sanityImage}
          layout="responsive"
          sizes="(min-width: 768px) 80vw, 100vw"
          className={`w-full ${currentIndex == 0 ? '' : '' }`}
        />
      )}
      
      <div className={`absolute inset-0 z-10 ${(currentIndex == 0 && sanityImage) ? 'opacity-0' : 'opacity-100' }`}>
        <ImagePixelated
          pixelSize={currentIndex}
          src={image}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}