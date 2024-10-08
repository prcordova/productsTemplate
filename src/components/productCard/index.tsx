// ProductCard.tsx

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ProductCardProps {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  whatsapp?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  whatsapp,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `Olá, vi o produto ${
      name || ""
    } em sua loja e gostaria de falar mais sobre ele.`;
    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col h-[450px]">
      {image && (
        <div
          className="h-48 w-full overflow-hidden flex-shrink-0 cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={image}
            alt={name || "Produto"}
            className="w-full h-full object-cover min-h-[192px]"
          />
        </div>
      )}
      <div className="flex-grow flex flex-col justify-between overflow-hidden">
        {name && <h2 className="text-xl font-bold mt-2">{name}</h2>}
        {description && (
          <p
            className="mt-1 text-sm text-gray-700 overflow-hidden"
            style={{ minHeight: "60px", maxHeight: "80px" }}
          >
            {description.length > 100
              ? `${description.substring(0, 97)}...`
              : description}
          </p>
        )}
        {price !== undefined && (
          <p className="mt-1 font-semibold">Preço: R$ {price}</p>
        )}
      </div>
      <button
        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded"
        onClick={handleWhatsAppClick}
        style={{ alignSelf: "flex-end" }}
      >
        Fale conosco no WhatsApp
      </button>

      {/* Modal para exibir a imagem ampliada */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="flex items-center justify-center"
        BackdropProps={{
          className: "bg-black bg-opacity-75",
        }}
      >
        <div className="relative">
          <img
            src={image}
            alt={name || "Produto"}
            className="max-w-full max-h-screen"
          />
          <button
            className="absolute top-2 right-2 text-white text-3xl"
            onClick={() => setIsModalOpen(false)}
            aria-label="Fechar"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
