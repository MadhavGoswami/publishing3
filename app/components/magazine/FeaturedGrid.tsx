import Image from "next/image";

const books = [1,2,3,4,5,6];

export default function FeaturedGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      <h2 className="text-3xl mb-10">Featured Releases</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((item) => (
          <div key={item} className="group cursor-pointer">
            
            <div className="relative h-[300px]">
              <Image
                src="/book.jpg"
                alt="book"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-4 text-lg">Book Title {item}</h3>
            <p className="text-sm text-gray-500">Author Name</p>

          </div>
        ))}
      </div>
    </section>
  );
}