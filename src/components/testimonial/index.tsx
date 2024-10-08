import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cliente 1",
    message: "Ótimo serviço e qualidade excepcional!",
    image: "/path-to-image.jpg",
  },
  // Adicione mais depoimentos
];

const Testimonials: React.FC = () => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Depoimentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 rounded">
            {testimonial.image && (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full"
              />
            )}
            <p className="mt-2 italic">&quot;{testimonial.message}&quot;</p>
            <p className="mt-2 font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
