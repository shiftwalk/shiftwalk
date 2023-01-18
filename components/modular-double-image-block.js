
import Image from "@/components/image";
import Grid from "./grid";

export default function ModularDoubleImageBlock({ images }) {
  return (
    <Grid className="gap-3">
      {images.map((e, i) => { 
        return (
          <div className="col-span-5" key={i}>
            <Image
              image={e}
              focalPoint={e.asset.hotspot}
              layout="responsive"
              sizes="(min-width: 768px) 99vw, 99vw"
              className="w-full"
              noCaption
            />
          </div>
        )
      })}
    </Grid>
  )
}