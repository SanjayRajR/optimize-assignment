import Image from "next/image";

const images = [
  {
    src: "/1.png",
    id: 1,
    alt: "Picture 1"
  },
  {
    src: "/2.png",
    id: 2,
    alt: "Picture 2"
  },
  {
    src: "/3.png",
    id: 3,
    alt: "Picture 3"
  },
  {
    src: "/4.png",
    id: 4,
    alt: "Picture 4"
  },
  {
    src: "/5.png",
    id: 5,
    alt: "Picture 5"
  },
  {
    src: "/6.png",
    id: 6,
    alt: "Picture 6"
  },
  {
    src: "/7.png",
    id: 7,
    alt: "Picture 7"
  },
  {
    src: "/8.png",
    id: 8,
    alt: "Picture 8"
  },
  {
    src: "/9.png",
    id: 9,
    alt: "Picture 9"
  },
  {
    src: "/10.png",
    id: 10,
    alt: "Picture 10"
  },
  {
    src: "/11.png",
    id: 11,
    alt: "Picture 11"
  },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((num) => (
            <div
              key={num.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={num.src}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                alt={num.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
