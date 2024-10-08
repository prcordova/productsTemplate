// src/pages/index.tsx

"use client";
import { Caroussel } from "@/components/caroussel";
import FeaturedProducts from "@/components/featuredProducts";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Caroussel />

        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Home;
