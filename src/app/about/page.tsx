// src/pages/about.tsx

import React from "react";
import SectionWithImage from "@/components/sectionWithImage";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Seção 1: Imagem à esquerda, texto à direita */}
        <SectionWithImage
          title="Nossa História"
          content="Conte aqui a história da sua empresa. Este é um texto de exemplo que você pode substituir pelo conteúdo real."
          imageSrc="www.google.com/url?sa=i&url=https%3A%2F%2Ftododia.com.br%2Fcidades%2Fprograma-crianca-feliz-realiza-adesao-de-familias-de-hortolandia%2F&psig=AOvVaw1ocPOxzFeTmabKU_cNfcuM&ust=1728514771454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCNi7vx_4gDFQAAAAAdAAAAABAE"
          bgColor="white"
        />

        {/* Seção 2: Imagem à direita, texto à esquerda */}
        <SectionWithImage
          title="Nossa Equipe"
          content="Apresente sua equipe, destacando as habilidades e a dedicação dos profissionais."
          imageSrc="https://via.placeholder.com/600x400"
          reverse
          bgColor="gray-100"
        />

        {/* Seção 3: Texto centralizado */}
        <section className="py-8 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-lg">
              Nossa missão é fornecer os melhores produtos e serviços, buscando
              sempre a satisfação total de nossos clientes e contribuindo para
              um mundo melhor.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
