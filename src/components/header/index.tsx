import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-accent text-2xl font-bold">
          Magnani
        </Link>
        <nav>
          <Link href="/about" className="mx-2">
            Sobre
          </Link>
          <Link href="/projects" className="mx-2">
            Projetos
          </Link>
          <Link href="/products" className="mx-2">
            Produtos
          </Link>
          <Link href="/contact" className="mx-2">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
