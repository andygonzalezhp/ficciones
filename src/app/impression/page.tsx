import Back from "@/components/back";
import Image from "next/image";

export const metadata = { title: "impression — ficciones" };

const images = [
  { src: "/images/uschi.jpg", alt: "uschi" },
  { src: "/images/calvin.jpg", alt: "calvin & hobbes" },
  { src: "/images/bread.png", alt: "bread" },
  { src: "/images/pokemon.png", alt: "pokemon" },
  { src: "/images/yeule.jpg", alt: "yeule" },
];

export default function Impression() {
  return (
    <div>
      <Back />
      <h1 className="text-5xl mb-6">impression</h1>
      <p className="opacity-80 mb-6">sic deinde quicumque alius transiliet moenia mea</p>

      {/* masonry via CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {images.map((img, i) => (
          <div
            key={i}
            className="mb-6 break-inside-avoid rounded-sm shadow-[0_8px_28px_rgba(0,0,0,.25)] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}   // give Next an intrinsic size
              height={800}  // aspect ratio can be adjusted
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
