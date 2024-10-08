"use client";
import { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";
import products from "@/data/products.json";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
} from "@mui/material";

const removeAccents = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const ProductsPage: React.FC = () => {
  const [category, setCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("name-asc");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchQuery, sortOrder]);

  const categories = [
    "Todos",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts = products
    .filter((product) => {
      // Filtrar por categoria
      if (category !== "Todos" && product.category !== category) {
        return false;
      }

      // Se não houver texto de busca, retornar todos
      if (!searchQuery) {
        return true;
      }

      // Remover acentos e converter para minúsculas
      const normalizedSearchQuery = removeAccents(searchQuery.toLowerCase());
      const normalizedProductName = removeAccents(
        product.name?.toLowerCase() || ""
      );
      const normalizedProductDescription = removeAccents(
        product.description?.toLowerCase() || ""
      );

      // Dividir a busca em palavras
      const searchWords = normalizedSearchQuery.split(/\s+/);

      // Verificar se todas as palavras estão presentes no nome ou descrição
      const matchesName = searchWords.every((word) =>
        normalizedProductName.includes(word)
      );
      const matchesDescription = searchWords.every((word) =>
        normalizedProductDescription.includes(word)
      );

      // Retornar true se corresponder ao nome ou descrição
      return matchesName || matchesDescription;
    })
    .sort((a, b) => {
      // Ordenação, normalizando nomes
      const nameA = removeAccents(a.name?.toLowerCase() || "");
      const nameB = removeAccents(b.name?.toLowerCase() || "");

      if (sortOrder === "name-asc") {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === "name-desc") {
        return nameB.localeCompare(nameA);
      } else if (sortOrder === "price-asc") {
        return (a.price ?? 0) - (b.price ?? 0);
      } else if (sortOrder === "price-desc") {
        return (b.price ?? 0) - (a.price ?? 0);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Produtos</h1>

        {/* Filtros e ordenação */}
        <div className="flex flex-wrap gap-4 mb-4">
          {/* Campo de busca */}
          <TextField
            label="Buscar"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Seleção de categoria */}
          <FormControl variant="outlined" style={{ minWidth: 120 }}>
            <InputLabel>Categoria</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value as string)}
              label="Categoria"
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Ordenação */}
          <FormControl variant="outlined" style={{ minWidth: 160 }}>
            <InputLabel>Ordenar por</InputLabel>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as string)}
              label="Ordenar por"
            >
              <MenuItem value="name-asc">Nome (A-Z)</MenuItem>
              <MenuItem value="name-desc">Nome (Z-A)</MenuItem>
              <MenuItem value="price-asc">Preço (menor para maior)</MenuItem>
              <MenuItem value="price-desc">Preço (maior para menor)</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Lista de produtos */}
        {displayedProducts.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

        {/* Paginação */}
        <div className="flex justify-center mt-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            color="primary"
          />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
