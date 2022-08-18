import Image from "@/components/image";

export default function ModularSingleImageBlock({ image }) {
  return (
    <Image
      image={image}
      focalPoint={image.asset.hotspot}
      layout="responsive"
      sizes="(min-width: 768px) 90vw, 90vw"
      className="w-full"
      noCaption
    />
  )
}