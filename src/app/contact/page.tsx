// src/pages/contact.tsx
"use client";

import { MapInfo } from "@/components/mapsInfo";
import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Entre em Contato Conosco
        </h1>

        <div className="flex flex-col items-center space-y-6">
          {/* E-mail */}
          <a
            href="mailto:seuemail@exemplo.com"
            className="flex items-center space-x-4"
          >
            <FaEnvelope className="text-3xl text-blue-600" />
            <span className="text-xl">seuemail@exemplo.com</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/seunumero"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4"
          >
            <FaWhatsapp className="text-3xl text-green-500" />
            <span className="text-xl">+55 (11) 99999-9999</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4"
          >
            <FaInstagram className="text-3xl text-pink-600" />
            <span className="text-xl">@seuusuario</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/suapagina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4"
          >
            <FaFacebookF className="text-3xl text-blue-800" />
            <span className="text-xl">/suapagina</span>
          </a>
        </div>

        {/* Texto adicional */}
        <p className="mt-8 text-center text-lg">
          Estamos ansiosos para ouvir de você! Por favor, entre em contato
          através de qualquer um dos meios acima, e retornaremos o mais breve
          possível.
        </p>
        <h1>Estamos localizados na Rua : xxx </h1>
        <MapInfo />
      </main>
    </div>
  );
};

export default ContactPage;
