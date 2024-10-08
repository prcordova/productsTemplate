"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary p-4">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Minha Loja de Mármores. Todos os direitos
          reservados.
        </p>
        <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
        <p>Contato: (11) 99999-9999</p>
      </div>
    </footer>
  );
};

export default Footer;
