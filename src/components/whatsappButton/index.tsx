import Image from "next/image";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5551991934216"; // Número do WhatsApp da loja
  const message = "Olá, gostaria de mais informações.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
