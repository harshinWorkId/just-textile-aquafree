



"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import photos from "@/components/photos";
import {
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";
// Import react-photo-album dynamically (client only)
const RowsPhotoAlbum = dynamic(
  () => import("react-photo-album").then((mod) => mod.RowsPhotoAlbum),
  { ssr: false }
);

import "react-photo-album/rows.css";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo.src}
        alt={alt || photo.alt || ""}
        title={title}
        sizes={sizes}
        style={{ objectFit: "cover" }}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function PhotoGallery() {
  console.log("Photos:", photos);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [{ viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" }],
        }}
      />
    </div>
  );
}




// import { MasonryPhotoAlbum } from "react-photo-album";
// import "react-photo-album/masonry.css";

// import photos from "./photos";

// export default function App() {
//   return <MasonryPhotoAlbum photos={photos} />;
// }



