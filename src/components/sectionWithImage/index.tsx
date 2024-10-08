// src/components/SectionWithImage.tsx

import React from "react";

interface SectionWithImageProps {
  title: string;
  content: string;
  imageSrc?: string; // Tornar opcional
  reverse?: boolean;
  bgColor?: string;
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({
  title,
  content,
  imageSrc,
  reverse = false,
  bgColor = "white",
}) => {
  // Definir uma imagem placeholder padrão
  const placeholderImage = "https://via.placeholder.com/600x400";

  return (
    <section className={`py-8 bg-${bgColor}`}>
      <div
        className={`container mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center`}
      >
        {/* Imagem */}
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc || placeholderImage}
            alt={title}
            className="w-full h-auto"
          />
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionWithImage;
